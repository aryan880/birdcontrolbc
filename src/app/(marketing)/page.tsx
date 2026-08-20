import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { CityLinksGrid } from "@/components/sections/CityLinksGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { Container } from "@/components/layout/Container";
import { homeFaqs, processSteps } from "@/content/faqs";
import { cities } from "@/content/cities";
import { galleryProjects } from "@/content/projects";
import { getPublishedServices } from "@/content/services";
import { trustBadges } from "@/content/business";
import { buildMetadata } from "@/lib/seo/metadata";
import { LocalBusinessSchema } from "@/lib/schema/local-business";
import { TrustBadgeRow } from "@/components/sections/TrustBadgeRow";

export const metadata: Metadata = buildMetadata({
  title: "Bird Control Vancouver & Lower Mainland",
  description:
    "Bird Control BC provides balcony bird netting, bird spikes, pigeon-dropping cleanup, deterrents, and commercial bird-control solutions across Vancouver and the Lower Mainland.",
  path: "/",
});

export default function HomePage() {
  const services = getPublishedServices();

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />

      <section className="pb-8 pt-6 sm:pb-10 sm:pt-7">
        <Container>
          <TrustBadgeRow items={trustBadges} />
        </Container>
      </section>

      <section id="services" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Core Services"
              title="A clear solution for the surface birds keep using."
              description="Start with the part of the property that needs attention: the balcony opening, a narrow ledge, an entry, a roofline, or a larger shared building area."
              align="center"
            />
          </div>
          <ServiceLinksGrid services={services} />
        </Container>
      </section>

      <section id="why-us" className="bg-[linear-gradient(180deg,rgba(247,248,243,0.92)_0%,rgba(255,255,255,0.98)_100%)] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div
            data-reveal
            className="panel-sheen rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-blue to-[#0d4058] p-8 text-white shadow-panel sm:p-10"
          >
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
              What good bird control considers
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              Better-used spaces begin with a practical read of the problem.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Bird activity is rarely just one thing. A useful plan considers where birds land or enter, what needs cleaning, how the building is used, and whether access or strata coordination affects the work.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "The actual entry or landing point",
                "Cleaning needs before protection",
                "Access, approvals, and property use",
                "A clear way to begin from photos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Balcony openings",
                body: "Netting is best suited to bird access across an open balcony rather than a single landing edge.",
              },
              {
                title: "Ledges and rooflines",
                body: "Spikes or other deterrents can address repeat perching on defined, narrow surfaces.",
              },
              {
                title: "Cleaning and reset work",
                body: "Dropping cleanup can be scoped before protection so the space starts in better condition.",
              },
              {
                title: "Shared properties",
                body: "Strata and commercial work benefits from a clear problem record, access notes, and a clean scope.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                data-reveal
                className="rounded-[1.75rem] border border-brand-line/70 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-panel"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <BeforeAfterGallery projects={galleryProjects} />

      <section className="py-16 sm:py-20">
        <Container>
          <ProcessSteps steps={processSteps} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-stretch xl:gap-10">
          <div
            data-reveal
            className="section-surface flex h-full flex-col p-6 sm:p-8"
          >
            <div data-reveal>
              <SectionHeading
                eyebrow="Service Areas"
                title="Serving Vancouver and the Lower Mainland."
                description="Local pages add useful context about property patterns and link directly to the relevant services and project examples."
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-brand-line/70 bg-brand-mist/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-limeDark">
                  Coverage
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  Vancouver, Burnaby, Richmond, North Vancouver, West Vancouver, Coquitlam, and Surrey.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-brand-line/70 bg-white p-4 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-limeDark">
                  Best way to start
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  Send photos with the city and property type. It gives the first conversation a much clearer starting point.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-[1.7rem] border border-brand-line/70 bg-white/80 p-4 sm:p-5">
              <CityLinksGrid cities={cities} />
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-slate">
              Not sure which service fits? The quote form works without choosing a city page first.
            </p>
            <div className="mt-auto pt-6">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-brand-navy to-brand-blue p-5 text-white shadow-panel">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                  A useful first message
                </p>
                <p className="mt-2 text-base font-semibold tracking-[-0.02em]">
                  A few clear photos are usually more helpful than getting every category exactly right.
                </p>
              </div>
            </div>
          </div>
          <div data-reveal>
            <QuoteFormSection source="homepage" />
          </div>
        </Container>
      </section>

      <section id="faq" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions before you send photos."
              description="A short guide to the choices people usually need to make first: netting or spikes, cleanup, access, and the right way to begin a quote."
              align="center"
            />
          </div>
          <div className="mt-10">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
