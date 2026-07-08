import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-brand-navy pb-28 pt-14 text-white sm:pb-14">
      <Container className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <Image
            src="/images/pigeon-defenders-logo.png"
            alt="Pigeon Defenders logo"
            width={168}
            height={56}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Smart solutions. Lasting results. Protect your home. Protect our
            community.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-200">
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
        <FooterColumn title="Legacy HTML" links={navigation.legacy} />
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
    <div className="pt-2">
      <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-limeSoft">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm text-slate-200">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <SmartLink href={link.futureHref ?? link.href} className="hover:text-white">
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
