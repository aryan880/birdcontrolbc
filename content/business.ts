import type { ReviewHighlight, Testimonial, TrustBadge } from "@/types/business";

export const trustBadges: TrustBadge[] = [
  {
    label: "Photo-first quotes",
    detail: "Start with a few clear photos and the property context so the quote conversation begins faster.",
  },
  {
    label: "Humane recommendations",
    detail: "Bird netting, spikes, cleaning, and exclusion-first planning matched to the actual problem area.",
  },
  {
    label: "Residential to commercial",
    detail: "Condo balconies, homes, strata properties, storefronts, rooflines, and visible building edges.",
  },
  {
    label: "Metro Vancouver coverage",
    detail: "Service area messaging stays aligned with the cities already represented on the site.",
  },
];

export const reviewHighlights: ReviewHighlight[] = [
  {
    label: "Google Reviews",
    value: "Ready to connect",
    detail: "Replace with the verified rating, review count, and review URL once the live review source is approved.",
    placeholder: true,
  },
  {
    label: "Trust badges",
    value: "Replaceable content",
    detail: "This module is ready for verified certifications, partner logos, or approved platform badges later.",
    placeholder: true,
  },
];

export const placeholderTestimonials: Testimonial[] = [
  {
    id: "testimonial-slot-1",
    name: "Verified customer quote",
    role: "Replace with a real residential or strata review",
    quote: "Add a real customer testimonial here once approved for public use.",
    source: "Placeholder only",
    placeholder: true,
  },
  {
    id: "testimonial-slot-2",
    name: "Verified commercial quote",
    role: "Replace with a real commercial or property-management review",
    quote: "Use this slot for a verified customer quote that supports the commercial lead path.",
    source: "Placeholder only",
    placeholder: true,
  },
];
