import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { getPublishedServices } from "@/content/services";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Bird Proofing Services in Vancouver",
  description:
    "Explore balcony bird netting, pigeon spike installation, balcony cleaning, pet-safe netting, and commercial bird control services in Vancouver and across Metro Vancouver.",
  path: "/services",
  image: "/images/balcony-netting-focused-installation.jpg",
});

export default function ServicesPage() {
  const publishedServices = getPublishedServices();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="Bird netting, pigeon spikes, cleaning, and commercial bird control in Metro Vancouver."
        description="Use this service hub to choose the route that fits the property issue, whether pigeons are entering the balcony, landing on a ledge, or creating mess around a storefront, roofline, or shared building."
        image={{
          src: "/images/balcony-netting-focused-installation.jpg",
          alt: "Balcony bird netting installation representing Vancouver bird-proofing services",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Balcony netting and pet-safe enclosure planning",
          "Pigeon spikes for ledges, signs, and rooflines",
          "Cleaning and commercial bird-control support",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        note={{
          eyebrow: "Service overview",
          body: "Start with the service that best matches the main problem area now. Related pages cover the nearby options if the issue turns out to involve cleanup, pet safety, or a broader commercial scope.",
        }}
      />

      <section id="service-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="All Services"
              title="Bird-proofing services for condos, homes, strata, storefronts, and commercial properties."
              description="Each page is written around a different problem shape so visitors can get to the right quote path faster and understand which solution fits the property best."
              align="center"
            />
          </div>
          <ServiceLinksGrid services={publishedServices} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
