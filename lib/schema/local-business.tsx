import { siteConfig } from "@/content/site";

const serviceAreas = [
    "Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "Coquitlam",
    "North Vancouver",
    "West Vancouver",
];

export function LocalBusinessSchema() {
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.brandIcon}`,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    slogan: siteConfig.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
  };

  localBusinessSchema.telephone = siteConfig.phoneHref;
  localBusinessSchema.email = siteConfig.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
