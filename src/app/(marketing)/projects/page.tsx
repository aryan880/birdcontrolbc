import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { galleryProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Bird Control Projects | Vancouver & Lower Mainland",
  description:
    "View Bird Control BC project examples for balcony netting, bird spikes, and pigeon-dropping cleanup across Vancouver and the Lower Mainland.",
  path: "/projects",
  image: "/media/projects/lower-mainland-balcony-netting/project-hero.webp",
});

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Projects", url: `${siteConfig.url}/projects` },
        ]}
      />

      <PageHero
        eyebrow="Projects"
        title="Bird-control projects documented on real properties."
        description="Review recent balcony netting, cleanup, and deterrent examples, each linked to the relevant service and local page."
        image={{
          src: "/media/projects/lower-mainland-balcony-netting/project-hero.webp",
          alt: "Black bird netting installed across a Lower Mainland residential balcony",
        }}
        actions={[
          { href: "/contact#quote", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Real job photography and video",
          "Project context linked to services",
          "Local paths back to quote requests",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
        note={{
          eyebrow: "Project gallery",
          body: "Each project page identifies real photography honestly and connects the work to the related service and local page.",
        }}
      />

      <section id="project-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Bird-control project examples connected to useful next steps."
              description="Every project links to the relevant service and local area, so the gallery remains useful when a visitor has a similar property issue."
              align="center"
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {galleryProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
