import type { MediaAsset, SeoFields } from "@/types/content";

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type ResourceSource = {
  label: string;
  href: string;
  organization: string;
};

export type Resource = {
  slug: string;
  routeHref: string;
  title: string;
  shortTitle: string;
  breadcrumbLabel: string;
  eyebrow: string;
  excerpt: string;
  image: MediaAsset;
  seo: SeoFields;
  sections: ResourceSection[];
  sources: ResourceSource[];
  relatedLinks: Array<{ href: string; label: string }>;
};
