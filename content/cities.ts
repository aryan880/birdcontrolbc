import type { FAQ } from "@/types/faq";
import type { City } from "@/types/city";

type CitySeed = {
  slug: string;
  name: string;
  summary: string;
  image: City["image"];
  heroDescription: string;
  supportingPoints: string[];
  introDescription: string;
  propertyFocus: [string, string][];
  commonIssues: [string, string][];
  serviceFit: [string, string][];
  relatedServiceSlugs: string[];
  featuredProjectSlugs: string[];
  faqLead: string;
};

function buildCityFaqs(city: string, faqLead: string): FAQ[] {
  const cityId = city.toLowerCase().replace(/\s+/g, "-");

  return [
    {
      id: `${cityId}-quote`,
      question: `How do quotes usually start in ${city}?`,
      answer:
        "The fastest path is still text-first. A few photos plus a short description of the balcony, ledge, roofline, or building edge is enough to begin.",
    },
    {
      id: `${cityId}-services`,
      question: `What kinds of bird-proofing are a fit in ${city}?`,
      answer: faqLead,
    },
    {
      id: `${cityId}-commercial`,
      question: `Do you help both residential and commercial properties in ${city}?`,
      answer:
        "Yes. The service positioning includes condos, homes, strata buildings, storefronts, and other commercial or shared-property spaces across Metro Vancouver.",
    },
  ];
}

function buildCity(seed: CitySeed): City {
  return {
    slug: seed.slug,
    name: seed.name,
    routeHref: `/service-areas/${seed.slug}`,
    summary: seed.summary,
    image: seed.image,
    seo: {
      title: `Bird Proofing in ${seed.name} | Bird Netting, Spikes & Cleaning`,
      description: `${seed.summary} Services may include balcony bird netting, pigeon spikes, balcony cleaning, pet-safe netting, and commercial bird control from Pigeon Defenders.`,
    },
    hero: {
      eyebrow: `${seed.name} Service Area`,
      title: `Bird proofing in ${seed.name} for balconies, ledges, rooflines, and problem building edges.`,
      description: seed.heroDescription,
      supportingPoints: seed.supportingPoints,
    },
    intro: {
      eyebrow: "Local Fit",
      title: `Bird control service fit for ${seed.name} homes, condos, strata, and commercial properties.`,
      description: seed.introDescription,
    },
    propertyFocus: seed.propertyFocus.map(([title, description]) => ({
      title,
      description,
    })),
    commonIssues: seed.commonIssues.map(([title, description]) => ({
      title,
      description,
    })),
    serviceFit: seed.serviceFit.map(([title, description]) => ({
      title,
      description,
    })),
    relatedServiceSlugs: seed.relatedServiceSlugs,
    featuredProjectSlugs: seed.featuredProjectSlugs,
    faqs: buildCityFaqs(seed.name, seed.faqLead),
  };
}

export const cities: City[] = [
  buildCity({
    slug: "vancouver",
    name: "Vancouver",
    summary:
      "Bird-proofing for Vancouver balconies, ledges, rooflines, storefronts, and commercial edges where recurring pigeon activity is becoming a maintenance issue.",
    image: {
      src: "/images/balcony-netting-focused-installation.jpg",
      alt: "Balcony bird netting installation supporting Vancouver service area coverage",
    },
    heroDescription:
      "Support for Vancouver condos, homes, strata buildings, storefronts, and commercial exteriors that need balcony netting, pigeon spikes, cleaning, or broader bird-proofing guidance.",
    supportingPoints: [
      "Useful for downtown balconies, mixed-use buildings, and residential exteriors",
      "Quote-first workflow that works well from phone photos",
      "Clean service fit across both residential and commercial property types",
    ],
    introDescription:
      "Vancouver requests often involve condo balconies, resident-facing ledges, storefront edges, and areas where bird activity affects how the property feels day to day.",
    propertyFocus: [
      ["Condos and apartment balconies", "Good fit for bird netting, pet-safe netting, and cleanup-first projects."],
      ["Storefronts and mixed-use entries", "Often better served by spikes or edge-specific deterrents on visible landing zones."],
      ["Shared residential exteriors", "Useful where strata or multi-unit properties need a tidier, more coordinated solution."],
    ],
    commonIssues: [
      ["Repeat balcony roosting", "Pigeons using the full balcony space often call for exclusion rather than edge-only deterrents."],
      ["Mess above entries and pathways", "Narrow ledges and rooflines can create recurring cleanup issues near public-facing spaces."],
      ["Need for approval-friendly quotes", "Shared buildings and mixed-use properties often need clearer scope from the beginning."],
    ],
    serviceFit: [
      ["Balcony bird netting", "A strong fit for condo openings and sheltered balcony spaces."],
      ["Pigeon spike installation", "Useful on ledges, signs, parapets, and rooflines across residential and commercial buildings."],
      ["Commercial bird control", "Helpful where the issue involves customer-facing or strata-managed building edges."],
    ],
    relatedServiceSlugs: ["balcony-bird-netting", "pigeon-spike-installation", "commercial-bird-control"],
    featuredProjectSlugs: ["condo-balcony-netting", "roofline-spike-installation"],
    faqLead:
      "Balcony bird netting, pigeon spikes, balcony cleaning, pet-safe netting, and commercial bird control can all be relevant depending on how birds are using the property.",
  }),
  buildCity({
    slug: "burnaby",
    name: "Burnaby",
    summary:
      "Bird-proofing for Burnaby condo balconies, shared buildings, rooflines, and residential edges that need practical pigeon control.",
    image: {
      src: "/images/condo-balcony-netting-focused.jpg",
      alt: "Condo balcony netting image supporting Burnaby service area coverage",
    },
    heroDescription:
      "Pigeon Defenders supports Burnaby residents, strata contacts, and commercial property decision-makers who need a cleaner path to balcony bird-proofing, spikes, or cleaning.",
    supportingPoints: [
      "Good fit for towers, townhomes, and shared residential properties",
      "Photo-led quoting helps clarify scope quickly",
      "Humane bird-proofing options across residential and commercial settings",
    ],
    introDescription:
      "Burnaby service requests often sit between residential balcony issues and larger shared-building maintenance needs, which makes clear recommendations especially valuable.",
    propertyFocus: [
      ["High-rise and mid-rise balconies", "A natural fit for netting and cleanup-first planning."],
      ["Shared building edges", "Useful for spikes on visible ledges, signs, and parapets."],
      ["Mixed residential-commercial properties", "Helpful when approvals or scope clarity matter early."],
    ],
    commonIssues: [
      ["Balconies that no longer feel usable", "Droppings and repeat nesting can push residents toward exclusion rather than ongoing cleanup alone."],
      ["Edge perching on visible surfaces", "Rooflines and ledges often benefit from low-profile deterrents rather than full barriers."],
      ["Need for a coordinated approach", "Cleaning and exclusion may need to be discussed together for a better overall result."],
    ],
    serviceFit: [
      ["Balcony bird netting", "Useful when pigeons are entering the full balcony opening."],
      ["Balcony cleaning", "Helpful before the exclusion step when buildup is already visible."],
      ["Pigeon spike installation", "Good fit for narrow edges on shared or commercial-facing building surfaces."],
    ],
    relatedServiceSlugs: ["balcony-bird-netting", "balcony-cleaning", "pigeon-spike-installation"],
    featuredProjectSlugs: ["condo-balcony-netting", "balcony-cleaning-before-after"],
    faqLead:
      "Burnaby projects commonly line up with balcony netting, spikes, and cleaning, especially when condos or shared properties are involved.",
  }),
  buildCity({
    slug: "richmond",
    name: "Richmond",
    summary:
      "Bird-proofing for Richmond balconies, covered openings, rooflines, and property edges where pigeons keep returning.",
    image: {
      src: "/images/balcony-cleaning-finished-space.jpg",
      alt: "Clean balcony image supporting Richmond service area coverage",
    },
    heroDescription:
      "From condo balconies to residential ledges and commercial edges, Richmond service requests can start with photos and move into the right exclusion or cleanup plan from there.",
    supportingPoints: [
      "Strong fit for balcony cleanup and netting-led projects",
      "Useful for residential and mixed commercial properties",
      "Built around simple quoting and clearer recommendations",
    ],
    introDescription:
      "Richmond projects often come down to restoring cleaner balcony use or addressing repeat bird activity on the kinds of exposed edges that keep drawing pigeons back.",
    propertyFocus: [
      ["Condo balconies and sheltered corners", "Well suited to bird netting and cleanup-first work."],
      ["Residential rooflines and ledges", "Often better matched with spikes when the issue is surface-specific."],
      ["Mixed-use and storefront edges", "Helpful when visible bird activity affects the property experience."],
    ],
    commonIssues: [
      ["Balcony droppings and nesting", "The space can start to feel off-limits unless the full opening is addressed."],
      ["Mess that returns after cleaning", "Without exclusion or a landing deterrent, the same issue often comes back."],
      ["Need for a practical next step", "Homeowners and property contacts usually want a clearer path than trial-and-error fixes."],
    ],
    serviceFit: [
      ["Balcony cleaning", "A strong first move when the space already has visible buildup."],
      ["Balcony bird netting", "Best when the balcony itself is the recurring bird zone."],
      ["Pigeon spike installation", "Useful on rooflines, ledges, and other narrow landing surfaces."],
    ],
    relatedServiceSlugs: ["balcony-cleaning", "balcony-bird-netting", "pigeon-spike-installation"],
    featuredProjectSlugs: ["balcony-cleaning-before-after", "condo-balcony-netting"],
    faqLead:
      "Richmond properties can be a fit for balcony cleaning, bird netting, or spikes depending on whether the problem is inside the balcony or mainly on the landing edge.",
  }),
  buildCity({
    slug: "surrey",
    name: "Surrey",
    summary:
      "Bird-proofing for Surrey homes, balconies, rooflines, storefronts, and commercial properties that need humane pigeon control.",
    image: {
      src: "/images/pigeon-spike-roofline-focused.jpg",
      alt: "Roofline spike image supporting Surrey service area coverage",
    },
    heroDescription:
      "Support for Surrey homeowners, strata contacts, and commercial property managers who need a practical recommendation for spikes, netting, cleaning, or broader bird-proofing.",
    supportingPoints: [
      "Fits residential and commercial property types",
      "Useful for rooflines, ledges, balconies, and visible landing zones",
      "Simple quote path from photos and property details",
    ],
    introDescription:
      "Surrey requests often span everything from residential balcony problems to broader commercial or shared-property bird activity, so flexibility matters.",
    propertyFocus: [
      ["Homes and townhomes", "Often a fit for spikes on rooflines or ledges, plus balcony cleanup where needed."],
      ["Condo and strata balconies", "Netting can be a better answer when pigeons are getting fully into the space."],
      ["Storefront and commercial edges", "Useful for deterrents on visible public-facing surfaces."],
    ],
    commonIssues: [
      ["Repeat perching on rooflines and signs", "Surface-specific bird activity often points toward spikes or a similar landing deterrent."],
      ["Balcony mess affecting everyday use", "Cleaning and exclusion may need to work together to actually solve the issue."],
      ["Commercial areas that need cleaner upkeep", "Public-facing spaces usually benefit from a more deliberate bird-control plan."],
    ],
    serviceFit: [
      ["Pigeon spike installation", "A strong fit for ledges, parapets, signs, and building edges."],
      ["Commercial bird control", "Useful when the issue affects storefront, mixed-use, or strata-managed exteriors."],
      ["Balcony bird netting", "Helpful when pigeons are entering the full balcony rather than just landing on the edge."],
    ],
    relatedServiceSlugs: ["pigeon-spike-installation", "commercial-bird-control", "balcony-bird-netting"],
    featuredProjectSlugs: ["roofline-spike-installation", "condo-balcony-netting"],
    faqLead:
      "Surrey properties can be a fit for spikes, netting, cleaning, and commercial bird control depending on whether the issue is on a surface, inside the balcony, or across a larger building edge.",
  }),
  buildCity({
    slug: "coquitlam",
    name: "Coquitlam",
    summary:
      "Bird-proofing for Coquitlam balconies, residential ledges, and shared building edges that need a cleaner long-term approach.",
    image: {
      src: "/images/balcony-cleaning-finished-space.jpg",
      alt: "Balcony cleaning image supporting Coquitlam service area coverage",
    },
    heroDescription:
      "Coquitlam service requests can start with balcony photos, roofline details, or a quick description of the bird activity so the right recommendation is clearer from the first step.",
    supportingPoints: [
      "Useful for condos, homes, and shared residential buildings",
      "Works well for cleanup-first and balcony-led issues",
      "Keeps the process practical and photo-based",
    ],
    introDescription:
      "Coquitlam requests often come from properties that need a calmer, more maintainable setup rather than a patchwork of temporary fixes.",
    propertyFocus: [
      ["Balconies and outdoor living spaces", "A strong fit for netting and cleanup where pigeons are already using the space."],
      ["Residential rooflines and ledges", "Often better suited to spikes when the problem is narrow and repetitive."],
      ["Shared building exteriors", "Helpful when the issue affects common areas or resident-facing surfaces."],
    ],
    commonIssues: [
      ["Repeat balcony contamination", "Droppings and nesting debris can make a space feel unusable quickly."],
      ["Unclear next step", "People are often unsure whether they need cleaning, netting, spikes, or some combination."],
      ["Need for a clean finish", "The preferred solution usually needs to feel practical and visually calm."],
    ],
    serviceFit: [
      ["Balcony cleaning", "A strong first move when the mess is already significant."],
      ["Balcony bird netting", "Useful for enclosed balcony protection and repeat bird entry."],
      ["Pigeon spike installation", "Helpful where the issue is tied to a narrow ledge or roofline instead."],
    ],
    relatedServiceSlugs: ["balcony-cleaning", "balcony-bird-netting", "pigeon-spike-installation"],
    featuredProjectSlugs: ["balcony-cleaning-before-after", "condo-balcony-netting"],
    faqLead:
      "In Coquitlam, the right fit often depends on whether pigeons are using the whole balcony, just the landing edge, or whether cleanup is the first priority.",
  }),
  buildCity({
    slug: "north-vancouver",
    name: "North Vancouver",
    summary:
      "Bird-proofing for North Vancouver balconies, residential exteriors, and shared properties that need humane, practical pigeon control.",
    image: {
      src: "/images/pet-safe-balcony-cat-netting.jpg",
      alt: "Pet-safe balcony netting image supporting North Vancouver service area coverage",
    },
    heroDescription:
      "North Vancouver properties can start with a simple photo-led quote whether the issue involves balcony netting, pet-safe planning, spikes, or cleanup before protection.",
    supportingPoints: [
      "Strong fit for balconies where daily use matters",
      "Useful for pet-safe and resident-focused enclosure planning",
      "Clear path from photos to recommendation",
    ],
    introDescription:
      "North Vancouver requests often center on keeping outdoor space usable and visually calm while still solving recurring pigeon activity properly.",
    propertyFocus: [
      ["Balconies used as part of everyday living", "Good fit for netting and pet-focused setups that still prioritize clean bird exclusion."],
      ["Residential ledges and rooflines", "Useful for spikes when the issue is limited to repeat landing surfaces."],
      ["Shared residential properties", "Helpful when the recommendation needs to feel suitable for a multi-unit setting."],
    ],
    commonIssues: [
      ["Bird activity where people spend time outdoors", "The problem often feels more urgent when the balcony is actively used."],
      ["Need for a more considered visual finish", "Residents usually want protection that feels integrated with the space."],
      ["Overlap between pet use and bird-proofing", "Some balconies need both concerns handled at once."],
    ],
    serviceFit: [
      ["Pet & cat netting", "A strong fit when safer balcony use and bird exclusion overlap."],
      ["Balcony bird netting", "Useful when pigeons are entering the full opening."],
      ["Pigeon spike installation", "Best when the issue is concentrated on a landing edge nearby."],
    ],
    relatedServiceSlugs: ["pet-cat-netting", "balcony-bird-netting", "pigeon-spike-installation"],
    featuredProjectSlugs: ["pet-safe-balcony-netting", "condo-balcony-netting"],
    faqLead:
      "North Vancouver properties often line up with balcony netting, pet-safe netting, and spikes depending on how the space is used and where pigeons are landing.",
  }),
  buildCity({
    slug: "west-vancouver",
    name: "West Vancouver",
    summary:
      "Bird-proofing for West Vancouver balconies, residential edges, and shared properties that need a discreet, practical solution.",
    image: {
      src: "/images/pet-safe-balcony-cat-netting.jpg",
      alt: "Pet-safe balcony netting image supporting West Vancouver service area coverage",
    },
    heroDescription:
      "Pigeon Defenders supports West Vancouver homes, condos, and shared properties with bird-proofing that aims to feel clean, considered, and easy to start from photos.",
    supportingPoints: [
      "Useful where visual finish matters as much as function",
      "Strong fit for balconies, ledges, and pet-focused spaces",
      "Built around practical, humane recommendations",
    ],
    introDescription:
      "West Vancouver service needs often lean toward cleaner-looking exclusions and carefully matched recommendations rather than harsh or overly visible fixes.",
    propertyFocus: [
      ["Balconies with a strong daily-use focus", "A good fit for discreet netting and pet-safe planning."],
      ["Architectural ledges and rooflines", "Useful for low-profile spikes when the issue is surface-specific."],
      ["Shared or multi-resident properties", "Helpful when the recommendation needs to feel refined and practical."],
    ],
    commonIssues: [
      ["Need for a discreet result", "Bird-proofing often has to solve the issue without feeling visually heavy."],
      ["Pigeons affecting outdoor enjoyment", "Balcony droppings and nesting can quickly change how the space feels."],
      ["Multiple goals in one project", "Some properties need safety, cleanup, and exclusion considered together."],
    ],
    serviceFit: [
      ["Balcony bird netting", "Useful when the entire balcony opening needs to be protected."],
      ["Pet & cat netting", "A fit when balcony safety and bird exclusion need to be handled together."],
      ["Pigeon spike installation", "Helpful for rooflines and ledges where birds keep returning to land."],
    ],
    relatedServiceSlugs: ["balcony-bird-netting", "pet-cat-netting", "pigeon-spike-installation"],
    featuredProjectSlugs: ["pet-safe-balcony-netting", "roofline-spike-installation"],
    faqLead:
      "West Vancouver properties may need netting, pet-safe enclosure planning, spikes, or cleanup depending on whether the priority is balcony use, a landing edge, or both.",
  }),
  buildCity({
    slug: "delta",
    name: "Delta",
    summary:
      "Bird-proofing for Delta homes, balconies, rooflines, and commercial edges that need a clearer long-term answer to pigeon activity.",
    image: {
      src: "/images/pigeon-spikes-close-up-installation.jpg",
      alt: "Pigeon spikes image supporting Delta service area coverage",
    },
    heroDescription:
      "Delta properties can start with a quick photo-led quote for spikes, netting, cleaning, or broader bird-proofing depending on where the birds are landing or nesting.",
    supportingPoints: [
      "Useful for residential and commercial edges",
      "Good fit for rooflines, ledges, balconies, and cleanup-first projects",
      "Practical recommendations without inflated claims",
    ],
    introDescription:
      "Delta requests often need a recommendation that separates landing-surface problems from full-balcony problems so the solution stays efficient.",
    propertyFocus: [
      ["Homes and roofline edges", "Often better served by spikes when the issue is concentrated on narrow surfaces."],
      ["Balconies with ongoing droppings", "Netting and cleaning can work together when pigeons are entering the full space."],
      ["Commercial-facing exteriors", "Helpful where visible bird activity affects how the building presents."],
    ],
    commonIssues: [
      ["Repeat landing on exposed edges", "Birds returning to the same roofline or ledge usually need a surface-specific deterrent."],
      ["Balconies affected by buildup", "Cleaning often becomes part of the conversation once the problem is established."],
      ["Need for a simple quote path", "People usually want clarity on what kind of solution makes sense before doing more research on their own."],
    ],
    serviceFit: [
      ["Pigeon spike installation", "A strong fit for recurring edge-based bird activity."],
      ["Balcony cleaning", "Useful when visible mess needs to be addressed before or alongside protection."],
      ["Balcony bird netting", "Helpful when the full balcony opening is part of the problem."],
    ],
    relatedServiceSlugs: ["pigeon-spike-installation", "balcony-cleaning", "balcony-bird-netting"],
    featuredProjectSlugs: ["roofline-spike-installation", "balcony-cleaning-before-after"],
    faqLead:
      "Delta properties may be a fit for spikes, cleaning, or balcony netting depending on whether pigeons are mainly landing on an edge or getting fully into the balcony space.",
  }),
  buildCity({
    slug: "new-westminster",
    name: "New Westminster",
    summary:
      "Bird-proofing for New Westminster balconies, shared residential properties, and visible building edges with repeat pigeon issues.",
    image: {
      src: "/images/pigeon-spike-roofline-focused.jpg",
      alt: "Roofline spike image supporting New Westminster service area coverage",
    },
    heroDescription:
      "New Westminster service requests can begin with balcony photos, roofline details, or shared-building problem areas so the recommendation is clearer right away.",
    supportingPoints: [
      "Useful for shared residential and mixed-use properties",
      "Good fit for balcony netting, spikes, and cleanup planning",
      "Photo-first quoting keeps the process straightforward",
    ],
    introDescription:
      "New Westminster projects often sit in the middle of residential balcony issues and visible shared-building maintenance problems, which makes a balanced recommendation especially important.",
    propertyFocus: [
      ["Shared balconies and residential openings", "Netting can help when pigeons are entering beyond the edge."],
      ["Visible ledges and rooflines", "Spikes often make sense when the issue is a recurring landing surface."],
      ["Common areas and entry-adjacent surfaces", "Helpful when droppings or roosting affect resident experience."],
    ],
    commonIssues: [
      ["Bird activity in shared residential settings", "The issue often affects more than one resident-facing area at once."],
      ["Cleanup that keeps returning", "Without a deterrent or barrier, cleaning alone usually does not change the pattern."],
      ["Need to connect services together", "Projects may need a mix of cleaning, spikes, or netting depending on where the activity sits."],
    ],
    serviceFit: [
      ["Pigeon spike installation", "Useful for narrow ledges and rooflines above shared paths or entries."],
      ["Balcony bird netting", "Helpful when pigeons are nesting or roosting inside the balcony opening."],
      ["Balcony cleaning", "A strong fit when visible buildup is already affecting the space."],
    ],
    relatedServiceSlugs: ["pigeon-spike-installation", "balcony-bird-netting", "balcony-cleaning"],
    featuredProjectSlugs: ["roofline-spike-installation", "balcony-cleaning-before-after"],
    faqLead:
      "New Westminster properties often call for spikes, balcony netting, and cleaning depending on whether the issue is concentrated on a ledge or spread throughout the balcony space.",
  }),
  buildCity({
    slug: "langley",
    name: "Langley",
    summary:
      "Bird-proofing for Langley homes, balconies, rooflines, and commercial properties that need a practical way to deal with pigeon activity.",
    image: {
      src: "/images/balcony-netting-focused-installation.jpg",
      alt: "Balcony bird netting image supporting Langley service area coverage",
    },
    heroDescription:
      "Pigeon Defenders supports Langley properties with photo-led quotes for balcony netting, pigeon spikes, cleaning, pet-safe netting, and broader bird-proofing where the issue keeps returning.",
    supportingPoints: [
      "Useful for homes, condos, and commercial properties",
      "Strong fit for balconies, rooflines, and visible landing edges",
      "Simple start from photos and property context",
    ],
    introDescription:
      "Langley projects often benefit from a straightforward recommendation that separates full-space balcony issues from narrower ledge or roofline problems.",
    propertyFocus: [
      ["Residential balconies", "A fit for netting, pet-safe planning, and cleanup when pigeons are using the space."],
      ["Rooflines and problem ledges", "Spikes can make more sense where the issue stays tied to a landing surface."],
      ["Commercial and mixed-use exteriors", "Useful when visible bird activity affects how the building feels and functions."],
    ],
    commonIssues: [
      ["Outdoor spaces becoming less usable", "Bird mess can change how balconies and entries are actually used day to day."],
      ["Ongoing edge-based roosting", "Some properties mainly need a deterrent at the landing zone rather than a full enclosure."],
      ["Need for a clear first recommendation", "Homeowners and managers often just want to know what type of solution fits the actual problem."],
    ],
    serviceFit: [
      ["Balcony bird netting", "Best when pigeons are entering the full balcony area."],
      ["Pigeon spike installation", "Helpful for narrow ledges, signs, and rooflines."],
      ["Commercial bird control", "Useful for larger or public-facing property issues."],
    ],
    relatedServiceSlugs: ["balcony-bird-netting", "pigeon-spike-installation", "commercial-bird-control"],
    featuredProjectSlugs: ["condo-balcony-netting", "roofline-spike-installation"],
    faqLead:
      "Langley projects can be a fit for balcony netting, spikes, cleaning, pet-safe netting, and commercial bird control depending on the property and the problem area.",
  }),
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getCitiesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getCityBySlug(slug))
    .filter((city): city is City => Boolean(city));
}
