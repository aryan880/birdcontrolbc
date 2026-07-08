import type { Metadata } from "next";
import { Suspense } from "react";

import { Container } from "@/components/layout/Container";
import { ContactDetailsSection } from "@/components/sections/ContactDetailsSection";
import { PageHero } from "@/components/sections/PageHero";
import { ThankYouSummary } from "@/components/sections/ThankYouSummary";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for contacting Pigeon Defenders.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Thank You", url: `${siteConfig.url}/thank-you` },
        ]}
      />

      <PageHero
        eyebrow="Thank You"
        title="Thanks. Your quote request is set up for the next business step."
        description="The site now has a real on-site lead path, and this page is where the future backend, CRM, or notification workflow can connect without changing the front-end experience."
        image={{
          src: "/images/pigeon-proof-balcony-before-after-focused.jpg",
          alt: "Thank-you page image for Pigeon Defenders lead flow",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
        note={{
          eyebrow: "Next step",
          body: "If the issue is urgent, calling is still the fastest path. Otherwise, this thank-you route is ready for future confirmation emails, CRM writes, or conversion tracking.",
        }}
      />

      <section className="section-wrap">
        <Container className="split-section lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div data-reveal>
            <Suspense
              fallback={
                <div className="section-surface p-6 sm:p-8">
                  <p className="eyebrow-pill">What Happens Next</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl">
                    Your request is ready for the next step.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
                    Preparing the confirmation details for this quote request.
                  </p>
                </div>
              }
            >
              <ThankYouSummary />
            </Suspense>
          </div>
          <div data-reveal className="section-surface p-6 sm:p-8">
            <ContactDetailsSection
              title="Need to follow up right away?"
              description="If the property issue is urgent, use the direct contact options below instead of waiting for the backend-connected phase of the lead flow."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" variant="outline" className="sm:min-w-[180px]">
                View Services
              </ButtonLink>
              <ButtonLink href="/" variant="outline" className="sm:min-w-[180px]">
                Back Home
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
