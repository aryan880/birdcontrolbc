import type { Service } from "@/types/service";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServiceLinksGridProps = {
  services: Service[];
};

export function ServiceLinksGrid({ services }: ServiceLinksGridProps) {
  return (
    <div className="mt-12 grid items-stretch gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}
