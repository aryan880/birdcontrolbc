import { siteConfig } from "@/content/site";

type LocalBusinessSchemaProps = {
  url?: string;
  description?: string;
  areaServed?: string | string[];
};

export function LocalBusinessSchema({
  url = siteConfig.url,
  description = siteConfig.defaultDescription,
  areaServed = [
    "Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "Coquitlam",
    "North Vancouver",
    "West Vancouver",
  ],
}: LocalBusinessSchemaProps) {
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.brandIcon}`,
    url,
    description,
    areaServed,
    slogan: siteConfig.slogan,
  };

  if (siteConfig.phoneHref) localBusinessSchema.telephone = siteConfig.phoneHref;
  if (siteConfig.email && siteConfig.mailtoHref !== "mailto:") localBusinessSchema.email = siteConfig.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
