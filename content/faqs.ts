import type { FAQ } from "@/types/faq";

export const homeFaqs: FAQ[] = [
  { id: "spikes", question: "When are bird spikes the right fit?", answer: "Bird spikes are generally suited to defined landing surfaces such as ledges, signs, beams, and roofline edges. Photos help distinguish those cases from a balcony-access issue." },
  { id: "netting", question: "When is balcony bird netting the better option?", answer: "Netting is usually the more relevant route when birds can enter and use the balcony itself rather than only land on one edge." },
  { id: "cleanup", question: "Can pigeon-dropping cleanup be part of the request?", answer: "Yes. Include wide and close photos of the existing condition. Dry or accumulated droppings can create dust when disturbed, so a larger buildup should be assessed rather than treated like ordinary household dirt." },
  { id: "photos", question: "What photos should I send?", answer: "Include one wider image showing the area, a closer view of the surface or opening birds use, and any access detail that may be relevant." },
  { id: "property-types", question: "Do you work with strata and commercial properties?", answer: "The site includes dedicated strata and commercial service paths. Add the property type and any coordination notes when sending the first request." },
  { id: "locations", question: "Which areas does Bird Control BC serve?", answer: "Bird Control BC serves Vancouver and key Lower Mainland areas, including Burnaby, Richmond, North Vancouver, West Vancouver, Coquitlam, and Surrey." },
];

export const trustHighlights = [
  { title: "Send photos", description: "Show the property issue before spending time on a long first call." },
  { title: "Property-led scope", description: "The starting point is the surface, access, and purpose of the space." },
  { title: "Lower Mainland", description: "Vancouver and active coverage across key nearby service areas." },
  { title: "Homes to commercial", description: "Balconies, strata properties, storefronts, rooflines, and shared exteriors." },
];

export const processSteps = [
  { title: "Send photos", description: "Share the affected balcony, ledge, roofline, entry, or building edge." },
  { title: "Add property context", description: "Include the city, property type, and any notes about access or timing." },
  { title: "Get a clear next step", description: "The quote discussion can start with a more useful understanding of the work area." },
];
