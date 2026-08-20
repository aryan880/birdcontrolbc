import type { Project } from "@/types/project";

export const galleryProjects: Project[] = [
  {
    slug: "vancouver-balcony-netting-project", title: "Condo balcony bird-netting project", routeHref: "/projects/vancouver-balcony-netting-project", location: "Vancouver, BC", relatedCitySlug: "vancouver",
    summary: "A balcony bird-netting example centred on keeping a condo outdoor space more usable while addressing repeat bird access.", tags: ["Balcony netting", "Condo"],
    image: { src: "/images/pigeon-proof-balcony-before-after-focused.jpg", alt: "Bird-proofed condo balcony with a focused netting installation", kind: "after" },
    gallery: [
      { src: "/images/pigeon-proof-balcony-before-after-focused.jpg", alt: "Bird-proofed balcony after netting work", caption: "Existing project image used as a visual reference for an enclosed balcony opening.", kind: "after" },
      { src: "/images/balcony-netting-focused-installation.jpg", alt: "Detail of netting on a condo balcony", caption: "Detail view of a balcony-netting installation.", kind: "detail" },
    ],
    seo: { title: "Vancouver Balcony Bird Netting Project | Bird Control BC", description: "A Vancouver balcony bird-netting project example linked to Bird Control BC balcony-netting services and Vancouver local context." },
    hero: { eyebrow: "Project example", title: "A clearer boundary for a condo balcony.", description: "This visual example shows the type of balcony-opening issue that can be approached with a bird-netting system." },
    overview: "Some balcony problems are about full access into the space, not only a ledge where birds land. This project example is structured around that distinction.",
    scope: ["Review the balcony opening", "Consider the visible finish and day-to-day use", "Connect the example to the relevant local service path"],
    challenges: [{ title: "Full balcony access", description: "Birds were using the balcony as an accessible area rather than only a narrow landing surface." }, { title: "A usable outdoor space", description: "The solution needed to respect the everyday purpose of the balcony." }],
    solution: [{ title: "Use a barrier approach", description: "Netting can be the relevant direction when the issue involves access across an opening." }, { title: "Start from the details", description: "Photos, balcony configuration, and property context inform a useful quote conversation." }],
    results: ["A more clearly protected balcony opening", "A project example connected to the relevant service page", "A local path back to Vancouver quote requests"], relatedServiceSlugs: ["balcony-bird-netting", "pigeon-dropping-cleaning"],
  },
  {
    slug: "roofline-bird-spike-project", title: "Roofline bird-spike project", routeHref: "/projects/roofline-bird-spike-project", location: "Richmond, BC", relatedCitySlug: "richmond",
    summary: "A roofline bird-spike example for properties dealing with repeat roosting on a narrow exterior landing edge.", tags: ["Bird spikes", "Roofline"],
    image: { src: "/images/pigeon-spike-roofline-focused.jpg", alt: "Bird spikes along a roofline to deter repeat roosting", kind: "after" },
    gallery: [{ src: "/images/pigeon-spike-roofline-focused.jpg", alt: "Bird spike installation along a roofline", caption: "Existing project image showing spikes on a roofline landing edge.", kind: "after" }, { src: "/images/pigeon-spikes-close-up-installation.jpg", alt: "Close-up of a bird-spike installation", caption: "Close detail of a surface-based bird deterrent.", kind: "detail" }],
    seo: { title: "Richmond Roofline Bird Spike Project | Bird Control BC", description: "A Richmond roofline bird-spike project example linked to Bird Control BC bird-spike installation services." },
    hero: { eyebrow: "Project example", title: "Addressing repeat roosting on a roofline.", description: "This example focuses on a defined landing surface where a surface-based deterrent may fit better than a full enclosure." },
    overview: "Bird spikes are intended for particular ledges, edges, signs, and rooflines where repeat perching is the central problem.", scope: ["Identify the repeat landing edge", "Use a surface-based deterrent approach", "Keep the project linked to the relevant service and city pages"],
    challenges: [{ title: "A narrow problem surface", description: "The issue was concentrated along a roofline rather than throughout an enclosed space." }, { title: "Repeat bird activity", description: "The landing surface needed a practical way to become less attractive for roosting." }],
    solution: [{ title: "Match the deterrent to the surface", description: "The example supports a spike-based approach for a defined exterior edge." }, { title: "Document the visible condition", description: "A few clear photos make it easier to discuss the actual scope and access." }],
    results: ["A roofline example for surface-based bird deterrence", "A linked path to spike installation details", "A local context for Richmond property requests"], relatedServiceSlugs: ["bird-spike-installation", "bird-deterrents", "commercial-bird-control"],
  },
  {
    slug: "burnaby-cleanup-project", title: "Balcony pigeon-dropping cleanup project", routeHref: "/projects/burnaby-cleanup-project", location: "Burnaby, BC", relatedCitySlug: "burnaby",
    summary: "A balcony cleanup example illustrating the reset work that can be considered before a longer-term bird-control step.", tags: ["Cleanup", "Balcony"],
    image: { src: "/images/balcony-cleaning-finished-space.jpg", alt: "Clean balcony after pigeon-dropping cleanup", kind: "after" },
    gallery: [{ src: "/images/balcony-cleaning-finished-space.jpg", alt: "Finished balcony after cleanup", caption: "Existing project image representing a cleaner finished balcony condition.", kind: "after" }, { src: "/images/pigeon-proof-balcony-before-after-focused.jpg", alt: "Bird-proofed balcony detail", caption: "A related reference for protection following a reset of the space.", kind: "detail" }],
    seo: { title: "Burnaby Pigeon Dropping Cleanup Project | Bird Control BC", description: "A Burnaby balcony pigeon-dropping cleanup project example linked to Bird Control BC cleanup and bird-control services." },
    hero: { eyebrow: "Project example", title: "Resetting a balcony before the next step.", description: "Cleanup can be part of restoring a space before a deterrent or netting solution is considered." },
    overview: "When droppings or nesting material have accumulated, the right starting point may be to reset the balcony and then review what will help prevent repeat activity.", scope: ["Review the affected balcony condition", "Plan cleanup around the visible issue", "Connect the next protection step to the actual source of activity"],
    challenges: [{ title: "A less usable balcony", description: "Accumulated material can make the outdoor space harder to enjoy and maintain." }, { title: "Preventing repetition", description: "Cleaning alone may not address the route or surface birds continue to use." }],
    solution: [{ title: "Start with cleanup", description: "The example supports a cleanup-first conversation where the existing condition needs attention." }, { title: "Plan the next protection step", description: "Netting or a deterrent may be worth discussing after the area is reset." }],
    results: ["A cleaner starting condition", "A project example that keeps cleanup connected to prevention", "A local link path for Burnaby requests"], relatedServiceSlugs: ["pigeon-dropping-cleaning", "balcony-bird-netting", "strata-bird-control"],
  },
];

export function getProjectBySlug(slug: string) { return galleryProjects.find((project) => project.slug === slug); }
export function getProjectHref(project: Project) { return project.routeHref; }
export function getProjectsBySlugs(slugs: string[]) { return slugs.map(getProjectBySlug).filter((project): project is Project => Boolean(project)); }
