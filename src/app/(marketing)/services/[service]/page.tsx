import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getPublishedServices, getServiceBySlug } from "@/content/services";
import { buildMetadata } from "@/lib/seo/metadata";

type ServicePageProps = {
  params: Promise<{
    service: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedServices().map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service?.routeEnabled || !service.routeHref || !service.seo) {
    notFound();
  }

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.routeHref,
    image: service.image.src,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service?.routeEnabled || !service.routeHref) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
