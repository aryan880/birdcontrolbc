import { Container } from "@/components/layout/Container";
import { CityLinksGrid } from "@/components/sections/CityLinksGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { InfoCards } from "@/components/sections/InfoCards";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { ResourceLinks } from "@/components/sections/ResourceLinks";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FAQPageSchema } from "@/lib/schema/faq";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { ServiceSchema } from "@/lib/schema/service";
import { getCitiesBySlugs } from "@/content/cities";
import { getProjectsBySlugs } from "@/content/projects";
import { getResourcesBySlugs } from "@/content/resources";
import { getServiceHref, getServicesBySlugs } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { Service } from "@/types/service";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  if (
    !service.routeHref ||
    !service.hero ||
    !service.benefits ||
    !service.problem ||
    !service.process ||
    !service.whyChoose ||
    !service.faqs
  ) {
    return null;
  }

  const relatedServices = service.relatedServiceSlugs
    ? getServicesBySlugs(service.relatedServiceSlugs)
    : [];
  const featuredProject = service.featuredProjectSlug
    ? getProjectsBySlugs([service.featuredProjectSlug])[0]
    : undefined;
  const featuredCities = service.featuredCitySlugs
    ? getCitiesBySlugs(service.featuredCitySlugs)
    : [];
  const relatedResources = service.relatedResourceSlugs
    ? getResourcesBySlugs(service.relatedResourceSlugs)
    : [];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];
  const hasBenefits = service.benefits.length > 0;
  const hasProblemPoints = service.problem.points.length > 0;
  const hasProcessSteps = service.process.steps.length > 0;
  const hasWhyChoosePoints = service.whyChoose.points.length > 0;
  const hasFaqs = service.faqs.length > 0;

  return (
    <>
      <ServiceSchema service={service} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url: `${siteConfig.url}${service.routeHref}` },
        ]}
      />
      <FAQPageSchema items={service.faqs} />

      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        description={service.hero.description}
        image={service.image}
        actions={[
          {
            href: "/contact#quote",
            label: siteConfig.ctaLabels.primary,
            variant: "primary",
          },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={service.hero.supportingPoints}
        breadcrumbs={breadcrumbs}
        note={{
          eyebrow: "Fast local quote path",
          body:
            service.quoteCardNote ??
            "Text photos of the problem area and the property type to start with the details that matter most.",
        }}
      />

      {hasBenefits ? (
        <section className="section-wrap-tight bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
          <Container>
            <InfoCards items={service.benefits} indexLabel="Benefit" columns="3" />
          </Container>
        </section>
      ) : null}

      {hasProblemPoints ? (
        <section className="section-wrap">
          <Container className="split-section lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div data-reveal>
              <SectionHeading
                eyebrow={service.problem.eyebrow}
                title={service.problem.title}
                description={service.problem.description}
              />
            </div>
            <InfoCards items={service.problem.points} indexLabel="Problem" columns="3" />
          </Container>
        </section>
      ) : null}

      {hasProcessSteps ? (
        <section className="section-wrap bg-brand-navy text-white">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow={service.process.eyebrow}
                title={service.process.title}
                description={service.process.description}
                theme="dark"
              />
            </div>
            <div className="section-gap">
              <InfoCards items={service.process.steps} indexLabel="Step" theme="dark" columns="4" />
            </div>
          </Container>
        </section>
      ) : null}

      {featuredProject ? <ProjectShowcase project={featuredProject} /> : null}

      {hasWhyChoosePoints ? (
        <section className="section-wrap">
          <Container className="split-section lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div data-reveal>
              <SectionHeading
                eyebrow={service.whyChoose.eyebrow}
                title={service.whyChoose.title}
                description={service.whyChoose.description}
              />
            </div>
            <InfoCards items={service.whyChoose.points} columns="3" />
          </Container>
        </section>
      ) : null}

      {featuredCities.length ? (
        <section className="section-wrap-tight bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="Service Areas"
                title={`${service.shortLabel ?? service.name} across Vancouver and the Lower Mainland.`}
                description="Use these city pages to move between the service intent, local context, project examples, and the quote path more easily."
                align="center"
              />
            </div>
            <div className="section-gap">
              <CityLinksGrid cities={featuredCities} />
            </div>
          </Container>
        </section>
      ) : null}

      {relatedResources.length ? (
        <section className="section-wrap-tight bg-white">
          <Container className="split-section lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeading
              eyebrow="Property care guides"
              title={`Read before planning ${service.shortLabel?.toLowerCase() ?? service.name.toLowerCase()}.`}
              description="Source-backed guidance that explains the property condition without exaggerating health claims or prescribing a one-size-fits-all response."
            />
            <ResourceLinks resources={relatedResources} />
          </Container>
        </section>
      ) : null}

      {hasFaqs ? (
        <section id="faq" className="section-wrap-tight scroll-mt-28">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="FAQ"
                title={`${service.shortLabel ?? service.name} FAQ for Vancouver and Lower Mainland quotes.`}
                description="These answers cover the questions people usually ask first before requesting a quote for this service."
                align="center"
              />
            </div>
            <div className="section-gap">
              <FAQAccordion items={service.faqs} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-wrap">
        <Container className="split-section lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <QuoteBand
            title={`Need a quote for ${service.shortLabel?.toLowerCase() ?? service.name.toLowerCase()}?`}
            description="Start with the quote form if you want the property details organized first, or call now if you already know the issue and want to talk through the next step."
            note={service.quoteCardNote}
            relatedLinks={relatedServices.map((relatedService) => ({
              href: getServiceHref(relatedService),
              label: relatedService.shortLabel ?? relatedService.name,
            }))}
          />
          <div data-reveal>
            <QuoteFormSection
              source={`service:${service.slug}`}
              defaultService={service.name}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
