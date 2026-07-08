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
  title: "Bird Netting, Pigeon Spikes & Bird Control Vancouver",
  description:
    "Pigeon Defenders provides balcony bird netting, pigeon spikes, balcony cleaning, pet-safe netting, and commercial bird control in Vancouver and across Metro Vancouver. Request a free quote or call 236-999-5739.",
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
              eyebrow="Bird Control Vancouver"
              title="Bird-proofing services for balconies, ledges, rooflines, and commercial properties."
              description="Choose the service that matches the actual issue, whether pigeons are nesting inside the balcony, roosting on a ledge, or creating mess around a storefront, roofline, or shared building."
              align="center"
            />
          </div>
          <ServiceLinksGrid services={services} />
        </Container>
      </section>

      <section
        id="why-us"
        className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,248,245,0.72)_100%)] py-16 sm:py-20"
      >
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div
            data-reveal
            className="panel-sheen rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-blue to-[#0d4058] p-8 text-white shadow-panel sm:p-10"
          >
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
              Built For Real Balcony Problems
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              Cleaner balconies, safer ledges, quieter buildings.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Pigeon problems usually show up as droppings, nesting, blocked
              outdoor space, repeat landing zones, and cleanup that never seems
              to hold. This homepage is designed to make the first decision
              clearer: netting for entry problems, spikes for narrow landing
              edges, cleaning for reset work, and commercial support where the
              issue affects a larger property.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Discreet systems that protect the view where possible",
                "Humane methods for homes, condos, strata, and commercial spaces",
                "Quote-first workflow that works well from phone photos",
                "Practical recommendations based on access, cleaning, and property type",
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
                title: "Condo balconies",
                body: "Bird netting for balconies where pigeons keep returning, nesting, or leaving droppings behind.",
              },
              {
                title: "Roosting ledges",
                body: "Low-profile pigeon spikes for rooflines, signs, beams, and narrow landing zones.",
              },
              {
                title: "Pet safety",
                body: "Balcony netting options designed for homes with cats, small pets, and family use.",
              },
              {
                title: "Cleanup before protection",
                body: "Balcony cleaning to reset the space before spikes or netting are installed.",
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
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div data-reveal>
              <SectionHeading
                eyebrow="Service Areas"
                title="Bird-proofing service areas across Metro Vancouver."
                description="The city pages keep the coverage area clear while adding location-specific context for Vancouver, Burnaby, Richmond, Surrey, Coquitlam, New Westminster, Langley, and nearby areas."
              />
            </div>
            <div className="mt-8">
              <CityLinksGrid cities={cities} />
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
              title="Common questions about bird netting, pigeon spikes, and local quotes."
              description="These answers stay grounded in the current service scope, the photo-first quote process, and the real problems people usually want solved first."
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
