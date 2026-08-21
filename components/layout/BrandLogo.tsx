import Link from "next/link";

type BrandLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function BrandLogo({ tone = "dark", compact = false }: BrandLogoProps) {
  const textClass = tone === "dark" ? "text-brand-navy" : "text-white";
  const detailClass = tone === "dark" ? "text-brand-limeDark" : "text-brand-limeSoft";

  return (
    <Link href="/" aria-label="Bird Control BC homepage" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2">
      <svg aria-hidden="true" viewBox="0 0 100 100" className="h-11 w-11 shrink-0">
        <path
          d="M16 76h80V27M24 85h72"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          className={tone === "dark" ? "text-[#0B2F27]" : "text-white"}
        />
        <path
          d="M88 32v39"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          className={tone === "dark" ? "text-[#8FA84F]" : "text-brand-limeSoft"}
        />
        <path
          d="M13 51c16-18 33-26 53-23 9 1 17-3 27-12-3 10-8 18-17 23l18 6-20 6C61 63 44 67 25 62c9-7 16-15 21-25-12 3-23 8-33 14Z"
          fill="currentColor"
          className={tone === "dark" ? "text-[#0B2F27]" : "text-white"}
        />
        <path d="M29 51c11-11 24-17 38-18-9 7-16 15-21 26-6-2-11-5-17-8Z" fill="currentColor" className={tone === "dark" ? "text-[#8FA84F]" : "text-brand-limeSoft"} />
        <circle cx="72" cy="34" r="1.8" fill="currentColor" className={tone === "dark" ? "text-brand-cream" : "text-[#0B2F27]"} />
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
