import type { TrustBadge } from "@/types/business";

type TrustBadgeRowProps = {
  items: TrustBadge[];
  theme?: "light" | "dark";
};

export function TrustBadgeRow({ items, theme = "light" }: TrustBadgeRowProps) {
  const surfaceClass = theme === "dark" ? "border-white/15 text-slate-100" : "border-brand-navy/15 text-brand-slate";
  const headingClass = theme === "dark" ? "text-white" : "text-brand-navy";

  return (
    <div className="grid border-y border-brand-navy/15 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={item.label}
          data-reveal
          className={`reveal-load border-b px-5 py-6 md:border-r xl:border-b-0 ${surfaceClass}`}
          style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
        >
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-limeDark" />
            <div>
              <h2 className={`text-sm font-semibold tracking-[-0.01em] ${headingClass}`}>{item.label}</h2>
              <p className="mt-1.5 text-sm leading-6">{item.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
