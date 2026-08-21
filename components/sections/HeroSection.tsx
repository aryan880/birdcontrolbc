import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const quotePrompts = [
    {
      label: "Send photos of the area",
      detail: "A balcony, ledge, roofline, entry, or the main problem surface.",
    },
    {
      label: "Tell us where it is",
      detail: "Condo, house, strata, storefront, warehouse, or shared building.",
    },
    {
      label: "Add the useful context",
      detail: "City, access notes, cleanup needs, or an approval consideration.",
    },
  ];

  const trustPills = [
    "Vancouver & Lower Mainland",
    "Homes, strata, and commercial",
  ];

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/balcony-netting-focused-installation.jpg"
          alt="Balcony bird netting installation on a condo balcony"
          fill
          priority
          className="hero-image-drift object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,44,0.96)_0%,rgba(7,23,44,0.84)_37%,rgba(7,23,44,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,44,0.1)_35%,rgba(7,23,44,0.72)_100%)]" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl lg:max-w-[36rem] lg:pb-6">
            <p
              className="hero-animate eyebrow-pill-dark"
              style={{ ["--enter-delay" as string]: "80ms" }}
            >
              Practical bird control in Vancouver & the Lower Mainland
            </p>
            <h1
              className="hero-animate mt-7 max-w-[12ch] text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-balance sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.2rem]"
              style={{ ["--enter-delay" as string]: "170ms" }}
            >
              Bird control that respects how your property is used.
            </h1>
            <p
              className="hero-animate mt-7 max-w-[31rem] text-base leading-8 text-slate-100/92 sm:text-lg"
              style={{ ["--enter-delay" as string]: "260ms" }}
            >
              Bird netting, spikes, deterrents, and pigeon-dropping cleanup for balconies, rooflines, entries, strata buildings, and commercial properties.
            </p>

            <div
              className="hero-animate mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ ["--enter-delay" as string]: "340ms" }}
            >
              <ButtonLink
                href="/contact"
                variant="primary"
                className="sm:min-w-[218px] sm:px-6 sm:py-4"
              >
                {siteConfig.ctaLabels.primary}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.telHref}
                variant="light"
                className="sm:min-w-[182px]"
              >
                {siteConfig.ctaLabels.secondary}
              </ButtonLink>
            </div>

            <div
              className="hero-fade mt-5"
              style={{ ["--enter-delay" as string]: "390ms" }}
            >
              <Link href="/services" className="text-sm font-semibold text-slate-200 underline-offset-4 hover:text-white hover:underline">Explore services <span aria-hidden="true" className="text-brand-limeSoft">→</span></Link>
            </div>

            <div
              className="hero-fade mt-10 flex max-w-[34rem] flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5"
              style={{ ["--enter-delay" as string]: "430ms" }}
            >
              {trustPills.map((item) => (
                <span
                  key={item}
                  className="text-sm text-slate-100/88"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="hero-animate border border-white/15 bg-[#0c223a]/90 p-6 shadow-[0_28px_60px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-8 lg:ml-auto lg:max-w-[33rem] xl:max-w-[36rem]"
            style={{ ["--enter-delay" as string]: "250ms" }}
          >
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
                  Start with photos
                </p>
                <span className="border-l border-brand-lime/70 pl-3 text-[11px] font-medium tracking-[0.16em] text-slate-200/90">
                  Fastest way to scope
                </span>
              </div>
              <p className="mt-4 max-w-md text-[1.6rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[1.95rem]">
                Show us the problem. We&apos;ll help define the next step.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200 sm:text-[15px]">
                Good photos let us understand the surface, access, and likely scope before a long first conversation.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {quotePrompts.map((item, index) => (
                <div
                  key={item.label}
                  className="flex gap-4 border-b border-white/10 py-4 last:border-b-0"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime/15 text-sm font-semibold text-brand-limeSoft">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white sm:text-[15px]">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="border-t border-white/10 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                  Keep it simple
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  One clear image of the problem is more useful than a lengthy description.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                  Built around the property
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  We consider the condition, access, and what the space needs to remain usable for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
