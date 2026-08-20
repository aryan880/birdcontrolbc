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
  title: "Bird Control Service Areas | Lower Mainland",
  description:
    "Bird-control service areas across Vancouver and the Lower Mainland, including Vancouver, Burnaby, Richmond, North Vancouver, West Vancouver, Coquitlam, and Surrey.",
  path: "/service-areas",
  image: "/images/condo-balcony-netting-focused.jpg",
});

export default function ServiceAreasPage() {
  return (
    <>
      <LocalBusinessSchema
        url={`${siteConfig.url}/service-areas`}
        description="Lower Mainland service area pages for balcony bird netting, bird spikes, cleanup, deterrents, strata, and commercial bird control."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
        ]}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Bird-control service areas across Vancouver and the Lower Mainland."
        description="Browse local pages for Vancouver, Burnaby, Richmond, the North Shore, Coquitlam, and Surrey. Each adds useful property context without duplicating the core service information."
        image={{
          src: "/images/condo-balcony-netting-focused.jpg",
          alt: "Condo balcony netting installation representing Lower Mainland bird-control service areas",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Residential, strata, and commercial property context",
          "Local pages linked to core services and projects",
          "Start a quote by sharing photos",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        note={{
          eyebrow: "Local service context",
          body: "Each city page adds a useful local angle and connects back to core services, project examples, and the quote path.",
        }}
      />

      <section id="city-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Cities"
              title="Local pages for the Lower Mainland areas we serve."
              description="Each page adds city-specific context for balcony, ledge, roofline, strata, and commercial bird issues."
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
                    "Bird netting and cleanup support for balconies where pigeons keep returning.",
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
              description="These routes handle the main search intent for balcony netting, bird spikes, pigeon-dropping cleanup, deterrents, strata, and commercial bird control."
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
