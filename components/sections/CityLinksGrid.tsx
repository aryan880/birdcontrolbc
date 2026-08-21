import type { City } from "@/types/city";
import { SmartLink } from "@/components/ui/SmartLink";

type CityLinksGridProps = {
  cities: City[];
  className?: string;
};

export function CityLinksGrid({ cities, className }: CityLinksGridProps) {
  return (
    <div
      className={[
        "section-grid-balanced grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {cities.map((city) => (
        <SmartLink
          key={city.slug}
          href={city.routeHref}
          className="group flex border-b border-brand-navy/15 px-1 py-3 text-sm font-medium text-brand-navy"
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
