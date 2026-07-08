import type { TrustBadge } from "@/types/business";

type TrustBadgeRowProps = {
  items: TrustBadge[];
  theme?: "light" | "dark";
};

export function TrustBadgeRow({ items, theme = "light" }: TrustBadgeRowProps) {
  const surfaceClass =
    theme === "dark"
      ? "border-white/10 bg-white/8 text-slate-100"
      : "border-brand-line/70 bg-white/72 text-brand-slate";
  const headingClass = theme === "dark" ? "text-white" : "text-brand-navy";
  const accentClass = theme === "dark" ? "bg-brand-lime/18 text-brand-limeSoft" : "bg-brand-mist text-brand-limeDark";

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={item.label}
          data-reveal
          className={`rounded-[1.35rem] border px-4 py-4 shadow-[0_10px_28px_rgba(7,23,44,0.05)] ${surfaceClass}`}
          style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${accentClass}`}
            >
              ✓
            </span>
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
