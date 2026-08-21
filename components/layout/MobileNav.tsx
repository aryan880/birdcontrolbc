"use client";

import { useState } from "react";

import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center border border-brand-navy/25 bg-transparent text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="space-y-1.5">
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "-translate-y-2 -rotate-45")} />
        </div>
      </button>

      <div
        id="mobile-nav"
        className={cn(
          "absolute inset-x-5 top-[calc(100%+0.5rem)] border border-brand-line/80 bg-brand-soft/98 p-5 shadow-panel backdrop-blur transition",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {navigation.primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-brand-line/70 px-1 py-3 text-sm font-semibold text-brand-navy last:border-0 hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex items-center gap-4 border-t border-brand-line/70 pt-4 text-sm font-semibold text-brand-navy">
          <a href={siteConfig.telHref}>Call</a>
          <a href={siteConfig.smsHref}>Text</a>
          <span className="text-xs font-medium text-brand-slate">{siteConfig.phoneDisplay}</span>
        </div>
      </div>
    </div>
  );
}
