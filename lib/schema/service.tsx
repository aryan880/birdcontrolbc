import { siteConfig } from "@/content/site";
import type { Service } from "@/types/service";

type ServiceSchemaProps = {
  service: Service;
};

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const serviceUrl = `${siteConfig.url}${service.routeHref ?? service.href}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.seo?.description ?? service.summary,
    areaServed: "Vancouver and the Lower Mainland, BC",
    url: serviceUrl,
    image: `${siteConfig.url}${service.image.src}`,
    provider: {
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
