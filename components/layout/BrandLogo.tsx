import Link from "next/link";

type BrandLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function BrandLogo({ tone = "dark", compact = false }: BrandLogoProps) {
  const textClass = tone === "dark" ? "text-brand-navy" : "text-white";
  const detailClass = tone === "dark" ? "text-brand-limeDark" : "text-brand-limeSoft";

  return (
    <Link href="/" aria-label="Bird Control BC homepage" className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2">
      <svg aria-hidden="true" viewBox="0 0 42 42" className="h-10 w-10 shrink-0">
        <path d="M6 29.5C12.2 26 17.3 18.4 20.1 8c4.7 9.1 10.3 15.1 17.1 17.7-3.6 5.1-9.3 8.3-15.8 8.3-6.7 0-11.9-1.8-15.4-4.5Z" fill="currentColor" className={tone === "dark" ? "text-brand-navy" : "text-white"} />
        <path d="M5 13.4c8.4-3.3 17.2-3.8 27.2-1.4-7.7 1.7-14 5.5-19 11.7-2.9-3.4-5.6-6.8-8.2-10.3Z" fill="currentColor" className={tone === "dark" ? "text-brand-limeDark" : "text-brand-limeSoft"} />
      </svg>
      {!compact ? (
        <span className={`leading-none ${textClass}`}>
          <span className="block text-[1.12rem] font-semibold tracking-[-0.06em]">Bird Control BC</span>
          <span className={`mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.23em] ${detailClass}`}>Vancouver & Lower Mainland</span>
        </span>
      ) : null}
    </Link>
  );
}
