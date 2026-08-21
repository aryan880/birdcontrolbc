import type { ContentPoint, MediaAsset, SeoFields } from "@/types/content";

export type ProjectVideo = {
  src: string;
  poster: string;
  title: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  routeHref: string;
  location: string;
  summary: string;
  tags: string[];
  image: MediaAsset;
  gallery: MediaAsset[];
  videos?: ProjectVideo[];
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  overview: string;
  scope: string[];
  challenges: ContentPoint[];
  solution: ContentPoint[];
  results: string[];
  relatedServiceSlugs: string[];
  relatedCitySlug: string;
};
