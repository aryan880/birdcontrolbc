import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const quotePrompts = [
    {
      label: "Send a few photos",
      detail: "Balcony, ledge, roofline, sign, or the main problem area.",
    },
    {
      label: "Mention the property type",
      detail: "Condo, home, strata, storefront, warehouse, or shared building.",
    },
    {
      label: "Add anything time-sensitive",
      detail: "Access notes, approvals, cleaning needs, or pet-safety concerns.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/balcony-netting-focused-installation.jpg"
          alt="Balcony bird netting installation on a condo balcony"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,216,79,0.2),transparent_28rem)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(7,23,44,0.32))]" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-4xl">
            <p
              className="hero-animate eyebrow-pill-dark"
              style={{ ["--enter-delay" as string]: "80ms" }}
            >
              Humane Bird-Proofing In Metro Vancouver
            </p>
            <h1
              className="hero-animate mt-6 max-w-[18ch] text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-6xl lg:max-w-5xl lg:text-7xl"
              style={{ ["--enter-delay" as string]: "170ms" }}
            >
              Bird netting, pigeon spikes, and humane bird control for Metro Vancouver properties.
            </h1>
            <p
              className="hero-animate mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-xl"
              style={{ ["--enter-delay" as string]: "260ms" }}
            >
              Pigeon Defenders helps with balcony bird netting, pigeon spike
              installation, balcony cleaning, pet-safe netting, and commercial
              bird control for condos, homes, strata properties, storefronts,
              and building exteriors across Vancouver and nearby Metro Vancouver
              cities.
            </p>

            <div
              className="hero-animate mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ ["--enter-delay" as string]: "340ms" }}
            >
              <ButtonLink href="/contact" variant="primary" className="sm:min-w-[180px]">
                {siteConfig.ctaLabels.primary}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.telHref}
                variant="light"
                className="sm:min-w-[200px]"
              >
                {siteConfig.ctaLabels.secondary}
              </ButtonLink>
              <ButtonLink href="/services" variant="light" className="sm:min-w-[220px]">
                View Services
              </ButtonLink>
            </div>

            <div
              className="hero-fade mt-8 flex flex-wrap gap-3"
              style={{ ["--enter-delay" as string]: "430ms" }}
            >
              {[
                "Humane methods",
                "Condo, strata, and commercial friendly",
                "Vancouver photo-based quotes",
                "Pet-safe options available",
              ].map((item) => (
                <span
                  key={item}
                  className="glass-panel rounded-full px-4 py-2 text-sm text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="hero-animate panel-sheen rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_28px_60px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-8"
            style={{ ["--enter-delay" as string]: "250ms" }}
          >
            <div className="border-b border-white/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
                Start your quote
              </p>
              <p className="mt-3 text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[2.15rem]">
                Send the basics. We can guide the next step from there.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                The cleanest way to begin is a quick message with photos and a little context.
                That is usually enough to point you toward the right service without turning the
                first conversation into a long checklist.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {quotePrompts.map((item, index) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-[1.35rem] border border-white/10 bg-[#081d35]/65 p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d2743]/88"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-lime/15 text-sm font-semibold text-brand-limeSoft">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white sm:text-[15px]">{item.label}</p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/10 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                  Best first contact
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  Texting photos is usually the fastest way to get useful direction.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/10 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                  Local coverage
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  {siteConfig.serviceAreaSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
