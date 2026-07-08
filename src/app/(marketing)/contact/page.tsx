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
  title: "Get a Bird-Proofing Quote",
  description:
    "Request a free quote for balcony bird netting, pigeon spikes, balcony cleaning, pet-safe netting, or commercial bird control in Vancouver and across Metro Vancouver.",
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
        title="Request a free quote for bird netting, pigeon spikes, cleaning, or commercial bird control."
        description="Use the quote form to send the practical details first, or call now if you already know the property issue and want a faster conversation."
        image={{
          src: "/images/balcony-netting-focused-installation.jpg",
          alt: "Balcony bird netting installation supporting the Pigeon Defenders quote page",
        }}
        actions={[
          { href: "#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Prepared for future API or CRM integration",
          "Photo upload field reserved for backend wiring",
          "Direct contact path for urgent property issues",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        note={{
          eyebrow: "Lead flow",
          body: "This is the main quote page for Vancouver and Metro Vancouver bird-proofing requests, with fields set up to support a future backend, CRM, or booking workflow.",
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
              title="Request a free quote with the details that matter."
              description="This form collects the practical details needed for balcony bird netting, pigeon spikes, cleaning, pet-safe netting, and commercial bird-control quotes without adding extra friction."
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
