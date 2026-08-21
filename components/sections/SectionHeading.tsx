import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          theme === "light" && "eyebrow-pill",
          theme === "dark" && "eyebrow-pill-dark"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl",
          theme === "light" && "text-brand-navy",
          theme === "dark" && "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 sm:text-lg",
            theme === "light" && "text-brand-slate",
            theme === "dark" && "text-slate-200"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
