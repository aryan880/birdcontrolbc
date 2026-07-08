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
  title: "Bird Proofing Projects in Vancouver",
  description:
    "View project examples for balcony bird netting, pigeon spikes, balcony cleaning, and pet-safe bird-proofing work across Metro Vancouver properties.",
  path: "/projects",
  image: "/images/pigeon-proof-balcony-before-after-focused.jpg",
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
        title="Bird-proofing project examples from Metro Vancouver properties."
        description="Review balcony bird netting, pigeon spike, balcony cleaning, and pet-safe project pages built from the current image library and tied back to the live service routes."
        image={{
          src: "/images/pigeon-proof-balcony-before-after-focused.jpg",
          alt: "Before and after balcony project representing Metro Vancouver bird-proofing work",
        }}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={[
          "Before-and-after style proof where available",
          "Project context tied back to service pages",
          "Cleaner internal linking for conversion and SEO",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
        note={{
          eyebrow: "Proof structure",
          body: "These project pages are grounded in the real image library and written to support service intent, internal linking, and quote-ready browsing.",
        }}
      />

      <section id="project-grid" className="py-16 sm:py-20">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Bird netting, pigeon spike, and balcony cleaning projects connected to live services."
              description="Each project page reinforces a real property problem, the related service route, and the next quote action instead of acting like a disconnected portfolio item."
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
