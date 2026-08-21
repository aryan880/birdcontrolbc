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
      className="reveal-load group border-t border-brand-navy/20 pt-5"
      style={{ ["--reveal-delay" as string]: `${index * 55}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.025]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col py-5">
        <div className="flex items-start justify-between gap-5">
          <h3 className="font-display text-[1.75rem] font-medium tracking-[-0.035em] text-brand-navy">
            {service.name}
          </h3>
          <span className="mt-1 text-xs font-semibold text-brand-limeDark">0{index + 1}</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-brand-slate">
          {service.summary}
        </p>
        <SmartLink
          href={primaryHref}
          className="mt-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy transition duration-300 hover:gap-4 hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark sm:mt-auto sm:self-start"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </SmartLink>
      </div>
    </article>
  );
}
