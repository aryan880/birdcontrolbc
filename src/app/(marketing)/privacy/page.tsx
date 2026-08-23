import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "Learn how Bird Control BC handles contact details, property information, and photos submitted through its quote request form.",
  path: "/privacy",
});

const privacySections = [
  {
    title: "Information you submit",
    body: "When you request a quote, you may provide your name, phone number, email address, city, property details, a message, and photos of the affected area. Our website may also receive basic technical information needed to operate and protect the form from abuse.",
  },
  {
    title: "How we use it",
    body: "We use submitted information to review the bird-control issue, respond to your inquiry, prepare or discuss a quote, arrange an inspection when appropriate, and maintain reasonable business records. We do not sell your personal information.",
  },
  {
    title: "Service providers",
    body: "The website is hosted through Vercel, and quote notifications are delivered through Resend. These providers may process the information needed to host the site, protect the form, and deliver your request to our business inbox.",
  },
  {
    title: "Retention and security",
    body: "We retain inquiry information only as long as reasonably needed to respond, provide service, meet record-keeping needs, or address misuse. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Privacy", url: `${siteConfig.url}/privacy` },
        ]}
      />
      <PageHero
        eyebrow="Privacy"
        title="How quote-request information is handled."
        description="This notice explains how Bird Control BC uses the contact details, property context, and photos you choose to send us."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/completed-netting-side-view.webp",
          alt: "Completed balcony bird netting installation in Vancouver",
        }}
        actions={[
          {
            href: `mailto:${siteConfig.email}`,
            label: "Ask a Privacy Question",
            variant: "primary",
          },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

      <section className="section-wrap">
        <Container className="grid gap-x-12 gap-y-9 lg:grid-cols-2">
          {privacySections.map((section) => (
            <article key={section.title} className="border-t border-brand-line pt-6">
              <h2 className="text-xl font-semibold text-brand-navy">{section.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-brand-slate">
                {section.body}
              </p>
            </article>
          ))}
          <article className="border-t border-brand-line pt-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-brand-navy">Questions or requests</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-brand-slate">
              To ask about information submitted through the website, email{" "}
              <a
                href={siteConfig.mailtoHref}
                className="font-semibold text-brand-navy underline decoration-brand-olive underline-offset-4"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
