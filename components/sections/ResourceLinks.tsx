import Link from "next/link";

import type { Resource } from "@/types/resource";

type ResourceLinksProps = {
  resources: Resource[];
};

export function ResourceLinks({ resources }: ResourceLinksProps) {
  return (
    <div className="border-t border-brand-navy/20">
      {resources.map((resource, index) => (
        <Link
          key={resource.slug}
          href={resource.routeHref}
          className="group grid gap-3 border-b border-brand-navy/15 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6"
        >
          <span className="text-xs font-bold tracking-[0.18em] text-brand-limeDark">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>
            <span className="font-display block text-2xl leading-tight text-brand-navy transition-colors group-hover:text-brand-limeDark sm:text-3xl">
              {resource.shortTitle}
            </span>
            <span className="mt-2 block max-w-3xl text-sm leading-7 text-brand-slate">
              {resource.excerpt}
            </span>
          </span>
          <span aria-hidden="true" className="text-xl text-brand-limeDark transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
