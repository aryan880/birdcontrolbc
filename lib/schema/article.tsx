import { siteConfig } from "@/content/site";
import type { Resource } from "@/types/resource";

type ArticleSchemaProps = {
  resource: Resource;
};

export function ArticleSchema({ resource }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.seo.description,
    mainEntityOfPage: `${siteConfig.url}${resource.routeHref}`,
    image: `${siteConfig.url}${resource.image.src}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.brandIcon}`,
      },
    },
    citation: resource.sources.map((source) => source.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
