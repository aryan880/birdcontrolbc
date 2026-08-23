import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  headingLevel = "h2",
}: SectionHeadingProps) {
  const Heading = headingLevel;
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
      <Heading
        className={cn(
          "font-display mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl",
          theme === "light" && "text-brand-navy",
          theme === "dark" && "text-white"
        )}
      >
        {title}
      </Heading>
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
