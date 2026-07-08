import type { FAQ } from "@/types/faq";
import type { ContentPoint, MediaAsset, SeoFields } from "@/types/content";

export type City = {
  slug: string;
  name: string;
  routeHref: string;
  summary: string;
  image: MediaAsset;
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    supportingPoints: string[];
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  propertyFocus: ContentPoint[];
  commonIssues: ContentPoint[];
  serviceFit: ContentPoint[];
  relatedServiceSlugs: string[];
  featuredProjectSlugs: string[];
  faqs: FAQ[];
};
