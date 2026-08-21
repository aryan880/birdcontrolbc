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
    ...(project.videos?.length
      ? {
          video: project.videos.map((video) => ({
            "@type": "VideoObject",
            name: video.title,
            description: video.caption,
            contentUrl: `${siteConfig.url}${video.src}`,
            thumbnailUrl: `${siteConfig.url}${video.poster}`,
          })),
        }
      : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.brandIcon}`,
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
