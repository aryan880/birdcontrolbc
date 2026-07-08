import type { City } from "@/types/city";
import { SmartLink } from "@/components/ui/SmartLink";

type CityLinksGridProps = {
  cities: City[];
};

export function CityLinksGrid({ cities }: CityLinksGridProps) {
  return (
    <div className="section-grid-balanced mx-auto grid-cols-1 items-stretch sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
      {cities.map((city) => (
        <SmartLink
          key={city.slug}
          href={city.routeHref}
          className="surface-card group flex rounded-2xl px-4 py-3 text-sm font-medium text-brand-navy"
        >
          <span className="flex items-center justify-between gap-3">
            <span>{city.name}</span>
            <span
              aria-hidden="true"
              className="text-brand-limeDark transition duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </SmartLink>
      ))}
    </div>
  );
}
