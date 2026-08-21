import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1E7",
    theme_color: "#102F28",
    icons: [
      {
        src: siteConfig.brandIcon,
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: siteConfig.brandIcon,
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
