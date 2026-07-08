import type { Service } from "@/types/service";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServiceLinksGridProps = {
  services: Service[];
};

export function ServiceLinksGrid({ services }: ServiceLinksGridProps) {
  return (
    <div className="section-grid-balanced mx-auto items-stretch md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}
