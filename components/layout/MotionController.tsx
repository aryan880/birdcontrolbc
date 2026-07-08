"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealElements();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeTargets = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.classList.contains("is-visible")) {
          return;
        }

        observer.observe(element);
      });
    };

    const frame = window.requestAnimationFrame(observeTargets);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
