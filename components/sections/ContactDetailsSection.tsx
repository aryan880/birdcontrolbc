import { siteConfig } from "@/content/site";

type ContactDetailsSectionProps = {
  title?: string;
  description?: string;
  theme?: "light" | "dark";
};

export function ContactDetailsSection({
  title = "Talk to Bird Control BC directly.",
  description = "Send photos, call, or text for a free quote. Free inspections are also available for properties in our service area when an on-site look is the right next step.",
  theme = "light",
}: ContactDetailsSectionProps) {
  const surfaceClass =
    theme === "dark"
      ? "border-white/10 bg-white/10 text-slate-100"
      : "border-brand-line/80 bg-white text-brand-slate";
  const headingClass = theme === "dark" ? "text-white" : "text-brand-navy";

  return (
    <div className="grid gap-4">
      <div>
        <h2 className={`text-3xl font-semibold tracking-[-0.03em] ${headingClass} sm:text-4xl`}>
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 sm:text-base">{description}</p>
      </div>

      <div className="section-grid-balanced md:grid-cols-2">
        <article className={`rounded-[1.6rem] border p-5 shadow-soft ${surfaceClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
            Call or text
          </p>
          <div className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold ${headingClass}`}>
            <a href={siteConfig.telHref}>Call {siteConfig.phoneDisplay}</a>
            <span aria-hidden="true" className="text-brand-line">/</span>
            <a href={siteConfig.smsHref}>Text us</a>
          </div>
          <p className="mt-2 text-sm leading-6">Use the same number to call or text for a free quote.</p>
        </article>

        <article className={`rounded-[1.6rem] border p-5 shadow-soft ${surfaceClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
            Email
          </p>
          <a href={siteConfig.mailtoHref} className={`mt-3 block text-lg font-semibold break-all ${headingClass}`}>
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm leading-6">Useful for property managers, approvals, or when written details need to stay organized.</p>
        </article>

        <article className={`rounded-[1.6rem] border p-5 shadow-soft ${surfaceClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
            Location & hours
          </p>
          <div className="mt-3 space-y-2 text-sm leading-6">
            <p>{siteConfig.address.display}</p>
            {siteConfig.businessHours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>

        <article className={`rounded-[1.6rem] border p-5 shadow-soft ${surfaceClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
            Service area
          </p>
          <p className="mt-3 text-sm leading-6">{siteConfig.serviceAreaSummary}</p>
        </article>
      </div>
    </div>
  );
}
