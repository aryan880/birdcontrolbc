import { Container } from "@/components/layout/Container";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { InfoCards } from "@/components/sections/InfoCards";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceLinksGrid } from "@/components/sections/ServiceLinksGrid";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { FAQPageSchema } from "@/lib/schema/faq";
import { LocalBusinessSchema } from "@/lib/schema/local-business";
import { getProjectsBySlugs } from "@/content/projects";
import { getServiceHref, getServicesBySlugs } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { City } from "@/types/city";

type CityPageTemplateProps = {
  city: City;
};

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const relatedServices = getServicesBySlugs(city.relatedServiceSlugs);
  const featuredProject = getProjectsBySlugs(city.featuredProjectSlugs).find(
    (project) => project.relatedCitySlug === city.slug,
  );
  const hasPropertyFocus = city.propertyFocus.length > 0;
  const hasCommonIssues = city.commonIssues.length > 0;
  const hasServiceFit = city.serviceFit.length > 0;
  const hasFaqs = city.faqs.length > 0;

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
          { name: city.name, url: `${siteConfig.url}${city.routeHref}` },
        ]}
      />
      <FAQPageSchema items={city.faqs} />

      <PageHero
        eyebrow={city.hero.eyebrow}
        title={city.hero.title}
        description={city.hero.description}
        image={city.image}
        actions={[
          {
            href: "/contact#quote",
            label: siteConfig.ctaLabels.primary,
            variant: "primary",
          },
          { href: siteConfig.telHref, label: siteConfig.ctaLabels.secondary, variant: "light" },
        ]}
        supportingPoints={city.hero.supportingPoints}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: city.name },
        ]}
        note={{
          eyebrow: `${city.name} quote path`,
          body: `Text photos of the balcony, ledge, roofline, or problem area in ${city.name} and mention whether the property is residential, strata, or commercial.`,
        }}
      />

      {hasPropertyFocus ? (
        <section className="section-wrap">
          <Container className="split-section lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div data-reveal>
              <SectionHeading
                eyebrow={city.intro.eyebrow}
                title={city.intro.title}
                description={city.intro.description}
              />
            </div>
            <InfoCards items={city.propertyFocus} columns="3" />
          </Container>
        </section>
      ) : null}

      {hasCommonIssues ? (
        <section className="section-wrap bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="Common Problems"
                title={`Common bird-control issues on ${city.name} properties.`}
                description="The right approach depends on whether birds are entering an opening, landing on a defined edge, or leaving contamination that needs cleanup."
                align="center"
              />
            </div>
            <div className="section-gap">
              <InfoCards items={city.commonIssues} indexLabel="Issue" columns="3" />
            </div>
          </Container>
        </section>
      ) : null}

      {relatedServices.length ? (
        <section id="city-services" className="section-wrap-tight scroll-mt-28">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="Best Fit Services"
                title={`Bird-proofing services people in ${city.name} often need first.`}
                description="Choose the service that most closely matches the affected surface and property type, then send photos for a property-specific quote."
                align="center"
              />
            </div>
            <div className="section-gap">
              <ServiceLinksGrid services={relatedServices} />
            </div>
          </Container>
        </section>
      ) : null}

      {featuredProject ? (
        <ProjectShowcase
          project={featuredProject}
          description={`A completed ${featuredProject.title.toLowerCase()} example from ${city.name}.`}
        />
      ) : null}

      {hasServiceFit ? (
        <section className="section-wrap">
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="How The Work Usually Fits"
                title={`Which service usually fits best in ${city.name}?`}
                description="Access, property use, contamination, and the surfaces birds are using determine the most suitable next step."
                align="center"
              />
            </div>
            <div className="section-gap">
              <InfoCards items={city.serviceFit} columns="3" />
            </div>
          </Container>
        </section>
      ) : null}

      {hasFaqs ? (
        <section
          id="faq"
          className="section-wrap-tight scroll-mt-28 bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]"
        >
          <Container>
            <div data-reveal>
              <SectionHeading
                eyebrow="FAQ"
                title={`${city.name} bird control FAQ.`}
                description="Short answers to the local quoting and service-fit questions people usually ask first."
                align="center"
              />
            </div>
            <div className="section-gap">
              <FAQAccordion items={city.faqs} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-wrap">
        <Container>
          <QuoteBand
            title={`Need a bird-proofing quote in ${city.name}?`}
            description="Use the quote form to organize the property details first, or call now if you already know the city and issue and want to move faster."
            relatedLinks={relatedServices.map((service) => ({
              href: getServiceHref(service),
              label: service.shortLabel ?? service.name,
            }))}
          />
        </Container>
      </section>
    </>
  );
}
