import type { ReviewHighlight, Testimonial, TrustBadge } from "@/types/business";

export const trustBadges: TrustBadge[] = [
  {
    label: "Photo-led quotes",
    detail: "Share the problem area before investing time in a long first call.",
  },
  {
    label: "Practical scope",
    detail: "Recommendations are based on the surface, access, and how the property is used.",
  },
  {
    label: "Homes to strata",
    detail: "Balconies, rooflines, entries, storefronts, and shared property edges.",
  },
  {
    label: "Lower Mainland",
    detail: "Vancouver, the North Shore, Burnaby, Richmond, Coquitlam, and Surrey.",
  },
];

export const reviewHighlights: ReviewHighlight[] = [
  {
    label: "Reviews",
    value: "Coming soon",
    detail: "Verified public reviews will be added after the new business profile is live.",
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
    id: "review-placeholder",
    name: "Reviews coming soon",
    role: "Verified customer feedback will be published here",
    quote: "This area is intentionally reserved for approved, verifiable client feedback.",
    source: "Placeholder",
    placeholder: true,
  },
];
