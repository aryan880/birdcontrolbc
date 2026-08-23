"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
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

    const forwardTrackingEvent = (event: Event) => {
      if (!ga4Id || !window.gtag || !(event instanceof CustomEvent)) {
        return;
      }

      const { event: eventName, ...parameters } = event.detail as Record<string, unknown>;

      if (typeof eventName === "string") {
        window.gtag("event", eventName, parameters);
      }
    };

    window.addEventListener("pd:tracking", forwardTrackingEvent);

    return () => {
      window.removeEventListener("pd:tracking", forwardTrackingEvent);
    };
  }, [ga4Id, gtmId]);

  if (!ga4Id && !gtmId) {
    return null;
  }

  return (
    <>
      {gtmId ? (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {ga4Id ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
