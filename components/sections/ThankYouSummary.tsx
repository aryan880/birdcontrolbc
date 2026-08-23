"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useTracking } from "@/lib/analytics/useTracking";

export function ThankYouSummary() {
  const searchParams = useSearchParams();
  const { trackEvent } = useTracking();

  useEffect(() => {
    trackEvent({
      event: "thank_you_view",
      location: "thank-you",
      metadata: {
        service: searchParams.get("service") ?? undefined,
        city: searchParams.get("city") ?? undefined,
      },
    });
  }, [searchParams, trackEvent]);

  const service = searchParams.get("service");
  const city = searchParams.get("city");
  const propertyType = searchParams.get("propertyType");

  return (
    <div className="section-surface p-6 sm:p-8">
      <p className="eyebrow-pill">What Happens Next</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl">
        Your request was sent successfully.
      </h2>
      <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
        We received the quote details and any attached photos. We will review the request and follow up using the contact information you provided.
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
          "Your request was delivered to the Bird Control BC business inbox.",
          "Additional photos, approvals, or access notes can be shared during follow-up if needed.",
          "Call now if the issue is urgent and you need to discuss the property directly.",
        ].map((item) => (
          <div key={item} className="rounded-[1.4rem] border border-brand-line/80 bg-white p-4 text-sm leading-6 text-brand-slate">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
