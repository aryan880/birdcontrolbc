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
  description: "Thanks for contacting Bird Control BC.",
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
        title="Thanks. Your quote request has been sent."
        description="We received your property details and any attached photos. We will review the request and follow up using the contact information you provided."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/finished-balcony-netting-detail.webp",
          alt: "Finished balcony bird netting detail from a Bird Control BC project",
        }}
        actions={[
          { href: "/contact#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
        note={{
          eyebrow: "Next step",
          body: "If the issue is urgent, calling is still the fastest path. Otherwise, this page confirms that the request was delivered successfully.",
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
                    Your request was sent successfully.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
                    Loading the request summary.
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
              description="If the property issue is urgent, use the direct contact options below instead of waiting for the standard follow-up process."
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
