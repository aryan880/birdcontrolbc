"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="border-b border-white/10 bg-gradient-to-r from-brand-navy via-brand-blue to-[#0c3b55] text-white">
        <Container className="flex min-h-10 items-center justify-between gap-4 py-1.5 text-xs font-medium sm:text-sm">
          <p className="text-slate-100/95">
            Bird control for homes, strata, and commercial properties across the Lower Mainland
          </p>
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

      <Container className="relative flex min-h-[4.6rem] items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="Bird Control BC homepage"
          className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-navy text-lg font-bold text-brand-limeSoft shadow-soft">BC</span>
          <span className="leading-none text-brand-navy"><span className="block text-lg font-semibold tracking-[-0.04em]">Bird Control</span><span className="block mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">British Columbia</span></span>
        </Link>

        <nav
          className="hidden items-center gap-1.5 rounded-[1.8rem] border border-brand-line/80 bg-white/85 p-1.5 shadow-soft lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[1.2rem] px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={siteConfig.telHref}
            variant="primary"
            className="cta-pulse min-w-[220px]"
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
