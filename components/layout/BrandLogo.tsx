import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function BrandLogo({ tone = "dark", compact = false }: BrandLogoProps) {
  const source = compact
    ? "/brand/final/icon.svg"
    : tone === "light"
      ? "/brand/final/logo-dark-background.svg"
      : "/brand/final/logo-horizontal.svg";

  return (
    <Link
      href="/"
      aria-label="Bird Control BC homepage"
      className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2"
    >
      <Image
        src={source}
        alt="Bird Control BC"
        width={compact ? 512 : 1200}
        height={compact ? 512 : 280}
        priority
        className={compact ? "h-11 w-11" : "h-11 w-auto sm:h-12"}
      />
    </Link>
  );
}
