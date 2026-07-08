import type { ReviewHighlight } from "@/types/business";

type GoogleReviewsPanelProps = {
  items: ReviewHighlight[];
};

export function GoogleReviewsPanel({ items }: GoogleReviewsPanelProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="section-surface p-6 sm:p-8">
      <p className="eyebrow-pill">Google Reviews</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl">
        Review integration is ready for verified business proof.
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-slate sm:text-base">
        This panel is intentionally structured for a future Google review feed, rating summary, or approved screenshot-based review block without changing the current design system later.
      </p>
      <div className="section-gap section-grid-balanced md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={`${item.label}-${index}`}
            data-reveal
            className="rounded-[1.5rem] border border-brand-line/80 bg-brand-mist/45 p-5"
            style={{ ["--reveal-delay" as string]: `${index * 45}ms` }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
              {item.label}
            </p>
            <p className="mt-3 text-lg font-semibold text-brand-navy">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-brand-slate">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
