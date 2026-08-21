import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Project } from "@/types/project";

type BeforeAfterGalleryProps = {
  projects: Project[];
};

export function BeforeAfterGallery({ projects }: BeforeAfterGalleryProps) {
  const [featuredProject, ...secondaryProjects] = projects;
  const beforeImage =
    featuredProject.gallery.find((image) => image.src.includes("before-dropping-condition")) ??
    featuredProject.gallery.find((image) => image.kind === "before");
  // The project cover is the curated finished view; gallery "after" images may include installation progress.
  const afterImage = featuredProject.image;

  return (
    <section
      id="projects"
      className="bg-brand-navy py-16 text-white sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Recent Work"
          title="See the condition. Then see the work."
          description="The featured balcony project follows cleanup, preparation, and netting installation using photography and video from the actual job."
          theme="dark"
        />

        <div className="mt-12 grid gap-1 bg-white/10 md:grid-cols-2">
          {beforeImage ? (
            <figure className="group bg-brand-navy">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={beforeImage.src} alt={beforeImage.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
                <span className="absolute left-5 top-5 bg-brand-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy">Before</span>
              </div>
            </figure>
          ) : null}
          <figure className="group bg-brand-navy">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={afterImage.src} alt={afterImage.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
              <span className="absolute left-5 top-5 bg-brand-limeSoft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy">Installed</span>
            </div>
          </figure>
        </div>

        <div className="grid gap-8 border-b border-white/15 py-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Link
            href={featuredProject.routeHref}
            data-reveal
            data-before-after-ready="true"
            className="group max-w-3xl"
          >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-limeSoft">{featuredProject.location}</p>
              <h3 className="font-display mt-3 text-3xl font-medium tracking-[-0.025em] text-white sm:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {featuredProject.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-3 border-b border-brand-lime/60 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-white transition group-hover:border-brand-lime">
                View project details
                <span aria-hidden="true">→</span>
              </span>
          </Link>

          <div className="grid min-w-[18rem] gap-3">
            {secondaryProjects.map((project, index) => (
              <Link key={project.slug} href={project.routeHref} className="flex items-center justify-between gap-6 border-t border-white/15 py-4 text-sm text-slate-200 hover:text-white">
                <span>{project.title}</span><span aria-hidden="true" className="text-brand-limeSoft">0{index + 2} →</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
