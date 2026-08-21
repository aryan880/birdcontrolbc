import { Container } from "@/components/layout/Container";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SmartLink } from "@/components/ui/SmartLink";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy pb-28 pt-14 text-white sm:pb-14">
      <Container className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <BrandLogo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Practical bird control for properties that need to stay clean, usable, and well managed.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-200">
            <p>
              <a href={siteConfig.telHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={siteConfig.mailtoHref} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p>{siteConfig.address.display}</p>
            <div className="space-y-1">
              {siteConfig.businessHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <p>{siteConfig.serviceAreaSummary}</p>
          </div>
        </div>

        <FooterColumn title="Services" links={navigation.services} />
        <FooterColumn title="Company" links={navigation.company} />
        <FooterColumn title="Service Areas" links={[
          { label: "Vancouver", href: "/service-areas/vancouver" },
          { label: "Burnaby", href: "/service-areas/burnaby" },
          { label: "Richmond", href: "/service-areas/richmond" },
          { label: "North Shore", href: "/service-areas/north-vancouver" },
        ]} />
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ href: string; label: string; futureHref?: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="border-t border-white/10 pt-5 md:border-0 md:pt-2">
      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-200">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <SmartLink
              href={link.futureHref ?? link.href}
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeSoft focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
