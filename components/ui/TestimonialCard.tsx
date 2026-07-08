import type { Testimonial } from "@/types/business";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="surface-card rounded-[1.7rem] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
        {testimonial.source}
      </p>
      <p className="mt-4 text-base leading-7 text-brand-slate">
        “{testimonial.quote}”
      </p>
      <div className="mt-5 border-t border-brand-line/80 pt-4">
        <p className="font-semibold text-brand-navy">{testimonial.name}</p>
        <p className="mt-1 text-sm text-brand-slate">{testimonial.role}</p>
      </div>
    </article>
  );
}
