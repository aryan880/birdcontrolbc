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
  title: "Bird Control Services in Vancouver",
  description:
    "Explore balcony bird netting, bird spike installation, pigeon-dropping cleanup, bird deterrents, commercial bird control, and strata bird control across Vancouver and the Lower Mainland.",
  path: "/services",
  image: "/media/projects/lower-mainland-balcony-netting/finished-balcony-netting-wide.webp",
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
        title="Bird-control services for balconies, building edges, and shared properties."
        description="Choose the route that fits the actual property issue, whether birds are entering a balcony, returning to a ledge, leaving droppings, or affecting a commercial or strata property."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/finished-balcony-netting-wide.webp",
          alt: "Finished balcony bird-netting installation by Bird Control BC",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Balcony netting for full opening access",
          "Spikes and deterrents for landing surfaces",
          "Cleanup, strata, and commercial support",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        note={{
          eyebrow: "Start with the surface",
          body: "Choose the page that best matches the main problem area. Related pages cover cleanup, deterrents, commercial properties, and strata considerations where they are relevant.",
        }}
      />

      <section id="service-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="All Services"
              title="Find the service that fits the way birds are using the property."
              description="Each page is organized around a clear problem pattern so the next quote conversation starts with the right context."
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
