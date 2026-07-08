import type { MetadataRoute } from "next";

import { cities } from "@/content/cities";
import { galleryProjects } from "@/content/projects";
import { getPublishedServices } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes = [
    "/",
    "/services",
    "/service-areas",
    "/projects",
    "/contact",
  ];

  return [
    ...baseRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...getPublishedServices().map((service) => ({
      url: `${siteConfig.url}${service.routeHref}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...cities.map((city) => ({
      url: `${siteConfig.url}${city.routeHref}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...galleryProjects.map((project) => ({
      url: `${siteConfig.url}${project.routeHref}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
