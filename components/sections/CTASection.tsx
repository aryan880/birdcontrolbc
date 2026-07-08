import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function CTASection() {
  return (
    <section className="pb-16 pt-8 sm:pb-20">
      <Container>
        <div
          data-reveal
          className="panel-sheen overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-brand-navy via-brand-blue to-[#0d4058] px-6 py-10 text-white shadow-panel sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="max-w-3xl">
            <p className="eyebrow-pill-dark">
              Fast Local Quotes
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              A cleaner, faster first step for people who want the issue handled properly.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
              Start with the quote form if you want the details organized first, or call now if speaking directly is faster for the property issue in front of you.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink href="/contact" variant="primary" className="sm:min-w-[220px]">
              {siteConfig.ctaLabels.primary}
            </ButtonLink>
            <ButtonLink href={siteConfig.telHref} variant="light" className="sm:min-w-[200px]">
              {siteConfig.ctaLabels.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
