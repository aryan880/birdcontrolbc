import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourcePageTemplate } from "@/components/templates/ResourcePageTemplate";
import { getResourceBySlug, resources } from "@/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return buildMetadata({
    title: resource.seo.title,
    description: resource.seo.description,
    path: resource.routeHref,
    image: resource.image.src,
  });
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return <ResourcePageTemplate resource={resource} />;
}
