import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Project } from "@/types/project";

type ProjectShowcaseProps = {
  project: Project;
  eyebrow?: string;
  description?: string;
};

export function ProjectShowcase({
  project,
  eyebrow = "Project Proof",
  description,
}: ProjectShowcaseProps) {
  return (
    <section className="section-wrap bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,248,245,0.82)_100%)]">
      <Container className="split-section lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <Link
          href={project.routeHref}
          data-reveal
          className="surface-card group relative overflow-hidden"
        >
          <div className="relative min-h-[320px] sm:min-h-[440px]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-brand-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 border-t border-r border-white/10 bg-brand-navy/85 px-5 py-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeSoft">
                Project teaser
              </p>
              <p className="mt-1 text-sm text-white">View the full project page and related services.</p>
            </div>
          </div>
        </Link>

        <div data-reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={project.title}
            description={description ?? project.summary}
          />
          <div className="section-gap flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border-l-2 border-brand-lime bg-brand-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-limeDark"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="section-gap section-surface p-6">
            <p className="text-sm leading-7 text-brand-slate">{project.overview}</p>
            <Link
              href={project.routeHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            >
              Open project case study
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
