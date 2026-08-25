import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

type ProjectSchemaProps = {
  project: Project;
};

const knownVideoUploadDates: Record<string, string> = {
  "/media/projects/lower-mainland-balcony-netting/netting-walkthrough.mp4": "2026-08-21T04:14:14Z",
  "/media/projects/lower-mainland-balcony-netting/before-balcony-walkthrough.mp4": "2026-08-21T04:20:52Z",
};

export function ProjectSchema({ project }: ProjectSchemaProps) {
  const projectUrl = `${siteConfig.url}${project.routeHref}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${projectUrl}#article`,
    headline: project.title,
    description: project.seo.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },
    image: project.gallery.map((image) => `${siteConfig.url}${image.src}`),
    ...(project.videos?.length
      ? {
          video: project.videos.map((video) => ({
            "@type": "VideoObject",
            name: video.title,
            description: video.caption,
            contentUrl: `${siteConfig.url}${video.src}`,
            thumbnailUrl: `${siteConfig.url}${video.poster}`,
            uploadDate: video.uploadDate ?? knownVideoUploadDates[video.src],
          })),
        }
      : {}),
    author: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
