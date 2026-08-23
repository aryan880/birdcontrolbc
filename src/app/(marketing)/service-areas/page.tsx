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
  image: "/media/projects/lower-mainland-balcony-netting/completed-netting-skyline.webp",
});

export default function ServiceAreasPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
        ]}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Bird-control service areas across Vancouver and the Lower Mainland."
        description="Review the cities we serve, the property types we work around, and the bird-control services available across the region."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/completed-netting-skyline.webp",
          alt: "Completed balcony bird netting overlooking Vancouver and the Lower Mainland",
        }}
        actions={[
          { href: "/contact#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Residential, strata, and commercial property context",
          "Netting, deterrents, spikes, and cleanup",
          "Start a quote by sharing photos",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        note={{
          eyebrow: "Local service context",
          body: "Service availability depends on the property, access, affected surfaces, and the city. Photos help us assess the best next step.",
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
              description="Different property types require different access plans, materials, cleanup considerations, and approval steps."
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
              title="Bird-proofing and cleanup services across our service area."
              description="Compare balcony netting, bird spikes, pigeon-dropping cleanup, deterrents, strata, and commercial bird-control options."
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
