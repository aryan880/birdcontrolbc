import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import type { MediaAsset } from "@/types/content";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "light" | "dark" | "outline";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: MediaAsset;
  actions: HeroAction[];
  supportingPoints?: string[];
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  note?: {
    eyebrow: string;
    body: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
  supportingPoints,
  breadcrumbs,
  note,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-cream py-8 text-brand-charcoal sm:py-12 lg:py-14">
      <Container className="relative max-w-[88rem]">
        {breadcrumbs ? (
          <div className="mb-7">
            <Breadcrumbs
              items={breadcrumbs}
              className="text-brand-slate"
              currentClassName="text-brand-navy"
              linkClassName="hover:text-brand-navy"
            />
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(25rem,1.18fr)] lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="max-w-3xl lg:flex lg:flex-col lg:justify-center lg:py-5 xl:max-w-[42rem]">
            <p className="hero-animate eyebrow-pill" style={{ ["--enter-delay" as string]: "80ms" }}>
              {eyebrow}
            </p>
            <h1
              className="font-display hero-animate mt-6 text-5xl font-medium leading-[0.96] tracking-[-0.05em] text-balance sm:text-6xl lg:text-[4.75rem]"
              style={{ ["--enter-delay" as string]: "160ms" }}
            >
              {title}
            </h1>
            <p
              className="hero-animate mt-6 max-w-xl text-base leading-8 text-brand-slate sm:text-lg"
              style={{ ["--enter-delay" as string]: "240ms" }}
            >
              {description}
            </p>

            <div
              className="hero-animate mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ ["--enter-delay" as string]: "320ms" }}
            >
              {actions.map((action) => (
                <ButtonLink
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  variant={action.variant === "light" ? "outline" : action.variant ?? "primary"}
                  className="sm:min-w-[200px]"
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>

            {supportingPoints?.length ? (
              <div
                className="hero-fade mt-10 grid border-t border-brand-navy/15 pt-5 sm:grid-cols-3"
                style={{ ["--enter-delay" as string]: "420ms" }}
              >
                {supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="border-l border-brand-limeDark/60 px-4 py-1 text-sm leading-6 text-brand-slate"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className="hero-fade relative min-h-[340px] bg-brand-mist sm:min-h-[440px] lg:min-h-[520px]"
            style={{ ["--enter-delay" as string]: "280ms" }}
          >
            <div className="relative h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 42vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />
              {note ? (
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-brand-navy/92 px-5 py-5 text-white backdrop-blur-sm sm:left-auto sm:max-w-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
                    {note.eyebrow}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{note.body}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
