"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useTracking } from "@/lib/analytics/useTracking";
import type { QuoteLeadPayload } from "@/types/lead";

export function ThankYouSummary() {
  const searchParams = useSearchParams();
  const { trackEvent } = useTracking();
  const [lead, setLead] = useState<null | QuoteLeadPayload>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("bc_quote_lead");

      if (saved) {
        setLead(JSON.parse(saved) as QuoteLeadPayload);
      }
    } catch {
      setLead(null);
    }

    trackEvent({
      event: "thank_you_view",
      location: "thank-you",
      metadata: {
        service: searchParams.get("service") ?? undefined,
        city: searchParams.get("city") ?? undefined,
      },
    });
  }, [searchParams, trackEvent]);

  const service = lead?.serviceNeeded || searchParams.get("service");
  const city = lead?.city || searchParams.get("city");
  const propertyType = lead?.propertyType || searchParams.get("propertyType");

  return (
    <div className="section-surface p-6 sm:p-8">
      <p className="eyebrow-pill">What Happens Next</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl">
        Your request is ready for the next step.
      </h2>
      <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
        We now have the core details for your quote request, including the service, city, and property type when they were provided.
      </p>

      {(service || city || propertyType) ? (
        <div className="mt-6 rounded-[1.5rem] border border-brand-line/80 bg-brand-mist/55 p-5 text-sm leading-6 text-brand-slate">
          <p className="font-semibold text-brand-navy">Request summary</p>
          <div className="mt-3 space-y-1">
            {service ? <p>Service: {service}</p> : null}
            {city ? <p>City: {city}</p> : null}
            {propertyType ? <p>Property type: {propertyType}</p> : null}
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          "Your request summary is saved so the follow-up can start with the right context.",
          "Photos, approvals, and access notes can still be added during the next conversation if needed.",
          "Call now if the issue is urgent and you want to move faster than the standard follow-up flow.",
        ].map((item) => (
          <div key={item} className="rounded-[1.4rem] border border-brand-line/80 bg-white p-4 text-sm leading-6 text-brand-slate">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
