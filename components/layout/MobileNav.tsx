"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolveHref = (href: string, fallback?: string) => {
    if (pathname === "/") {
      return href;
    }

    if (href.startsWith("#") && typeof document !== "undefined") {
      const id = href.slice(1);

      if (document.getElementById(id)) {
        return href;
      }
    }

    return fallback ?? href;
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-navy shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2"
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
          "absolute inset-x-5 top-[calc(100%+0.75rem)] rounded-[1.75rem] border border-brand-line/80 bg-white/95 p-5 shadow-panel backdrop-blur transition",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {navigation.primary.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href, item.futureHref ?? `/${item.href}`)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
