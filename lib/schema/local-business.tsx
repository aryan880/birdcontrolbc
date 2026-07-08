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
    "Delta",
    "New Westminster",
    "Langley",
  ],
}: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/pigeon-defenders-logo.png`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    url,
    description,
    areaServed,
    priceRange: "$$",
    slogan: siteConfig.slogan,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
