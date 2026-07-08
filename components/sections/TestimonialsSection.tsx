import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types/business";

type TestimonialsSectionProps = {
  items: Testimonial[];
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  items,
  title = "Testimonials module ready for verified customer proof.",
  description = "These cards intentionally use placeholder content until real approved testimonials or Google reviews are available for publication.",
}: TestimonialsSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="section-wrap bg-[linear-gradient(180deg,rgba(248,247,239,0.72)_0%,rgba(255,255,255,0.98)_100%)]">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={title}
            description={description}
            align="center"
          />
        </div>
        <div className="section-gap section-grid-balanced md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}
            >
              <TestimonialCard testimonial={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
