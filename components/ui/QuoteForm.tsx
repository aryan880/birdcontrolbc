"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useTracking } from "@/lib/analytics/useTracking";
import { cities } from "@/content/cities";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import type { QuoteLeadPayload } from "@/types/lead";

type QuoteFormProps = {
  source?: string;
  redirectTo?: string;
  submitLabel?: string;
  defaultService?: string;
};

export function QuoteForm({
  source = "quote_form",
  redirectTo = "/thank-you",
  submitLabel = siteConfig.ctaLabels.primary,
  defaultService,
}: QuoteFormProps) {
  const router = useRouter();
  const { trackQuoteSubmission, trackPhoneClick, trackEmailClick } = useTracking();
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const defaultSelectedService = useMemo(() => {
    return defaultService ?? services[0]?.name ?? "";
  }, [defaultService]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const consent = formData.get("consent") === "on";
    const payload: QuoteLeadPayload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      propertyAddress: String(formData.get("propertyAddress") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      serviceNeeded: String(formData.get("service") ?? "").trim(),
      propertyType: String(formData.get("propertyType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      consent,
      photoNames: selectedFiles,
    };

    sessionStorage.setItem("pd_quote_lead", JSON.stringify(payload));
    trackQuoteSubmission(source, {
      service: payload.serviceNeeded,
      city: payload.city,
      propertyType: payload.propertyType,
      consent: payload.consent,
      hasPhotos: payload.photoNames.length > 0,
    });

    const searchParams = new URLSearchParams({
      service: payload.serviceNeeded,
      city: payload.city,
      propertyType: payload.propertyType,
    });

    router.push(`${redirectTo}?${searchParams.toString()}`);
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="field-control"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            className="field-control"
          />
        </Field>
      </div>

      <Field label="Property address (optional)" htmlFor="propertyAddress">
        <input
          id="propertyAddress"
          name="propertyAddress"
          autoComplete="street-address"
          placeholder="Street address, building name, or landmark"
          className="field-control"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="field-control"
          />
        </Field>
        <Field label="City" htmlFor="city">
          <select
            id="city"
            name="city"
            defaultValue=""
            required
            className="field-control"
          >
            <option value="" disabled>
              Select city
            </option>
            {cities.map((city) => (
              <option key={city.slug} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Service needed" htmlFor="service">
        <select
          id="service"
          name="service"
          defaultValue={defaultSelectedService}
          className="field-control"
        >
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Property type" htmlFor="propertyType">
        <select
          id="propertyType"
          name="propertyType"
          defaultValue=""
          required
          className="field-control"
        >
          <option value="" disabled>
            Select property type
          </option>
          {siteConfig.propertyTypes.map((propertyType) => (
            <option key={propertyType} value={propertyType}>
              {propertyType}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe the balcony, ledge, roofline, access, timing, or what the birds are doing."
          className="field-control min-h-[144px] resize-y"
        />
      </Field>

      <Field label="Photo upload placeholder" htmlFor="photos">
        <div className="grid gap-3">
          <input
            id="photos"
            type="file"
            name="photos"
            accept="image/*"
            multiple
            className="field-control file:mr-3 file:rounded-full file:border-0 file:bg-brand-mist file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-navy"
            onChange={(event) => {
              const fileNames = Array.from(event.currentTarget.files ?? []).map((file) => file.name);
              setSelectedFiles(fileNames);
            }}
          />
          <p className="text-xs leading-6 text-brand-slate">
            This field is prepared for backend upload wiring. For now, selected file names are kept with the quote details and the live upload step can be connected later.
          </p>
          {selectedFiles.length ? (
            <p className="text-xs leading-6 text-brand-navy">
              Selected: {selectedFiles.join(", ")}
            </p>
          ) : null}
        </div>
      </Field>

      <label className="flex items-start gap-3 rounded-[1.4rem] border border-brand-line/80 bg-brand-mist/55 p-4 text-sm leading-6 text-brand-slate">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-brand-line text-brand-limeDark focus:ring-brand-lime"
        />
        <span>
          I agree to be contacted about this quote request by phone or email and confirm that the details above relate to a real property inquiry.
        </span>
      </label>

      <button
        type="submit"
        className="hover-glow inline-flex min-h-12 items-center justify-center rounded-2xl border border-brand-limeSoft/80 bg-gradient-to-b from-[#e7fb8b] to-brand-lime px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_14px_34px_rgba(169,216,79,0.26)] transition duration-200 hover:-translate-y-0.5 hover:from-[#efffaf] hover:to-brand-limeSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 sm:text-base"
      >
        {submitLabel}
      </button>

      <p className="text-sm leading-6 text-brand-slate">
        Prefer a direct call or email? Call{" "}
        <a
          className="font-semibold text-brand-navy"
          href={siteConfig.telHref}
          onClick={() => trackPhoneClick(source)}
        >
          {siteConfig.phoneDisplay}
        </a>{" "}
        or email{" "}
        <a
          className="font-semibold text-brand-navy"
          href={siteConfig.mailtoHref}
          onClick={() => trackEmailClick(source)}
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm font-medium text-brand-navy">
      <span className="tracking-[0.01em]">{label}</span>
      {children}
    </label>
  );
}
