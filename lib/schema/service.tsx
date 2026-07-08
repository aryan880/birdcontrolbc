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
    name: service.seo?.title ?? service.name,
    serviceType: service.name,
    description: service.seo?.description ?? service.summary,
    areaServed: "Metro Vancouver",
    url: serviceUrl,
    image: `${siteConfig.url}${service.image.src}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
