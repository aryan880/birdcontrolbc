import type { Project } from "@/types/project";

export const galleryProjects: Project[] = [
  {
    slug: "vancouver-balcony-netting-project", title: "Balcony cleanup and bird-netting installation", routeHref: "/projects/vancouver-balcony-netting-project", location: "Lower Mainland, BC", relatedCitySlug: "vancouver",
    summary: "Before-and-after job photography documenting the original balcony condition, cleanup, preparation, and a black bird-netting installation across the opening.", tags: ["Balcony netting", "Cleanup", "Residential"],
    image: { src: "/media/projects/lower-mainland-balcony-netting/project-hero.webp", alt: "Black bird netting installed across a Lower Mainland residential balcony opening", kind: "overview" },
    gallery: [
      { src: "/media/projects/lower-mainland-balcony-netting/before-open-balcony.webp", alt: "Open residential balcony before bird netting was installed", caption: "Before: the full balcony opening was accessible to birds, with no exclusion barrier across the exterior edge.", kind: "before" },
      { src: "/media/projects/lower-mainland-balcony-netting/before-dropping-condition-wide.webp", alt: "Balcony floor with pigeon droppings before cleanup and bird netting installation", caption: "Before cleanup: droppings and debris were spread across the balcony floor, particularly around the sheltered corners.", kind: "before" },
      { src: "/media/projects/lower-mainland-balcony-netting/before-dropping-detail.webp", alt: "Close view of pigeon droppings accumulated in a balcony corner before cleanup", caption: "Before cleanup: a closer view of the affected floor and corner where bird activity had concentrated.", kind: "before" },
      { src: "/media/projects/lower-mainland-balcony-netting/installation-overview.webp", alt: "Black bird netting fitted across a residential balcony opening", caption: "Installed: black netting spans the opening using ceiling anchors and floor-to-ceiling perimeter supports.", kind: "after" },
      { src: "/media/projects/lower-mainland-balcony-netting/netting-wide-view.webp", alt: "Installed bird netting spanning the balcony opening with the Lower Mainland skyline beyond", caption: "Installed: the netting follows the full opening while preserving daylight and the outward view.", kind: "after" },
      { src: "/media/projects/lower-mainland-balcony-netting/ceiling-fastener-detail.webp", alt: "Close view of bird-netting ceiling anchors and black mesh", caption: "Ceiling attachment points used to support the netting along the upper edge.", kind: "detail" },
      { src: "/media/projects/lower-mainland-balcony-netting/support-pole-detail.webp", alt: "Black support pole positioned between the balcony floor and ceiling", caption: "A floor-to-ceiling support pole used as part of the perimeter layout.", kind: "detail" },
      { src: "/media/projects/lower-mainland-balcony-netting/netting-anchor-detail.webp", alt: "Bird netting secured beside a black balcony support pole", caption: "A closer look at the mesh, support pole, and perimeter connection.", kind: "detail" },
    ],
    videos: [
      { src: "/media/projects/lower-mainland-balcony-netting/before-balcony-walkthrough.mp4", poster: "/media/projects/lower-mainland-balcony-netting/before-walkthrough-poster.webp", title: "Balcony before bird proofing", caption: "A walkthrough of the same open balcony before the exclusion system was installed. The clip is muted and compressed for the web." },
      { src: "/media/projects/lower-mainland-balcony-netting/netting-walkthrough.mp4", poster: "/media/projects/lower-mainland-balcony-netting/walkthrough-poster.webp", title: "Installed balcony netting", caption: "A short on-site view of the netting across the balcony opening. The clip is muted and compressed for the web." },
    ],
    seo: { title: "Balcony Bird Netting Before & After | Lower Mainland BC", description: "See real before-and-after photos of balcony cleanup, preparation, and bird-netting installation from a Lower Mainland residential project." },
    hero: { eyebrow: "Recent project", title: "Balcony cleanup and bird-netting installation.", description: "A real residential project with before-and-after media documenting the affected balcony, cleanup stage, and netting system across the opening." },
    overview: "This balcony required more than a deterrent on one narrow ledge. The work combined cleanup and preparation with a physical netting barrier across the open side of the balcony.",
    scope: ["Document and prepare the affected balcony", "Plan the netting around the full opening", "Fit support poles, ceiling anchors, and black mesh", "Check the perimeter and document the installation"],
    challenges: [{ title: "A full open boundary", description: "The property needed a barrier across the balcony opening rather than a deterrent limited to one landing surface." }, { title: "Cleanup before installation", description: "The balcony condition needed attention before the exclusion layout could be installed around the space." }],
    solution: [{ title: "Prepare the work area", description: "Cleanup and surface preparation created a clearer starting point for the installation." }, { title: "Build a perimeter system", description: "Black mesh, ceiling attachment points, and floor-to-ceiling supports formed the physical boundary shown in the project photos." }],
    results: ["The open side of the balcony was covered by a physical netting barrier", "The support and attachment details were fitted around the existing balcony geometry", "The same balcony was documented before cleanup and after the netting installation"], relatedServiceSlugs: ["balcony-bird-netting", "pigeon-dropping-cleaning", "strata-bird-control"],
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
