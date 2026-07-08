export type NavigationLink = {
  label: string;
  href: string;
  kind?: "anchor" | "route";
  futureHref?: string;
};

export type NavigationGroup = {
  primary: NavigationLink[];
  services: NavigationLink[];
  company: NavigationLink[];
  legacy: NavigationLink[];
};
