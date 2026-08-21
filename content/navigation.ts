import type { NavigationGroup } from "@/types/navigation";

export const navigation: NavigationGroup = {
  primary: [
    { label: "Services", href: "/services", kind: "route" },
    { label: "Projects", href: "/projects", kind: "route" },
    { label: "Areas", href: "/service-areas", kind: "route" },
    { label: "About", href: "/about", kind: "route" },
    { label: "Contact", href: "/contact", kind: "route" },
  ],
  services: [
    {
      label: "Balcony Bird Netting",
      href: "/services/balcony-bird-netting",
      kind: "route",
      futureHref: "/services/balcony-bird-netting",
    },
    {
      label: "Bird Spike Installation",
      href: "/services/bird-spike-installation",
      kind: "route",
    },
    {
      label: "Pigeon Dropping Cleaning",
      href: "/services/pigeon-dropping-cleaning",
      kind: "route",
    },
    {
      label: "Bird Deterrents",
      href: "/services/bird-deterrents",
      kind: "route",
    },
    {
      label: "Commercial Bird Control",
      href: "/services/commercial-bird-control",
      kind: "route",
    },
    { label: "Strata Bird Control", href: "/services/strata-bird-control", kind: "route" },
  ],
  company: [
    { label: "About Bird Control BC", href: "/about", kind: "route" },
    { label: "Projects", href: "/projects", kind: "route" },
    { label: "Property Care Guides", href: "/resources", kind: "route" },
    { label: "Service Areas", href: "/service-areas", kind: "route" },
    { label: "Contact", href: "/contact", kind: "route" },
  ],
  legacy: [],
};
