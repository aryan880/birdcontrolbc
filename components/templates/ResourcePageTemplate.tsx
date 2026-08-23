import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleSchema } from "@/lib/schema/article";
import { BreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { siteConfig } from "@/content/site";
import type { Resource } from "@/types/resource";

type ResourcePageTemplateProps = {
  resource: Resource;
};

export function ResourcePageTemplate({ resource }: ResourcePageTemplateProps) {
  return (
    <>
      <ArticleSchema resource={resource} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Resources", url: `${siteConfig.url}/resources` },
          { name: resource.title, url: `${siteConfig.url}${resource.routeHref}` },
        ]}
      />

      <header className="border-b border-brand-line bg-brand-cream py-8 sm:py-12 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: resource.breadcrumbLabel },
            ]}
          />
          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow-pill">{resource.eyebrow}</p>
              <h1 className="font-display mt-6 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-brand-navy sm:text-6xl lg:text-7xl">
                {resource.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-slate sm:text-lg">
                {resource.excerpt}
              </p>
            </div>
            <div className="relative min-h-[340px] overflow-hidden bg-brand-mist sm:min-h-[430px]">
              <Image
                src={resource.image.src}
                alt={resource.image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </Container>
      </header>

      <section aria-label="Article content" className="section-wrap bg-white">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <article className="max-w-3xl">
            <p className="border-l-2 border-brand-limeDark pl-5 text-sm leading-7 text-brand-slate">
              This guide provides general property-care information, not medical advice. Contact a healthcare professional or public-health authority for personal health concerns.
            </p>
            <div className="mt-12 space-y-14">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.025em] text-brand-navy sm:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-brand-slate">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.points?.length ? (
                    <ul className="mt-7 space-y-3 border-y border-brand-navy/15 py-5 text-sm leading-7 text-brand-charcoal">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-brand-limeDark" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="self-start border-t border-brand-navy/20 pt-6 lg:sticky lg:top-28">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-limeDark">Official sources</h2>
            <ul className="mt-5 space-y-5">
              {resource.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block text-sm leading-6 text-brand-slate"
                  >
                    <span className="block font-semibold text-brand-navy group-hover:text-brand-limeDark">
                      {source.organization}
                    </span>
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-brand-navy/15 pt-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-limeDark">Related pages</h2>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-brand-navy">
                {resource.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-brand-limeDark">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="section-wrap-tight bg-brand-cream">
        <Container>
          <QuoteBand
            title="Not sure how serious the buildup is?"
            description="Send wide and close photos of the affected area. We can review the visible property condition and the route pigeons are using before discussing a scope."
            relatedLinks={resource.relatedLinks.slice(0, 2)}
          />
        </Container>
      </section>
    </>
  );
}
