"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __PD_ANALYTICS__?: {
      ga4Id?: string;
      gtmId?: string;
    };
  }
}

type AnalyticsProviderProps = {
  ga4Id?: string;
  gtmId?: string;
};

export function AnalyticsProvider({ ga4Id, gtmId }: AnalyticsProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.__PD_ANALYTICS__ = {
      ga4Id,
      gtmId,
    };
  }, [ga4Id, gtmId]);

  return null;
}
