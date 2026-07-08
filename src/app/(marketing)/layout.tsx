import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { MotionController } from "@/components/layout/MotionController";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-lime focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-navy"
      >
        Skip to content
      </a>
      <AnalyticsProvider
        ga4Id={process.env.NEXT_PUBLIC_GA4_ID}
        gtmId={process.env.NEXT_PUBLIC_GTM_ID}
      />
      <MotionController />
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
