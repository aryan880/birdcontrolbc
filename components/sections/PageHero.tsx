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
    <section className="relative overflow-hidden bg-brand-navy py-10 text-white sm:py-14 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-brand-lime/70" />
      <Container className="relative max-w-[88rem]">
        {breadcrumbs ? (
          <div className="mb-8">
            <Breadcrumbs
              items={breadcrumbs}
              className="text-slate-200"
              currentClassName="text-white"
              linkClassName="hover:text-white"
            />
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(25rem,1.05fr)] lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="max-w-3xl lg:flex lg:flex-col lg:justify-center lg:py-5 xl:max-w-[42rem]">
            <p className="hero-animate eyebrow-pill-dark" style={{ ["--enter-delay" as string]: "80ms" }}>
              {eyebrow}
            </p>
            <h1
              className="hero-animate mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-balance sm:text-5xl lg:text-[4rem]"
              style={{ ["--enter-delay" as string]: "160ms" }}
            >
              {title}
            </h1>
            <p
              className="hero-animate mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
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
                  variant={action.variant ?? "primary"}
                  className="sm:min-w-[200px]"
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>

            {supportingPoints?.length ? (
              <div
                className="hero-fade mt-10 grid border-t border-white/15 pt-5 sm:grid-cols-3"
                style={{ ["--enter-delay" as string]: "420ms" }}
              >
                {supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="border-l border-brand-lime/70 px-4 py-1 text-sm leading-6 text-slate-100"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className="hero-fade relative min-h-[320px] border border-white/10 bg-white/5 p-3 shadow-[0_28px_80px_rgba(2,10,22,0.26)] sm:min-h-[420px] lg:min-h-[500px]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
              {note ? (
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-navy/85 px-5 py-5 backdrop-blur-sm">
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
