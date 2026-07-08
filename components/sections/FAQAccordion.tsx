import type { FAQ } from "@/types/faq";

type FAQAccordionProps = {
  items: FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      {items.map((item, index) => (
        <details
          key={item.id}
          data-reveal
          className="group rounded-[1.5rem] border border-brand-line/80 bg-white p-5 shadow-soft transition duration-300 hover:border-brand-lime/30 open:shadow-panel"
          style={{ ["--reveal-delay" as string]: `${index * 35}ms` }}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 pr-2 text-left text-lg font-semibold tracking-[-0.02em] text-brand-navy marker:content-none">
            <span className="inline-flex items-start gap-4">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-lime" />
              <span>{item.question}</span>
            </span>
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-limeDark transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
