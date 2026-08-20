import Image from "next/image";

import { SmartLink } from "@/components/ui/SmartLink";
import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const primaryHref = service.routeHref ?? service.href;
  const linkLabel = service.routeHref
    ? "View service details"
    : "Learn more on current service page";

  return (
    <article
      data-reveal
      className="surface-card reveal-load group flex overflow-hidden rounded-[1.9rem]"
      style={{ ["--reveal-delay" as string]: `${index * 55}ms` }}
    >
      <div className="relative min-h-[240px] overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          Lower Mainland, BC
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[1.7rem] font-semibold tracking-[-0.02em] text-brand-navy">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-brand-slate">
          {service.summary}
        </p>
        <SmartLink
          href={primaryHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-mist px-4 py-2 text-sm font-semibold text-brand-navy transition duration-300 hover:translate-x-1 hover:bg-brand-limeSoft/40 hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime sm:mt-auto sm:self-start"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </SmartLink>
      </div>
    </article>
  );
}
