"use client";

import { useMemo } from "react";

import {
  trackCtaClick,
  trackEmailClick,
  trackPhoneClick,
  trackQuoteSubmission,
  type TrackingPayload,
  pushTrackingEvent,
} from "@/lib/analytics/tracking";

export function useTracking() {
  return useMemo(
    () => ({
      trackEvent: (payload: TrackingPayload) => pushTrackingEvent(payload),
      trackCtaClick,
      trackPhoneClick,
      trackEmailClick,
      trackQuoteSubmission,
    }),
    []
  );
}
