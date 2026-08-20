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
  title: "Send Photos for a Bird-Control Quote",
  description:
    "Send photos for a free quote for balcony bird netting, bird spikes, pigeon-dropping cleanup, deterrents, commercial, or strata bird control in Vancouver and the Lower Mainland.",
  path: "/contact",
  image: "/images/balcony-netting-focused-installation.jpg",
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
        title="Send photos for a clear bird-control quote."
        description="Share the problem area, city, and property context. It is the fastest way to make the first conversation useful."
        image={{
          src: "/images/balcony-netting-focused-installation.jpg",
          alt: "Balcony bird-netting installation supporting a Bird Control BC quote request",
        }}
        actions={[
          { href: "#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "A quote form built around useful property details",
          "Photo upload is ready for future backend handling",
          "Call when a direct conversation is better",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        note={{
          eyebrow: "Quote request",
          body: "This page keeps the first request organized around the details needed to understand the property, not an unnecessarily long checklist.",
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
