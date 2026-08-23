import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ResourceLinks } from "@/components/sections/ResourceLinks";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { resources } from "@/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Bird Control & Pigeon Cleanup Guides | Bird Control BC",
  description:
    "Practical Vancouver property guides about pigeon droppings, cleanup safety, balcony bird netting, and preventing recurring bird activity.",
  path: "/resources",
  image: resources[0].image.src,
});

export default function ResourcesPage() {
  return (
    <>
      <header className="border-b border-brand-line bg-brand-cream py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading
            eyebrow="Property care resources"
            title="Clear guidance for a cleaner, better-protected property."
            headingLevel="h1"
          />
          <p className="max-w-2xl text-base leading-8 text-brand-slate lg:justify-self-end lg:text-lg">
            Evidence-based information about pigeon-dropping buildup, airborne dust during cleanup, and choosing a prevention method that fits the property.
          </p>
        </Container>
      </header>
      <section className="section-wrap bg-white">
        <Container>
          <ResourceLinks resources={resources} />
        </Container>
      </section>
    </>
  );
}
