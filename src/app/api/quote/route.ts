import { NextRequest, NextResponse } from "next/server";

import {
  QuoteDeliveryConfigurationError,
  sendQuoteNotifications,
  type QuoteAttachment,
} from "@/lib/leads/quote-notifications";
import {
  checkQuoteRateLimit,
  createRateLimitHeaders,
} from "@/lib/security/quote-rate-limit";
import type { QuoteLeadPayload } from "@/types/lead";

export const runtime = "nodejs";

const maxFiles = 3;
const maxRequestBytes = 6 * 1024 * 1024;
const maxTotalFileBytes = 4 * 1024 * 1024;
const allowedImageTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

export async function POST(request: NextRequest) {
  const rateLimit = await checkQuoteRateLimit(request);
  const rateLimitHeaders = createRateLimitHeaders(rateLimit);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many quote requests. Please wait a few minutes, or call or text us directly.",
      },
      {
        status: 429,
        headers: {
          ...rateLimitHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  try {
    assertAllowedRequestSize(request);
    const formData = await request.formData();

    if (readText(formData, "companyWebsite")) {
      return NextResponse.json({ ok: true }, { headers: rateLimitHeaders });
    }

    const lead = readAndValidateLead(formData);
    const files = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);
    const attachments = await prepareAttachments(files);
    lead.photoNames = attachments.map((attachment) => attachment.filename);

    const notification = await sendQuoteNotifications({ lead, attachments });

    return NextResponse.json(
      {
        ok: true,
        notifications: {
          email: notification.emailSent,
          sms: notification.smsSent,
        },
      },
      { headers: rateLimitHeaders }
    );
  } catch (error) {
    if (error instanceof QuoteRequestValidationError) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: error.status, headers: rateLimitHeaders }
      );
    }

    if (error instanceof QuoteDeliveryConfigurationError) {
      console.error("Quote delivery configuration error", error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Online quote delivery is being configured. Please call or text us so we do not miss your request.",
        },
        { status: 503, headers: rateLimitHeaders }
      );
    }

    console.error("Quote submission failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not send your request right now. Please try again, or call or text us directly.",
      },
      { status: 502, headers: rateLimitHeaders }
    );
  }
}

function readAndValidateLead(formData: FormData): QuoteLeadPayload {
  const lead: QuoteLeadPayload = {
    name: readText(formData, "name", 120),
    phone: readText(formData, "phone", 40),
    email: readText(formData, "email", 200).toLowerCase(),
    propertyAddress: readText(formData, "propertyAddress", 240),
    city: readText(formData, "city", 100),
    serviceNeeded: readText(formData, "service", 140),
    propertyType: readText(formData, "propertyType", 140),
    message: readText(formData, "message", 3_000),
    consent: formData.get("consent") === "on",
    photoNames: [],
    source: readText(formData, "source", 120) || "quote_form",
  };

  if (
    !lead.name ||
    !lead.phone ||
    !lead.email ||
    !lead.city ||
    !lead.serviceNeeded ||
    !lead.propertyType ||
    !lead.message
  ) {
    throw new QuoteRequestValidationError("Please complete all required fields.");
  }

  if (!/^\S+@\S+\.\S+$/.test(lead.email)) {
    throw new QuoteRequestValidationError("Please enter a valid email address.");
  }

  if (lead.phone.replace(/\D/g, "").length < 10) {
    throw new QuoteRequestValidationError("Please enter a valid phone number.");
  }

  if (!lead.consent) {
    throw new QuoteRequestValidationError("Please confirm that we may contact you about this request.");
  }

  return lead;
}

async function prepareAttachments(files: File[]): Promise<QuoteAttachment[]> {
  if (files.length > maxFiles) {
    throw new QuoteRequestValidationError(`Please attach no more than ${maxFiles} photos.`);
  }

  const totalBytes = files.reduce((total, file) => total + file.size, 0);
  if (totalBytes > maxTotalFileBytes) {
    throw new QuoteRequestValidationError("Please keep the combined photo size under 4 MB.");
  }

  const attachments: QuoteAttachment[] = [];

  for (const file of files) {
    if (!allowedImageTypes.has(file.type)) {
      throw new QuoteRequestValidationError(
        "Please attach JPG, PNG, WebP, HEIC, or HEIF image files only."
      );
    }

    attachments.push({
      filename: sanitizeFilename(file.name),
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    });
  }

  return attachments;
}

function readText(formData: FormData, key: string, maxLength = 500) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function sanitizeFilename(filename: string) {
  const cleaned = filename.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
  return cleaned || "quote-photo.jpg";
}

function assertAllowedRequestSize(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    throw new QuoteRequestValidationError(
      "The quote request is too large. Please attach fewer or smaller photos.",
      413
    );
  }
}

class QuoteRequestValidationError extends Error {
  constructor(message: string, readonly status = 400) {
    super(message);
    this.name = "QuoteRequestValidationError";
  }
}
