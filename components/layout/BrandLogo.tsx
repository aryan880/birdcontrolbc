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
      <svg aria-hidden="true" viewBox="0 0 54 54" className="h-11 w-11 shrink-0">
        <path d="M4 40.5 18.5 22l8.3 9.4L35 19l15 21.5H4Z" fill="currentColor" className={tone === "dark" ? "text-brand-lime" : "text-brand-limeSoft"} />
        <path d="M8 18.2c10.4-7.1 21.1-8.5 34.7-3.8-9.8.7-17.4 4.2-23.5 11-4.4-1.8-8.1-4.2-11.2-7.2Z" fill="currentColor" className={tone === "dark" ? "text-brand-navy" : "text-white"} />
        <path d="M27.2 14.5c3.1-4.2 7-6.5 12.3-7.3-2.5 2.1-4.5 4.9-5.8 8.3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={tone === "dark" ? "text-brand-navy" : "text-white"} />
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
