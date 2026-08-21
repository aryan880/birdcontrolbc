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
  title: "About Bird Control BC",
  description: "Learn how Bird Control BC approaches bird netting, bird spikes, deterrents, cleanup, and property-specific quote requests across Vancouver and the Lower Mainland.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema url={`${siteConfig.url}/about`} />
      <BreadcrumbSchema items={[{ name: "Home", url: siteConfig.url }, { name: "About", url: `${siteConfig.url}/about` }]} />
      <PageHero
        eyebrow="About Bird Control BC"
        title="A practical way to start solving repeat bird activity."
        description="Bird Control BC is built around clear property context, real project imagery, and service pages that help visitors identify the actual problem area before requesting a quote."
        image={{ src: "/media/projects/lower-mainland-balcony-netting/completed-netting-side-view.webp", alt: "Completed bird netting at a Vancouver multi-unit property" }}
        actions={[{ href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" }, { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" }]}
        supportingPoints={["Vancouver & Lower Mainland", "Homes, strata, and commercial properties", "Photo-led quote requests"]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        note={{ eyebrow: "Business information", body: "Public contact details, formal credentials, and verified reviews will be added only after they are approved for publication." }}
      />
      <section className="section-wrap">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="The approach" title="Less guessing, more useful property information." description="The site is designed to make the first exchange productive: show the surface birds are using, note the city and property type, then decide on the most relevant next conversation." />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Start with the actual area", "A balcony opening, roofline, ledge, entry, or shared exterior is more useful than a generic description."],
              ["Keep scope grounded", "The service path reflects access, property use, cleaning needs, and any strata or commercial context."],
              ["Publish only verifiable proof", "Reviews, certifications, and claims stay off the public site until they can be verified."],
            ].map(([title, body]) => <article key={title} className="surface-card p-6"><h2 className="text-lg font-semibold text-brand-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-brand-slate">{body}</p></article>)}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
