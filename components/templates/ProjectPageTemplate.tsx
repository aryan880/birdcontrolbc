import { Container } from "@/components/layout/Container";
import { InfoCards } from "@/components/sections/InfoCards";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProjectVideoGallery } from "@/components/sections/ProjectVideoGallery";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { ProjectSchema } from "@/lib/schema/project";
import { getServicesBySlugs } from "@/content/services";
import { getCityBySlug } from "@/content/cities";
import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

type ProjectPageTemplateProps = {
  project: Project;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const relatedServices = getServicesBySlugs(project.relatedServiceSlugs);
  const relatedCity = getCityBySlug(project.relatedCitySlug);
  const hasGallery = project.gallery.length > 0;
  const hasVideos = Boolean(project.videos?.length);
  const hasChallenges = project.challenges.length > 0;
  const hasSolutions = project.solution.length > 0;
  const hasResults = project.results.length > 0;

  return (
    <>
      <ProjectSchema project={project} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Projects", url: `${siteConfig.url}/projects` },
          { name: project.title, url: `${siteConfig.url}${project.routeHref}` },
        ]}
      />

      <PageHero
        eyebrow={project.hero.eyebrow}
        title={project.hero.title}
        description={project.hero.description}
        image={project.image}
        actions={[
          { href: "/contact", label: siteConfig.ctaLabels.primary, variant: "primary" },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        note={{
          eyebrow: project.location,
          body: "Real job photography documents the property condition, preparation, and installation details without unsupported performance claims.",
        }}
      />

      <section className="section-wrap">
        <Container className="split-section lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div data-reveal>
            <SectionHeading
              eyebrow="Project Overview"
              title={project.title}
              description={project.overview}
            />
            <div className="section-gap section-surface p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
                Scope
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {project.scope.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          {hasGallery ? (
            <ProjectGallery images={project.gallery} />
          ) : null}
        </Container>
      </section>

      {hasVideos ? (
        <section className="section-wrap-tight bg-brand-mist/55">
          <Container className="split-section lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div data-reveal>
              <SectionHeading
                eyebrow="On Site"
                title="A short view of the installation area."
                description="The clip is compressed for fast playback and shows the real balcony opening and netting layout during the job."
              />
            </div>
            <ProjectVideoGallery videos={project.videos ?? []} />
          </Container>
        </section>
      ) : null}

      {hasChallenges || hasSolutions ? (
        <section className="section-wrap bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
          <Container className="split-section lg:grid-cols-2">
            {hasChallenges ? (
              <div>
                <div data-reveal>
                  <SectionHeading
                    eyebrow="Challenges"
                    title="What kind of property problem this project reflects."
                    description="The project pages stay focused on the real issue pattern, not unsupported metrics or exaggerated claims."
                  />
                </div>
                <div className="section-gap">
                  <InfoCards items={project.challenges} columns="2" />
                </div>
              </div>
            ) : null}
            {hasSolutions ? (
              <div>
                <div data-reveal>
                  <SectionHeading
                    eyebrow="Solution"
                    title="How the bird-proofing approach was framed."
                    description="The recommendations stay grounded in the surfaces, openings, and usability concerns shown in the project imagery."
                  />
                </div>
                <div className="section-gap">
                  <InfoCards items={project.solution} columns="2" />
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {hasResults ? (
        <section className="section-wrap">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="Results"
                title="What a better property outcome can look like."
                description="The results stay qualitative and grounded in what the project imagery can genuinely support."
                align="center"
              />
            </div>
            <div className="section-gap section-grid-balanced md:grid-cols-3">
              {project.results.map((result, index) => (
                <article
                  key={result}
                  data-reveal
                  className="surface-card rounded-[1.7rem] p-6"
                  style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
                    Result {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{result}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedServices.length ? (
        <section id="related-services" className="section-wrap scroll-mt-28 bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="Related Services"
                title="Bird-proofing services related to this type of project."
                description="These internal links help the gallery support search intent and quotes without becoming a dead-end."
                align="center"
              />
            </div>
            <div className="section-gap">
              <ServiceLinksGrid services={relatedServices} />
            </div>
          </Container>
        </section>
      ) : null}

      {relatedCity ? (
        <section className="section-wrap-tight">
          <Container>
            <div className="section-surface grid gap-5 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">Related service area</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-brand-navy">Bird control in {relatedCity.name}.</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-brand-slate">See the local property context and linked services for this project area.</p>
              </div>
              <a className="inline-flex items-center justify-center rounded-2xl border border-brand-line bg-brand-mist px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-limeSoft" href={relatedCity.routeHref}>View {relatedCity.name} <span aria-hidden="true" className="ml-2">→</span></a>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-wrap">
        <Container>
          <QuoteBand
            eyebrow="Project CTA"
            title="Have a similar bird or balcony issue?"
            description="Start with the quote form if you want the property details organized first, or call now if you already know the issue and want to move the conversation forward."
            relatedLinks={relatedServices.map((service) => ({
              href: service.routeHref ?? service.href,
              label: service.shortLabel ?? service.name,
            }))}
          />
        </Container>
      </section>
    </>
  );
}
