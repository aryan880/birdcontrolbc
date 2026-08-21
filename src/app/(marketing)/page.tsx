import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { CityLinksGrid } from "@/components/sections/CityLinksGrid";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { ResourceLinks } from "@/components/sections/ResourceLinks";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { TrustBadgeRow } from "@/components/sections/TrustBadgeRow";
import { trustBadges } from "@/content/business";
import { cities } from "@/content/cities";
import { homeFaqs, processSteps } from "@/content/faqs";
import { galleryProjects } from "@/content/projects";
import { resources } from "@/content/resources";
import { getPublishedServices } from "@/content/services";
import { LocalBusinessSchema } from "@/lib/schema/local-business";
import { buildMetadata } from "@/lib/seo/metadata";

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

      <section className="bg-brand-soft py-7 sm:py-9">
        <Container>
          <TrustBadgeRow items={trustBadges} />
        </Container>
      </section>

      <section id="services" className="section-wrap bg-brand-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionHeading eyebrow="What we do" title="The right control method depends on where birds are landing." />
            <p className="max-w-2xl text-base leading-8 text-brand-slate lg:justify-self-end lg:text-lg">
              We look at the opening, ledge, roofline, contamination, access, and property use before recommending netting, spikes, cleanup, or another deterrent.
            </p>
          </div>
          <ServiceLinksGrid services={services} />
        </Container>
      </section>

      <BeforeAfterGallery projects={galleryProjects} />

      <section className="section-wrap bg-brand-cream">
        <Container>
          <ProcessSteps steps={processSteps} />
        </Container>
      </section>

      <section id="why-us" className="overflow-hidden bg-brand-soft">
        <Container className="grid px-0 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[28rem] lg:min-h-[46rem]">
            <Image
              src="/media/projects/lower-mainland-balcony-netting/support-pole-netting-view.webp"
              alt="Completed black balcony bird netting installed with the Vancouver skyline beyond"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
            <p className="eyebrow-pill">Why Bird Control BC</p>
            <h2 className="font-display mt-6 text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-brand-navy sm:text-6xl">
              Quiet work that fits the building, not a one-size-fits-all product.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-slate">
              A useful recommendation starts with the actual route birds use and what the space must remain usable for. That keeps the scope focused and the finished work visually restrained.
            </p>
            <dl className="mt-10 border-t border-brand-navy/20">
              {[
                ["Look first", "Photos help us identify the opening, landing surface, access, and cleanup needs."],
                ["Choose deliberately", "Netting, spikes, and other deterrents solve different property conditions."],
                ["Keep it practical", "The recommendation accounts for residents, pets, maintenance, strata, and commercial use."],
              ].map(([term, detail]) => (
                <div key={term} className="grid gap-2 border-b border-brand-navy/15 py-5 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand-limeDark">{term}</dt>
                  <dd className="text-sm leading-7 text-brand-slate">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="section-wrap bg-white">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Local work across Vancouver and the Lower Mainland."
              description="Choose your city for relevant local context, or send photos directly if you are unsure which page fits."
            />
            <div className="mt-9">
              <CityLinksGrid cities={cities} className="xl:grid-cols-2" />
            </div>
            <div className="mt-10 border-t border-brand-navy/20 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-limeDark">Verified reviews</p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-brand-slate">
                Customer reviews will be published here only after they can be verified through the new Bird Control BC business profile.
              </p>
            </div>
          </div>
          <QuoteFormSection source="homepage" title="Show us what the birds are using." description="Send a few photos, your city, and a short note. We can begin with the property condition instead of making you diagnose the solution." />
        </Container>
      </section>

      <section id="faq" className="section-wrap bg-brand-cream">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Questions"
            title="A few things worth knowing before you send photos."
            description="Straight answers about netting, spikes, cleanup, access, and choosing the right first step."
          />
          <FAQAccordion items={homeFaqs} />
        </Container>
      </section>

      <section className="section-wrap bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Property care guides"
            title="Understand the condition before choosing the fix."
            description="Measured, source-backed guidance about pigeon droppings, cleanup dust, and preventing the same balcony problem from returning."
          />
          <ResourceLinks resources={resources} />
        </Container>
      </section>

      <section className="bg-brand-soft py-8">
        <Container className="flex flex-col justify-between gap-4 border-y border-brand-navy/15 py-6 text-sm text-brand-slate sm:flex-row sm:items-center">
          <p>Need to review services first?</p>
          <Link href="/services" className="font-semibold text-brand-navy hover:text-brand-limeDark">Explore all bird-control services →</Link>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
