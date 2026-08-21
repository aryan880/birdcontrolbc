import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={project.routeHref}
      data-reveal
      className="surface-card group grid overflow-hidden md:grid-cols-[1fr_1fr]"
      style={{ ["--reveal-delay" as string]: `${index * 55}ms` }}
    >
      <div className="relative min-h-[250px] overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
          {project.tags.join(" • ")}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-brand-navy">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-brand-slate">
          {project.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition group-hover:text-brand-limeDark sm:mt-auto">
          View project
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
