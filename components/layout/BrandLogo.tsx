import Link from "next/link";

type BrandLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function BrandLogo({ tone = "dark", compact = false }: BrandLogoProps) {
  const textClass = tone === "dark" ? "text-brand-navy" : "text-white";
  const detailClass = tone === "dark" ? "text-brand-limeDark" : "text-brand-limeSoft";
  const birdMain = tone === "dark" ? "text-[#0F3B2E]" : "text-white";
  const birdAccent = tone === "dark" ? "text-[#7A8F4A]" : "text-brand-limeSoft";
  const eye = tone === "dark" ? "text-[#EDE6DD]" : "text-[#0F3B2E]";

  return (
    <Link href="/" aria-label="Bird Control BC homepage" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2">
      <svg aria-hidden="true" viewBox="0 0 100 100" className="h-11 w-11 shrink-0">
        {/* Unmistakable bird silhouette: raised feathered wing, compact head, short beak, forked tail. */}
        <path
          d="M39 50C42 35 48 20 59 8c0 10-1 19-4 28 6-11 14-20 24-26-4 13-10 24-18 33 7-7 15-12 24-15-5 11-13 20-23 26-8-2-16-3-23-4Z"
          fill="currentColor"
          className={birdMain}
        />
        <path
          d="M42 51c5-11 10-20 17-27-1 8-2 15-5 22 5-7 10-13 17-17-3 8-8 15-14 21-5 1-10 1-15 1Z"
          fill="currentColor"
          className={birdAccent}
        />
        <path
          d="M17 61c11-7 21-11 31-13 8-2 16-2 23 1 4-2 8-3 12-2l10 4-10 4c-3 1-7 1-10 0-5 7-12 12-21 15-11 4-23 3-34-3l17-4-18-2Z"
          fill="currentColor"
          className={birdMain}
        />
        <path d="M82 48l12 3-12 4 4-4-4-3Z" fill="currentColor" className={birdMain} />
        <circle cx="78" cy="49.5" r="1.4" fill="currentColor" className={eye} />
        <path d="M18 78h68" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className={birdMain} />
      </svg>
      {!compact ? (
        <span className={`leading-none ${textClass}`}>
          <span className="font-display block text-[1.28rem] font-semibold tracking-[-0.035em]">Bird Control BC</span>
          <span className={`mt-1 block text-[0.54rem] font-bold uppercase tracking-[0.27em] ${detailClass}`}>Vancouver · Lower Mainland</span>
        </span>
      ) : null}
    </Link>
  );
}
