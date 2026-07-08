import { Container } from "@/components/layout/Container";
import { InfoCards } from "@/components/sections/InfoCards";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { ProjectSchema } from "@/lib/schema/project";
import { getServicesBySlugs } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

type ProjectPageTemplateProps = {
  project: Project;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const relatedServices = getServicesBySlugs(project.relatedServiceSlugs);
  const hasGallery = project.gallery.length > 0;
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
          body: "This page uses existing project imagery to show how the service can be applied on a real property without inventing unsupported results or metrics.",
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
