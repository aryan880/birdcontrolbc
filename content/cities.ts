import type { City } from "@/types/city";

const image = {
  src: "/media/projects/lower-mainland-balcony-netting/completed-netting-skyline.webp",
  alt: "Completed balcony bird netting with Vancouver buildings beyond",
};

type CitySeed = { slug: string; name: string; context: string; propertyFocus: string; services: string[]; project: string };

const citySeeds: CitySeed[] = [
  { slug: "vancouver", name: "Vancouver", context: "Vancouver properties range from dense condo balconies to retail streets, older rooflines, and larger commercial sites.", propertyFocus: "Condo balconies, mixed-use buildings, storefronts, and property-managed exteriors", services: ["balcony-bird-netting", "bird-spike-installation", "commercial-bird-control"], project: "vancouver-balcony-netting-project" },
  { slug: "burnaby", name: "Burnaby", context: "Burnaby has a broad mix of high-rise, townhome, and commercial properties where access and shared-building coordination can matter.", propertyFocus: "High-rise balconies, multi-family communities, and commercial edges", services: ["balcony-bird-netting", "pigeon-dropping-cleaning", "strata-bird-control"], project: "vancouver-balcony-netting-project" },
  { slug: "richmond", name: "Richmond", context: "Richmond projects often involve condo balconies, retail centres, warehouses, and property edges exposed to repeat bird activity.", propertyFocus: "Condo developments, commercial buildings, rooflines, and loading areas", services: ["balcony-bird-netting", "bird-deterrents", "commercial-bird-control"], project: "roofline-bird-spike-project" },
  { slug: "north-vancouver", name: "North Vancouver", context: "North Vancouver properties frequently combine elevated balconies, exposed rooflines, and terrain-sensitive access considerations.", propertyFocus: "Homes, elevated balconies, building edges, and strata common areas", services: ["bird-spike-installation", "bird-deterrents", "strata-bird-control"], project: "roofline-bird-spike-project" },
  { slug: "west-vancouver", name: "West Vancouver", context: "West Vancouver properties often need careful attention to visible building details, exterior finishes, and how outdoor spaces are used.", propertyFocus: "Homes, view-facing balconies, rooflines, and visible exterior details", services: ["bird-deterrents", "bird-spike-installation", "balcony-bird-netting"], project: "vancouver-balcony-netting-project" },
  { slug: "coquitlam", name: "Coquitlam", context: "Coquitlam combines newer residential communities, townhomes, commercial corridors, and strata properties with varied bird-control needs.", propertyFocus: "Residential balconies, strata common areas, and commercial exterior surfaces", services: ["pigeon-dropping-cleaning", "strata-bird-control", "balcony-bird-netting"], project: "vancouver-balcony-netting-project" },
  { slug: "surrey", name: "Surrey", context: "Surrey has a wide mix of homes, multi-family buildings, retail, warehouse, and other commercial properties needing site-specific planning.", propertyFocus: "Homes, multi-family buildings, retail, industrial, and warehouse properties", services: ["commercial-bird-control", "bird-spike-installation", "bird-deterrents"], project: "roofline-bird-spike-project" },
];

export const cities: City[] = citySeeds.map((seed) => ({
  slug: seed.slug,
  name: seed.name,
  routeHref: `/service-areas/${seed.slug}`,
  summary: `Bird-control services in ${seed.name} for balconies, building edges, shared properties, and commercial sites.`,
  image,
  seo: { title: `Bird Control ${seed.name} | Bird Control BC`, description: `Bird Control BC provides practical bird netting, spikes, deterrents, and pigeon-dropping cleanup in ${seed.name}. Send photos for a free quote.` },
  hero: { eyebrow: `Bird control in ${seed.name}`, title: `Bird control for ${seed.name} properties.`, description: `${seed.context} Send photos of the problem area and property context to start a more useful quote conversation.`, supportingPoints: [seed.propertyFocus, "Photo-led quote requests", "Linked services and project examples"] },
  intro: { eyebrow: "Local context", title: `A practical approach to bird activity in ${seed.name}.`, description: `${seed.context} The local page adds context while the service pages stay focused on the work itself.` },
  propertyFocus: [
    { title: "Property focus", description: seed.propertyFocus },
    { title: "Problem surfaces", description: "Balcony openings, ledges, rooflines, signs, entry areas, and other repeat landing surfaces." },
    { title: "A better starting point", description: "Photos and a short location note give the first discussion a clearer base than guessing from a service name." },
  ],
  commonIssues: [
    { title: "Repeat roosting", description: "Birds often return to the same ledge, roofline, balcony, or sheltered edge." },
    { title: "Droppings and nesting material", description: "Cleanup can become a recurring task when the source of the activity is not addressed." },
    { title: "Shared-property coordination", description: "Strata, commercial, and property-management contexts may influence access and scope." },
  ],
  serviceFit: [
    { title: "Netting for access", description: "A balcony opening that birds can enter generally calls for a barrier, not only an edge deterrent." },
    { title: "Spikes or deterrents for landing edges", description: "A defined ledge or roofline may be a better fit for surface-based deterrents." },
    { title: "Cleanup before protection", description: "Dropping cleanup can be considered before the next protection step is selected." },
  ],
  relatedServiceSlugs: seed.services,
  featuredProjectSlugs: [seed.project],
  faqs: [
    { id: `${seed.slug}-areas`, question: `Do you serve ${seed.name}?`, answer: `Yes. Bird Control BC has a dedicated ${seed.name} page to connect local property context with the relevant service routes and quote form.` },
    { id: `${seed.slug}-quote`, question: `What should I send for a ${seed.name} quote?`, answer: "Send photos of the affected area, the city, property type, and any access or timing context that could affect the work." },
  ],
}));

export function getCityBySlug(slug: string) { return cities.find((city) => city.slug === slug); }
export function getCitiesBySlugs(slugs: string[]) { return slugs.map(getCityBySlug).filter((city): city is City => Boolean(city)); }
