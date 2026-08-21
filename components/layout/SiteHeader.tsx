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
  const { trackPhoneClick } = useTracking();

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
      className={`sticky top-0 z-40 border-b border-brand-line/80 bg-brand-soft/94 backdrop-blur-xl transition-[box-shadow,border-color,background-color] duration-300 ${isScrolled ? "header-scrolled bg-brand-soft/98" : ""}`}
    >
      <Container className="relative flex min-h-[4.9rem] items-center justify-between gap-5">
        <BrandLogo />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-2 text-[13px] font-semibold text-brand-charcoal transition hover:border-brand-navy hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={siteConfig.telHref} onClick={() => trackPhoneClick("header_phone")} className="text-sm font-semibold text-brand-navy hover:text-brand-limeDark">
            {siteConfig.phoneDisplay}
          </a>
          <a href={siteConfig.smsHref} className="hidden border-b border-brand-navy/30 pb-0.5 text-xs font-semibold text-brand-navy hover:border-brand-limeDark hover:text-brand-limeDark xl:inline">
            Text us
          </a>
          <ButtonLink
            href="/contact"
            variant="primary"
            className="min-w-[196px] py-2.5"
          >
            Send Photos for a Quote
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
