import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPageTemplate } from "@/components/templates/ProjectPageTemplate";
import { galleryProjects, getProjectBySlug } from "@/content/projects";
import { buildMetadata } from "@/lib/seo/metadata";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleryProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: project.routeHref,
    image: project.image.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageTemplate project={project} />;
}
