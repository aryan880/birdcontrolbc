"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      target?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
