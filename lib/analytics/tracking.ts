export type TrackingEventName =
  | "cta_click"
  | "phone_click"
  | "email_click"
  | "quote_submit"
  | "thank_you_view";

export type TrackingPayload = {
  event: TrackingEventName;
  category?: string;
  label?: string;
  location?: string;
  value?: string | number;
  metadata?: Record<string, string | number | boolean | undefined>;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function pushTrackingEvent(payload: TrackingPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    ...payload,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(eventPayload);
  window.dispatchEvent(new CustomEvent("pd:tracking", { detail: eventPayload }));
}

export function trackCtaClick(label: string, location: string) {
  pushTrackingEvent({
    event: "cta_click",
    label,
    location,
  });
}

export function trackPhoneClick(location: string) {
  pushTrackingEvent({
    event: "phone_click",
    label: "Call Now",
    location,
  });
}

export function trackEmailClick(location: string) {
  pushTrackingEvent({
    event: "email_click",
    label: "Email",
    location,
  });
}

export function trackQuoteSubmission(location: string, metadata?: TrackingPayload["metadata"]) {
  pushTrackingEvent({
    event: "quote_submit",
    label: "Get Free Quote",
    location,
    metadata,
  });
}
