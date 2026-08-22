"use client";

import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-navy/20 bg-white/70 text-brand-navy shadow-sm transition hover:border-brand-navy/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark focus-visible:ring-offset-2"
      >
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
        <div className="space-y-1.5" aria-hidden="true">
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "-translate-y-2 -rotate-45")} />
        </div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-brand-navy/35 p-3 backdrop-blur-sm" onMouseDown={closeMenu}>
          <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="mx-auto flex max-h-[calc(100dvh-1.5rem)] max-w-lg flex-col overflow-y-auto rounded-[1.75rem] border border-white/70 bg-brand-soft p-5 shadow-panel"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-brand-line pb-5">
              <BrandLogo />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close navigation"
                onClick={closeMenu}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/20 text-brand-navy transition hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark"
              >
                <span aria-hidden="true" className="text-2xl font-light leading-none">×</span>
              </button>
            </div>

            <nav className="mt-3" aria-label="Mobile navigation links">
              {navigation.primary.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-brand-line/80 py-4 text-lg font-semibold text-brand-navy transition hover:text-brand-limeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-limeDark"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="text-xs font-bold tracking-[0.18em] text-brand-limeDark">0{index + 1}</span>
                </a>
              ))}
            </nav>

            <ButtonLink href="/#quote" variant="primary" className="mt-6 w-full" onClick={closeMenu}>
              Send Photos for a Free Quote
            </ButtonLink>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm font-semibold">
              <a href={siteConfig.telHref} className="rounded-xl border border-brand-navy/20 px-3 py-3 text-brand-navy hover:bg-brand-mist">Call Now</a>
              <a href={siteConfig.smsHref} className="rounded-xl border border-brand-navy/20 px-3 py-3 text-brand-navy hover:bg-brand-mist">Text Us</a>
            </div>
            <p className="mt-4 text-center text-xs text-brand-slate">{siteConfig.phoneDisplay} · Free quotes and inspections</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
