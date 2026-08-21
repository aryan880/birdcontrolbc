import type { FAQ } from "@/types/faq";
import type { ContentPoint, ContentStep, MediaAsset, SeoFields } from "@/types/content";

export type ServiceBenefit = ContentPoint;
export type ServiceProcessStep = ContentStep;
export type ServiceSectionPoint = ContentPoint;

export type Service = {
  slug: string;
  name: string;
  href: string;
  routeHref?: string;
  routeEnabled?: boolean;
  summary: string;
  shortLabel?: string;
  image: MediaAsset;
  seo?: SeoFields;
  hero?: {
    eyebrow: string;
    title: string;
    description: string;
    supportingPoints?: string[];
  };
  benefits?: ServiceBenefit[];
  problem?: {
    eyebrow: string;
    title: string;
    description: string;
    points: ServiceSectionPoint[];
  };
  process?: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServiceProcessStep[];
  };
  featuredProjectSlug?: string;
  featuredCitySlugs?: string[];
  relatedServiceSlugs?: string[];
  relatedResourceSlugs?: string[];
  whyChoose?: {
    eyebrow: string;
    title: string;
    description: string;
    points: ServiceSectionPoint[];
  };
  quoteCardNote?: string;
  faqs?: FAQ[];
};
