import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="section-wrap">
      <Container>
        <div className="section-surface panel-sheen overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-brand-navy via-brand-blue to-[#0d4058] px-6 py-12 text-white shadow-panel sm:px-10 sm:py-16">
          <p className="eyebrow-pill-dark">404</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            That page is not available right now.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            The page may have moved during the migration. You can go back to the homepage,
            browse services, or head straight to the quote page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary" className="sm:min-w-[180px]">
              Back Home
            </ButtonLink>
            <ButtonLink href="/services" variant="light" className="sm:min-w-[180px]">
              View Services
            </ButtonLink>
            <ButtonLink href="/contact" variant="light" className="sm:min-w-[200px]">
              Send Photos for a Free Quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
