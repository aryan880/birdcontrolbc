import type { Service } from "@/types/service";

const imageByService = {
  "balcony-bird-netting": { src: "/media/projects/lower-mainland-balcony-netting/project-hero.webp", alt: "Black bird netting installed across a Lower Mainland residential balcony opening" },
  "bird-spike-installation": { src: "/images/pigeon-spike-roofline-focused.jpg", alt: "Bird spikes installed along a roofline landing edge" },
  "pigeon-dropping-cleaning": { src: "/images/balcony-cleaning-finished-space.jpg", alt: "Cleaned balcony after pigeon-dropping cleanup" },
  "bird-deterrents": { src: "/images/pigeon-spikes-close-up-installation.jpg", alt: "Close view of a bird-deterrent installation on a landing surface" },
  "commercial-bird-control": { src: "/images/condo-balcony-netting-focused.jpg", alt: "Bird-control work on a multi-unit building exterior" },
  "strata-bird-control": { src: "/images/pigeon-proof-balcony-before-after-focused.jpg", alt: "Bird-proofed balcony at a shared residential property" },
} as const;

type ServiceSeed = Pick<Service, "slug" | "name" | "shortLabel" | "summary"> & {
  intent: string;
  problem: string;
  solution: string;
  cities: string[];
};

const serviceSeeds: ServiceSeed[] = [
  { slug: "balcony-bird-netting", name: "Balcony Bird Netting", shortLabel: "Balcony Netting", summary: "Bird netting for balconies where pigeons are entering, nesting, or making the outdoor space difficult to use.", intent: "Balcony bird netting in Vancouver and the Lower Mainland", problem: "Pigeons can access the full balcony opening, not just one ledge.", solution: "A measured netting layout creates a physical barrier across the opening.", cities: ["vancouver", "burnaby", "richmond"] },
  { slug: "bird-spike-installation", name: "Bird Spike Installation", shortLabel: "Bird Spikes", summary: "Bird spike installation for ledges, rooflines, signs, beams, and other repeat landing surfaces.", intent: "Bird spike installation for Vancouver properties", problem: "Birds keep returning to a narrow, defined perch or landing edge.", solution: "Low-profile spikes help make that surface less suitable for roosting.", cities: ["vancouver", "north-vancouver", "surrey"] },
  { slug: "pigeon-dropping-cleaning", name: "Pigeon Dropping Cleaning", shortLabel: "Dropping Cleanup", summary: "Pigeon-dropping cleanup for balconies and building areas that need a cleaner reset before the next step.", intent: "Pigeon-dropping cleanup in Vancouver and the Lower Mainland", problem: "Accumulated droppings and nesting material are affecting the condition or use of the space.", solution: "Cleanup can reset the area before a deterrent or exclusion measure is considered.", cities: ["vancouver", "burnaby", "coquitlam"] },
  { slug: "bird-deterrents", name: "Bird Deterrents", shortLabel: "Bird Deterrents", summary: "Practical bird-deterrent options for surfaces where repeat roosting needs to be addressed without enclosing an entire area.", intent: "Bird deterrents for Vancouver homes and buildings", problem: "The issue is concentrated on one or more accessible landing surfaces.", solution: "The approach is selected around the surface, visibility, access, and how the property is used.", cities: ["richmond", "west-vancouver", "surrey"] },
  { slug: "commercial-bird-control", name: "Commercial Bird Control", shortLabel: "Commercial Bird Control", summary: "Bird-control planning for storefronts, industrial buildings, offices, and public-facing commercial properties.", intent: "Commercial bird control across the Lower Mainland", problem: "Bird activity is affecting a visible, shared, or business-facing area of the property.", solution: "A clear scope connects the problem surfaces, access needs, cleanup, and appropriate deterrents.", cities: ["vancouver", "richmond", "surrey"] },
  { slug: "strata-bird-control", name: "Strata Bird Control", shortLabel: "Strata Bird Control", summary: "Bird-control planning for strata properties where balcony, common-area, and approval considerations need to work together.", intent: "Strata bird control for Vancouver and Lower Mainland properties", problem: "The issue touches common areas, multiple balconies, or a property-management workflow.", solution: "Photo documentation and a practical scope help make the next discussion more straightforward.", cities: ["burnaby", "coquitlam", "north-vancouver"] },
];

export const services: Service[] = serviceSeeds.map((seed) => ({
  slug: seed.slug,
  name: seed.name,
  shortLabel: seed.shortLabel,
  href: `/services/${seed.slug}`,
  routeHref: `/services/${seed.slug}`,
  routeEnabled: true,
  summary: seed.summary,
  image: imageByService[seed.slug as keyof typeof imageByService],
  seo: {
    title: `${seed.name} | Bird Control BC`,
    description: `${seed.summary} Serving Vancouver and the Lower Mainland. Send photos for a free quote from Bird Control BC.`,
  },
  hero: {
    eyebrow: seed.intent,
    title: seed.name,
    description: `${seed.summary} Start by sending clear photos of the area, the city, and any access or property-management context.`,
    supportingPoints: ["Photo-led first step", "Scope based on the actual surface", "Vancouver & Lower Mainland"],
  },
  benefits: [
    { title: "Property-specific planning", description: "The work begins with the part of the building birds are using, not a one-size-fits-all package." },
    { title: "Clearer first scope", description: "Photos, city, access, and property type make the first recommendation more useful." },
    { title: "Built for real use", description: "The goal is to protect the area while respecting how residents, staff, or visitors use it." },
  ],
  problem: {
    eyebrow: "The problem",
    title: seed.problem,
    description: "Bird issues tend to repeat when the underlying entry point, landing surface, or property condition is left unchanged.",
    points: [
      { title: "Recurring activity", description: "Birds return to places that offer a reliable place to land, shelter, or nest." },
      { title: "Affecting daily use", description: "Droppings, nesting material, and repeat bird activity can change how a balcony, entry, or exterior edge is used." },
      { title: "A need for a practical next step", description: "The right fit depends on the surface, location, access, and whether cleanup is also part of the scope." },
    ],
  },
  process: {
    eyebrow: "How the work starts",
    title: seed.solution,
    description: "Bird Control BC uses a simple, photo-led process to understand the property before recommending a direction.",
    steps: [
      { title: "Send photos", description: "Show the main problem area and the surrounding surface or opening." },
      { title: "Share the property context", description: "Include the city, property type, access notes, and any timing constraints." },
      { title: "Review the best fit", description: "The next step is shaped around the actual issue rather than a generic package." },
    ],
  },
  featuredProjectSlug: seed.slug === "bird-spike-installation" ? "roofline-bird-spike-project" : "vancouver-balcony-netting-project",
  featuredCitySlugs: seed.cities,
  relatedServiceSlugs: serviceSeeds.filter((service) => service.slug !== seed.slug).slice(0, 3).map((service) => service.slug),
  relatedResourceSlugs:
    seed.slug === "pigeon-dropping-cleaning"
      ? ["pigeon-droppings-health-risks", "pigeon-dropping-cleanup-safety"]
      : seed.slug === "balcony-bird-netting"
        ? ["prevent-pigeon-droppings-balcony"]
        : undefined,
  whyChoose: {
    eyebrow: "A grounded approach",
    title: "Clear information before a recommendation.",
    description: "The quote path is designed to be useful for property owners, managers, and strata contacts without relying on unsupported promises.",
    points: [
      { title: "Real project context", description: "Photos make it easier to discuss the actual work area and what may affect the scope." },
      { title: "Useful internal paths", description: "Related services and local pages help visitors move from the problem to the right conversation." },
      { title: "A straightforward quote start", description: "Send photos when ready, or call if a direct conversation is the better first step." },
    ],
  },
  quoteCardNote: "Send photos of the problem area with the city and a short note about the property. That is enough to start a useful conversation.",
  faqs: [
    { id: `${seed.slug}-quote`, question: `How do I request a ${seed.shortLabel?.toLowerCase()} quote?`, answer: "Send photos of the affected area, your city, and any details about access or the property type. The request can then be reviewed with better context." },
    { id: `${seed.slug}-fit`, question: `How do I know if ${seed.shortLabel?.toLowerCase()} is the right fit?`, answer: "The right approach depends on where birds are entering or landing. Photos help distinguish between a balcony opening, a narrow ledge, cleanup need, or a broader property issue." },
    { id: `${seed.slug}-service-area`, question: "Which areas do you serve?", answer: "Bird Control BC is structured around Vancouver and key Lower Mainland service areas, including Burnaby, Richmond, the North Shore, Coquitlam, and Surrey." },
    ...(seed.slug === "pigeon-dropping-cleaning"
      ? [
          {
            id: "pigeon-dropping-cleaning-health",
            question: "Can dried pigeon droppings create airborne dust?",
            answer:
              "Yes. Dried material can become airborne when it is swept, scraped, or otherwise disturbed. Health Canada and CDC guidance support avoiding casual dry cleanup of a substantial buildup. The actual health risk varies by the condition, exposure, and individual susceptibility.",
          },
          {
            id: "pigeon-dropping-cleaning-medical",
            question: "Can Bird Control BC assess a health risk?",
            answer:
              "We can assess the visible property condition and bird-access problem, but we do not diagnose illness or test for pathogens. Contact a healthcare professional or public-health authority for personal medical concerns.",
          },
        ]
      : []),
  ],
}));

export function getServiceBySlug(slug: string) { return services.find((service) => service.slug === slug); }
export function getPublishedServices() { return services.filter((service) => service.routeEnabled && service.routeHref); }
export function getServiceHref(service: Service) { return service.routeHref ?? service.href; }
export function getServicesBySlugs(slugs: string[]) { return slugs.map(getServiceBySlug).filter((service): service is Service => Boolean(service)); }
