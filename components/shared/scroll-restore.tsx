"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const storageKey = (path: string) => `scroll-restore:${path}`;

/**
 * On browser refresh, restore the previous scroll position for this path
 * so long pages (e.g. home CTA) don’t jump back to the top.
 * Client navigations still start at the top / hash as usual.
 */
export function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const key = storageKey(pathname);

    const save = () => {
      try {
        sessionStorage.setItem(key, String(Math.round(window.scrollY)));
      } catch {
        /* private mode / quota */
      }
    };

    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = nav?.type === "reload";

    // Hash targets are handled by HashScroll — don’t fight them
    if (isReload && !window.location.hash) {
      try {
        const saved = sessionStorage.getItem(key);
        if (saved) {
          const y = Number(saved);
          if (Number.isFinite(y) && y > 0) {
            const restore = () => window.scrollTo(0, y);
            restore();
            // Layout / images can shift — nudge again shortly after
            window.setTimeout(restore, 100);
            window.setTimeout(restore, 400);
          }
        }
      } catch {
        /* ignore */
      }
    }

    let timer = 0;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(save, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", save);

    return () => {
      save();
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", save);
    };
  }, [pathname]);

  return null;
}
