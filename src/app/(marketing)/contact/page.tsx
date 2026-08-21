import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ContactDetailsSection } from "@/components/sections/ContactDetailsSection";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { TrustBadgeRow } from "@/components/sections/TrustBadgeRow";
import { trustBadges } from "@/content/business";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { LocalBusinessSchema } from "@/lib/schema/local-business";

export const metadata: Metadata = buildMetadata({
  title: "Free Bird-Control Quote or Inspection",
  description:
    "Send photos, call, or text Bird Control BC for a free bird-control quote or inspection in Vancouver and the Lower Mainland.",
  path: "/contact",
  image: "/media/projects/lower-mainland-balcony-netting/completed-netting-railing-detail.webp",
});

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema url={`${siteConfig.url}/contact`} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Get a free bird-control quote or inspection."
        description="Share the problem area, city, and property context, or call or text us directly. We can start with photos and arrange a free inspection when an on-site look is appropriate."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/completed-netting-railing-detail.webp",
          alt: "Completed Vancouver balcony bird netting supporting a Bird Control BC quote request",
        }}
        actions={[
          { href: "#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "A quote form built around useful property details",
          "Photo upload is ready for future backend handling",
          "Call or text for a free quote",
          "Free inspections available in our service area",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        note={{
          eyebrow: "Quote request",
          body: "Start with photos, a call, or a text. If the property needs an on-site assessment, we can arrange a free inspection within our service area.",
        }}
      />

      <section className="section-wrap">
        <Container className="split-section lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div data-reveal>
            <ContactDetailsSection />
          </div>
          <div data-reveal>
            <QuoteFormSection
              source="contact_page"
              title="Show us what is happening."
              description="A few clear photos and short practical notes are enough to start. Full upload delivery can be connected to a backend when the business workflow is selected."
            />
          </div>
        </Container>
      </section>

      <section className="section-wrap-tight bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
        <Container>
          <div data-reveal>
            <TrustBadgeRow items={trustBadges} />
          </div>
        </Container>
      </section>
    </>
  );
}
