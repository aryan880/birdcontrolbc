import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
}: BuildMetadataInput): Metadata {
  const ogImage = image ?? siteConfig.defaultOgImage;
  const normalizedTitle = title.replace(/\s*\|\s*Bird Control BC\s*$/i, "");

  return {
    title: normalizedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: normalizedTitle,
      description,
      url: path,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: normalizedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description,
      images: [ogImage],
    },
  };
}
