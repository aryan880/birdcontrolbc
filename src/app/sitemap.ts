import type { MetadataRoute } from "next";

import { cities } from "@/content/cities";
import { galleryProjects } from "@/content/projects";
import { resources } from "@/content/resources";
import { getPublishedServices } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "/",
    "/services",
    "/service-areas",
    "/projects",
    "/resources",
    "/about",
    "/contact",
    "/privacy",
  ];

  return [
    ...baseRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...getPublishedServices().map((service) => ({
      url: `${siteConfig.url}${service.routeHref}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...cities.map((city) => ({
      url: `${siteConfig.url}${city.routeHref}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...galleryProjects.map((project) => ({
      url: `${siteConfig.url}${project.routeHref}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...resources.map((resource) => ({
      url: `${siteConfig.url}${resource.routeHref}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
