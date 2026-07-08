import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Project } from "@/types/project";

type BeforeAfterGalleryProps = {
  projects: Project[];
};

export function BeforeAfterGallery({ projects }: BeforeAfterGalleryProps) {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section
      id="projects"
      className="bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.96)_100%)] py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Project Proof"
          title="Visual proof that feels more like a finished project than a generic contractor gallery."
          description="The section now uses the existing imagery with more editorial hierarchy, stronger before-and-after framing, and cleaner card treatment while staying grounded in the real assets already in the project."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
          <Link
            href={featuredProject.routeHref}
            data-reveal
            data-before-after-ready="true"
            className="surface-card group overflow-hidden rounded-[2rem]"
          >
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[460px]">
              <Image
                src={featuredProject.image.src}
                alt={featuredProject.image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-brand-navy/15 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Featured transformation
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                    Before / after style proof
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Existing image asset used as the strongest conversion proof on the page, with structure ready for future before-and-after enhancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-limeDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-brand-slate sm:text-base">
                {featuredProject.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition group-hover:text-brand-limeDark">
                View project details
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <div className="grid gap-6">
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
