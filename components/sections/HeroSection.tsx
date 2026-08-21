import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-cream">
      <Container className="grid gap-0 px-0 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-20 lg:px-0 lg:pr-14 xl:pr-20">
          <div className="hero-animate flex items-center gap-4" style={{ ["--enter-delay" as string]: "60ms" }}>
            <span className="h-px w-10 bg-brand-limeDark" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-limeDark">
              Vancouver & Lower Mainland
            </p>
          </div>

          <h1
            className="font-display hero-animate mt-7 max-w-[11ch] text-[3rem] font-medium leading-[0.93] tracking-[-0.055em] text-brand-charcoal sm:mt-8 sm:text-[5rem] lg:text-[5.6rem] xl:text-[6.5rem]"
            style={{ ["--enter-delay" as string]: "140ms" }}
          >
            Keep birds out. Keep the space yours.
          </h1>

          <p
            className="hero-animate mt-6 max-w-[34rem] text-[15px] leading-7 text-brand-slate sm:mt-7 sm:text-lg sm:leading-8"
            style={{ ["--enter-delay" as string]: "220ms" }}
          >
            Bird netting, deterrents, and cleanup for balconies, strata, homes, and commercial properties across the Lower Mainland.
          </p>

          <div
            className="hero-animate mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ["--enter-delay" as string]: "300ms" }}
          >
            <ButtonLink href="/contact" variant="primary" className="text-[13px] sm:min-w-[248px] sm:text-base">
              {siteConfig.ctaLabels.primary}
            </ButtonLink>
            <ButtonLink href={siteConfig.telHref} variant="outline" className="sm:min-w-[150px]">
              {siteConfig.ctaLabels.secondary}
            </ButtonLink>
          </div>

          <div
            className="hero-fade mt-10 hidden flex-wrap gap-x-8 gap-y-3 border-t border-brand-navy/15 pt-5 text-sm text-brand-slate sm:flex"
            style={{ ["--enter-delay" as string]: "380ms" }}
          >
            <span>Free inspections available</span>
            <span>
              <a href={siteConfig.telHref} className="font-semibold text-brand-navy hover:text-brand-limeDark">Call</a>
              {" or "}
              <a href={siteConfig.smsHref} className="font-semibold text-brand-navy hover:text-brand-limeDark">text</a>
              {" for a free quote"}
            </span>
            <span>Residential · Strata · Commercial</span>
          </div>
        </div>

        <div className="hero-fade relative min-h-[62svh] overflow-hidden lg:my-8 lg:min-h-0" style={{ ["--enter-delay" as string]: "180ms" }}>
          <Image
            src="/media/projects/lower-mainland-balcony-netting/project-hero.webp"
            alt="Completed black bird netting installation on a Lower Mainland balcony"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-cream/12 lg:via-transparent lg:to-transparent" />

          <div className="absolute inset-x-5 bottom-5 border-l-2 border-brand-lime bg-brand-navy/92 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-limeSoft">Recent work</p>
            <p className="font-display mt-2 text-xl leading-tight">Balcony cleanup and discreet netting installation.</p>
            <Link href="/projects/vancouver-balcony-netting-project" className="mt-3 inline-flex border-b border-white/40 pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] hover:border-white">
              See the before & after
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
