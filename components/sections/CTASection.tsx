import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function CTASection() {
  return (
    <section className="bg-brand-soft py-16 sm:py-20">
      <Container>
        <div
          data-reveal
          className="border-y border-brand-navy/20 py-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:py-14"
        >
          <div className="max-w-3xl">
            <p className="eyebrow-pill">
              Start with the property details
            </p>
            <h2 className="font-display mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] text-brand-navy text-balance sm:text-6xl">
              Send photos or request a free inspection.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-slate sm:text-lg">
              A clear photo of the affected area, the city, and a short access note can make the first conversation more productive. You can also <a href={siteConfig.telHref} className="font-semibold text-brand-navy underline decoration-brand-limeDark/50 underline-offset-4">call</a> or <a href={siteConfig.smsHref} className="font-semibold text-brand-navy underline decoration-brand-limeDark/50 underline-offset-4">text us</a> for a free quote.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink href="/contact" variant="primary" className="sm:min-w-[220px]">
              {siteConfig.ctaLabels.primary}
            </ButtonLink>
            <ButtonLink href={siteConfig.telHref} variant="outline" className="sm:min-w-[160px]">
              {siteConfig.ctaLabels.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
