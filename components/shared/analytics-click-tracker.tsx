"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Delegates click tracking for [data-analytics] anchors sitewide */
export function AnalyticsClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.("[data-analytics]");
      if (!target) return;
      const name = target.getAttribute("data-analytics");
      if (name === "calendly_click") trackEvent("calendly_click");
      if (name === "contact_cta_click") trackEvent("contact_cta_click");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
