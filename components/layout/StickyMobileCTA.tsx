"use client";

import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { useTracking } from "@/lib/analytics/useTracking";

export function StickyMobileCTA() {
  const { trackCtaClick, trackPhoneClick } = useTracking();

  return (
    <div className="sticky-cta-enter fixed inset-x-0 bottom-0 z-40 border-t border-brand-line/80 bg-white/92 p-3 shadow-[0_-12px_30px_rgba(7,23,44,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-xl gap-3">
        <ButtonLink
          href="/contact"
          variant="dark"
          className="flex-1"
          onClick={() => trackCtaClick(siteConfig.ctaLabels.primary, "sticky_mobile_cta")}
        >
          {siteConfig.ctaLabels.primary}
        </ButtonLink>
        <ButtonLink
          href={siteConfig.telHref}
          variant="primary"
          className="flex-1"
          onClick={() => trackPhoneClick("sticky_mobile_cta")}
        >
          {siteConfig.ctaLabels.secondary}
        </ButtonLink>
      </div>
    </div>
  );
}
