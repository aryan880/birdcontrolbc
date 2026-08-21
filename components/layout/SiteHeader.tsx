"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { useTracking } from "@/lib/analytics/useTracking";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackPhoneClick, trackEmailClick } = useTracking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-brand-line/70 bg-white/80 backdrop-blur-2xl transition-[box-shadow,border-color,background-color] duration-300 ${isScrolled ? "header-scrolled bg-white/88" : ""}`}
    >
      <div className="border-b border-white/10 bg-brand-navy text-white">
        <Container className="flex min-h-9 items-center justify-between gap-4 py-1 text-[11px] font-medium uppercase tracking-[0.13em] sm:text-xs">
          <p className="text-slate-200">Vancouver & Lower Mainland bird control</p>
          <div className="hidden items-center gap-4 sm:flex">
            <a
              href={siteConfig.telHref}
              onClick={() => trackPhoneClick("header_top_strip")}
              className="text-brand-limeSoft transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeSoft focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.mailtoHref}
              onClick={() => trackEmailClick("header_top_strip")}
              className="text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeSoft focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              {siteConfig.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="relative flex min-h-[5.25rem] items-center justify-between gap-5">
        <BrandLogo />

        <nav
          className="hidden items-center gap-1 border border-brand-line/80 bg-white p-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={siteConfig.telHref}
            variant="primary"
            className="min-w-[154px]"
            onClick={() => trackPhoneClick("header_primary_cta")}
          >
            {siteConfig.ctaLabels.secondary}
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
