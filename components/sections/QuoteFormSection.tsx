import { QuoteForm } from "@/components/ui/QuoteForm";
import { siteConfig } from "@/content/site";

type QuoteFormSectionProps = {
  title?: string;
  description?: string;
  source?: string;
  redirectTo?: string;
  defaultService?: string;
};

export function QuoteFormSection({
  title = "Send the important details first.",
  description = "Send the property details that matter most so the next conversation can start with useful context instead of back-and-forth guessing.",
  source = "quote_form_section",
  redirectTo = "/thank-you",
  defaultService,
}: QuoteFormSectionProps) {
  return (
    <div
      id="quote"
      className="relative overflow-hidden border-t border-brand-navy/25 bg-brand-soft p-6 sm:p-8"
    >
      <p className="eyebrow-pill">
        Send photos for a free quote
      </p>
      <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.035em] text-brand-navy sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
        {description}
      </p>
      <div className="mt-6 border-l border-brand-limeDark bg-brand-mist/60 p-4 text-sm leading-6 text-brand-slate">
        Helpful details: balcony or ledge photos, property type, city, access notes, and whether cleaning is also needed. Business hours: {siteConfig.businessHours.join(" · ")}.
      </div>
      <div className="mt-8">
        <QuoteForm
          source={source}
          redirectTo={redirectTo}
          defaultService={defaultService}
        />
      </div>
    </div>
  );
}
