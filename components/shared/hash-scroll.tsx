"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Smooth-scroll to #hash after client navigations (Next.js Link often skips this). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const scrollTo = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Retry — hard refresh can run before the target section is painted
    const t1 = window.setTimeout(scrollTo, 80);
    const t2 = window.setTimeout(scrollTo, 320);
    const t3 = window.setTimeout(scrollTo, 700);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname]);

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
