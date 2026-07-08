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
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(169,216,79,0.12),transparent_24%),linear-gradient(135deg,#11263e_0%,#123654_52%,#0f4e67_100%)] py-12 text-white sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]" />
      <Container className="relative max-w-[92rem]">
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

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:items-stretch xl:gap-12">
          <div className="max-w-3xl lg:flex lg:flex-col lg:justify-center lg:py-4 xl:max-w-[46rem]">
            <p className="hero-animate eyebrow-pill-dark" style={{ ["--enter-delay" as string]: "80ms" }}>
              {eyebrow}
            </p>
            <h1
              className="hero-animate mt-5 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl"
              style={{ ["--enter-delay" as string]: "160ms" }}
            >
              {title}
            </h1>
            <p
              className="hero-animate mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
              style={{ ["--enter-delay" as string]: "240ms" }}
            >
              {description}
            </p>

            <div
              className="hero-animate mt-7 flex flex-col gap-3 sm:flex-row"
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
                className="hero-fade mt-8 grid gap-3 sm:grid-cols-3"
                style={{ ["--enter-delay" as string]: "420ms" }}
              >
                {supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="glass-panel rounded-[1.4rem] px-4 py-4 text-sm leading-6 text-slate-100"
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className="hero-fade glass-panel h-full min-h-[320px] rounded-[2rem] p-4 shadow-[0_28px_90px_rgba(2,10,22,0.28)] sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[560px]"
            style={{ ["--enter-delay" as string]: "280ms" }}
          >
            <div className="relative h-full overflow-hidden rounded-[1.6rem]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 42vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />
              {note ? (
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.3rem] border border-white/10 bg-brand-navy/60 px-4 py-4 backdrop-blur">
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
