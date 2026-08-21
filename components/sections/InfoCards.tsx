import type { ContentPoint } from "@/types/content";

type InfoCardsProps = {
  items: ContentPoint[];
  indexLabel?: string;
  theme?: "light" | "dark";
  columns?: "2" | "3" | "4";
};

const columnMap = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "lg:grid-cols-4",
} as const;

export function InfoCards({
  items,
  indexLabel,
  theme = "light",
  columns = "3",
}: InfoCardsProps) {
  return (
    <div className={`section-grid-balanced items-stretch ${columnMap[columns]}`}>
      {items.map((item, index) => (
        <article
          key={item.title}
          data-reveal
          className={
            theme === "dark"
              ? "glass-panel flex flex-col p-6 text-white transition duration-300 hover:-translate-y-1 hover:border-brand-lime/35 hover:bg-white/15"
              : "surface-card flex flex-col p-6"
          }
          style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
        >
          {indexLabel ? (
            <p
              className={
                theme === "dark"
                  ? "text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-limeSoft"
                  : "text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark"
              }
            >
              {indexLabel} {String(index + 1).padStart(2, "0")}
            </p>
          ) : null}
          <h3
            className={
              theme === "dark"
                ? "mt-3 text-xl font-semibold tracking-[-0.02em] text-white"
                : "mt-3 text-xl font-semibold tracking-[-0.02em] text-brand-navy"
            }
          >
            {item.title}
          </h3>
          <p className={theme === "dark" ? "mt-3 text-sm leading-7 text-slate-200" : "mt-3 text-sm leading-7 text-brand-slate"}>
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
