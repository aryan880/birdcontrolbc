import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { CityLinksGrid } from "@/components/sections/CityLinksGrid";
import { InfoCards } from "@/components/sections/InfoCards";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { cities } from "@/content/cities";
import { getPublishedServices } from "@/content/services";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { LocalBusinessSchema } from "@/lib/schema/local-business";

export const metadata: Metadata = buildMetadata({
  title: "Metro Vancouver Bird Proofing Service Areas",
  description:
    "Bird-proofing service areas across Metro Vancouver, including Vancouver, Burnaby, Richmond, Surrey, Coquitlam, New Westminster, North Vancouver, West Vancouver, Delta, and Langley.",
  path: "/service-areas",
  image: "/images/condo-balcony-netting-focused.jpg",
});

export default function ServiceAreasPage() {
  return (
    <>
      <LocalBusinessSchema
        url={`${siteConfig.url}/service-areas`}
        description="Metro Vancouver service area pages for balcony bird netting, pigeon spikes, balcony cleaning, pet-safe netting, and commercial bird control."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
        ]}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Bird-proofing service areas across Metro Vancouver."
        description="Browse city pages for Vancouver, Burnaby, Richmond, Surrey, Coquitlam, New Westminster, North Vancouver, West Vancouver, Delta, and Langley to find more local context around bird netting, pigeon spikes, cleaning, and commercial bird control."
        image={{
          src: "/images/condo-balcony-netting-focused.jpg",
          alt: "Condo balcony netting installation representing Metro Vancouver bird-proofing service areas",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Residential, strata, and commercial bird-proofing coverage",
          "City-specific pages with internal links and local context",
          "Quote-first workflow that still starts with photos",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        note={{
          eyebrow: "Local SEO structure",
          body: "Each city page keeps the local angle clear while linking back to the core service routes, project examples, and quote path instead of acting like a thin duplicate landing page.",
        }}
      />

      <section id="city-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Cities"
              title="Metro Vancouver cities currently covered by Pigeon Defenders."
              description="Each local page adds city-specific context for the types of balcony, ledge, roofline, and commercial bird issues that tend to show up there."
              align="center"
            />
          </div>
          <div className="mt-10">
            <CityLinksGrid cities={cities} />
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)] py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Property Types"
              title="Bird-proofing needs across condo, residential, strata, and commercial properties."
              description="The service-area hub stays useful by highlighting the real property types behind local searches rather than relying on thin location-only pages."
              align="center"
            />
          </div>
          <div className="mt-10">
            <InfoCards
              columns="3"
              items={[
                {
                  title: "Condo balconies",
                  description:
                    "Bird netting, pet-safe netting, and cleaning support for balconies where pigeons keep returning.",
                },
                {
                  title: "Residential ledges and rooflines",
                  description:
                    "Low-profile spikes and related bird-proofing for repeat landing surfaces around the home.",
                },
                {
                  title: "Commercial and strata properties",
                  description:
                    "Bird-control support for storefronts, shared buildings, visible exteriors, and approval-sensitive properties.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Core Services"
              title="Core bird-proofing services linked from every service-area page."
              description="These routes handle the main search intent for balcony bird netting, pigeon spike installation, balcony cleaning, pet-safe netting, and commercial bird control."
              align="center"
            />
          </div>
          <div className="mt-10">
            <ServiceLinksGrid services={getPublishedServices()} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
