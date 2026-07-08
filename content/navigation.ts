import type { NavigationGroup } from "@/types/navigation";

export const navigation: NavigationGroup = {
  primary: [
    { label: "Services", href: "#services", kind: "anchor", futureHref: "/services" },
    { label: "Projects", href: "#projects", kind: "anchor", futureHref: "/projects" },
    { label: "FAQ", href: "#faq", kind: "anchor", futureHref: "/#faq" },
    { label: "Contact", href: "#quote", kind: "anchor", futureHref: "/contact" },
  ],
  services: [
    {
      label: "Balcony Bird Netting",
      href: "/services/balcony-bird-netting",
      kind: "route",
      futureHref: "/services/balcony-bird-netting",
    },
    {
      label: "Pigeon Spikes",
      href: "/services/pigeon-spike-installation",
      kind: "route",
      futureHref: "/services/pigeon-spike-installation",
    },
    {
      label: "Balcony Cleaning",
      href: "/services/balcony-cleaning",
      kind: "route",
      futureHref: "/services/balcony-cleaning",
    },
    {
      label: "Pet & Cat Netting",
      href: "/services/pet-cat-netting",
      kind: "route",
      futureHref: "/services/pet-cat-netting",
    },
    {
      label: "Commercial Bird Control",
      href: "/services/commercial-bird-control",
      kind: "route",
      futureHref: "/services/commercial-bird-control",
    },
  ],
  company: [
    { label: "Home", href: "/", kind: "route" },
    { label: "Projects", href: "/projects", kind: "route", futureHref: "/projects" },
    { label: "Free Quote", href: "/contact", kind: "route", futureHref: "/contact" },
    { label: "Service Areas", href: "/service-areas", kind: "route", futureHref: "/service-areas" },
    { label: "Contact", href: "/contact", kind: "route", futureHref: "/contact" },
  ],
  legacy: [
    { label: "Bird Netting", href: "/balcony-bird-netting.html", kind: "route" },
    { label: "Spike Installation", href: "/pigeon-spike-installation.html", kind: "route" },
    { label: "Balcony Cleaning", href: "/balcony-cleaning.html", kind: "route" },
    { label: "Commercial Bird Control", href: "/commercial-bird-control.html", kind: "route" },
  ],
};
