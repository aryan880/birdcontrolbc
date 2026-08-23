import { siteConfig } from "@/content/site";
import type { Resource } from "@/types/resource";

type ArticleSchemaProps = {
  resource: Resource;
};

export function ArticleSchema({ resource }: ArticleSchemaProps) {
  const articleUrl = `${siteConfig.url}${resource.routeHref}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: resource.title,
    description: resource.seo.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: `${siteConfig.url}${resource.image.src}`,
    author: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
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
