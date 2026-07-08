import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities, getCityBySlug } from "@/content/cities";
import { buildMetadata } from "@/lib/seo/metadata";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return buildMetadata({
    title: city.seo.title,
    description: city.seo.description,
    path: city.routeHref,
    image: city.image.src,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return <CityPageTemplate city={city} />;
}
