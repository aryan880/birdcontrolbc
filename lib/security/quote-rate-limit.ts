import { createHash } from "node:crypto";

const limit = 5;
const windowSeconds = 10 * 60;
const maxLocalEntries = 2_000;

type LocalRateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, LocalRateLimitEntry>;

export type QuoteRateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
  resetAt: number;
};

declare global {
  var quoteRateLimitStore: RateLimitStore | undefined;
}

export async function checkQuoteRateLimit(request: Request): Promise<QuoteRateLimitResult> {
  const identity = hashIdentity(readClientIp(request));
  const distributedResult = await checkDistributedRateLimit(identity);

  return distributedResult ?? checkLocalRateLimit(identity);
}

export function createRateLimitHeaders(result: QuoteRateLimitResult) {
  return {
    "RateLimit-Limit": String(result.limit),
    "RateLimit-Remaining": String(result.remaining),
    "RateLimit-Reset": String(Math.ceil(result.resetAt / 1_000)),
  };
}

async function checkDistributedRateLimit(identity: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const windowId = Math.floor(Date.now() / (windowSeconds * 1_000));
  const key = `quote-rate-limit:${identity}:${windowId}`;
  const resetAt = (windowId + 1) * windowSeconds * 1_000;

  try {
    const response = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, windowSeconds, "NX"],
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(2_500),
    });

    if (!response.ok) {
      return null;
    }

    const results = (await response.json()) as Array<{ result?: number }>;
    const count = Number(results[0]?.result);

    if (!Number.isFinite(count)) {
      return null;
    }

    return createResult(count, resetAt);
  } catch {
    // Do not block legitimate leads if the optional distributed store is unavailable.
    return null;
  }
}

function checkLocalRateLimit(identity: string) {
  const now = Date.now();
  const store = (globalThis.quoteRateLimitStore ??= new Map());
  const existing = store.get(identity);

  if (!existing || existing.resetAt <= now) {
    pruneLocalStore(store, now);
    const resetAt = now + windowSeconds * 1_000;
    store.set(identity, { count: 1, resetAt });
    return createResult(1, resetAt);
  }

  existing.count += 1;
  return createResult(existing.count, existing.resetAt);
}

function createResult(count: number, resetAt: number): QuoteRateLimitResult {
  return {
    allowed: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    retryAfterSeconds: Math.max(1, Math.ceil((resetAt - Date.now()) / 1_000)),
    resetAt,
  };
}

function readClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function hashIdentity(value: string) {
  return createHash("sha256").update(value).digest("hex").slice(0, 24);
}

function pruneLocalStore(store: RateLimitStore, now: number) {
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }

  if (store.size >= maxLocalEntries) {
    const oldestKey = store.keys().next().value;
    if (oldestKey) {
      store.delete(oldestKey);
    }
  }
}
