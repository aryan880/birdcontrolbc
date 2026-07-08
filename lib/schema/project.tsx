import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

type ProjectSchemaProps = {
  project: Project;
};

export function ProjectSchema({ project }: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.seo.title,
    description: project.seo.description,
    mainEntityOfPage: `${siteConfig.url}${project.routeHref}`,
    image: project.gallery.map((image) => `${siteConfig.url}${image.src}`),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/pigeon-defenders-logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
