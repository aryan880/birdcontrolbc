import { ButtonLink } from "@/components/ui/Button";
import { SmartLink } from "@/components/ui/SmartLink";
import { siteConfig } from "@/content/site";

type QuoteBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  note?: string;
  relatedLinks?: Array<{
    href: string;
    label: string;
  }>;
};

export function QuoteBand({
  eyebrow = "Quote CTA",
  title,
  description,
  note,
  relatedLinks,
}: QuoteBandProps) {
  return (
    <div
      data-reveal
      className="panel-sheen rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-blue to-[#0f4e67] p-8 text-white shadow-panel sm:p-10"
    >
      <p className="eyebrow-pill-dark">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">{description}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact#quote" variant="primary" className="sm:min-w-[220px]">
          {siteConfig.ctaLabels.primary}
        </ButtonLink>
        <ButtonLink href={siteConfig.telHref} variant="light" className="sm:min-w-[200px]">
          {siteConfig.ctaLabels.secondary}
        </ButtonLink>
      </div>
      {note ? (
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
          <p className="text-sm leading-7 text-slate-100">{note}</p>
        </div>
      ) : null}
      {relatedLinks?.length ? (
        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
          <p className="text-sm leading-7 text-slate-100">
            Related pages:{" "}
            {relatedLinks.map((link, index) => (
              <span key={`${link.href}-${link.label}`}>
                {index > 0 ? ", " : ""}
                <SmartLink
                  href={link.href}
                  className="font-semibold text-brand-limeSoft underline-offset-4 hover:underline"
                >
                  {link.label}
                </SmartLink>
              </span>
            ))}
          </p>
        </div>
      ) : null}
    </div>
  );
}
