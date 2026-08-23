import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { LocalBusinessSchema } from "@/lib/schema/local-business";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "About Our Bird Control Company",
  description: "Learn how Bird Control BC approaches bird netting, bird spikes, deterrents, cleanup, and property-specific quote requests across Vancouver and the Lower Mainland.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: siteConfig.url }, { name: "About", url: `${siteConfig.url}/about` }]} />
      <PageHero
        eyebrow="About Bird Control BC"
        title="A practical way to start solving repeat bird activity."
        description="We help property owners and managers identify where birds are landing, nesting, or leaving contamination, then assess a suitable exclusion, deterrent, or cleanup approach."
        image={{ src: "/media/projects/lower-mainland-balcony-netting/completed-netting-side-view.webp", alt: "Completed bird netting at a Vancouver multi-unit property" }}
        actions={[{ href: "/contact#quote", label: siteConfig.ctaLabels.primary, variant: "primary" }, { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" }]}
        supportingPoints={["Vancouver & Lower Mainland", "Homes, strata, and commercial properties", "Photo-led quote requests"]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        note={{ eyebrow: "Where we work", body: "Serving Vancouver and Lower Mainland homes, strata properties, and commercial buildings. Start by sending photos of the affected area." }}
      />
      <section className="section-wrap">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="The approach" title="Less guessing, more useful property information." description="Clear photos, location details, and property context help narrow the scope before an inspection or quote." />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Start with the actual area", "A balcony opening, roofline, ledge, entry, or shared exterior is more useful than a generic description."],
              ["Keep scope grounded", "The service path reflects access, property use, cleaning needs, and any strata or commercial context."],
              ["Plan a practical next step", "The visible conditions help determine whether netting, spikes, another deterrent, cleanup, or an inspection should come next."],
            ].map(([title, body]) => <article key={title} className="surface-card p-6"><h2 className="text-lg font-semibold text-brand-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-brand-slate">{body}</p></article>)}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
