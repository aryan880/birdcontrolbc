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
          d="M12 72V22c0-6 4-10 10-10h49M88 28v50c0 6-4 10-10 10H29"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          className={tone === "dark" ? "text-[#0B2F27]" : "text-white"}
        />
        <path
          d="M61 59h21M61 68h21M61 77h21M68 52v30M77 52v30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity=".8"
          className={tone === "dark" ? "text-[#8FA84F]" : "text-brand-limeSoft"}
        />
        <path
          d="M18 49c15-17 31-24 49-21 8 1 14-1 22-7-3 8-8 14-15 18l15 5-17 4C61 58 48 63 31 62c8-6 14-13 18-21-11 3-21 6-31 8Z"
          fill="currentColor"
          className={tone === "dark" ? "text-[#0B2F27]" : "text-white"}
        />
        <path d="M31 50c10-10 22-16 35-16-9 6-16 13-21 22-5-2-9-4-14-6Z" fill="currentColor" className={tone === "dark" ? "text-[#8FA84F]" : "text-brand-limeSoft"} />
        <circle cx="72" cy="33" r="1.8" fill="currentColor" className={tone === "dark" ? "text-brand-cream" : "text-[#0B2F27]"} />
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
