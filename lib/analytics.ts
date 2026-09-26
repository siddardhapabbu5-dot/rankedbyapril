export type AnalyticsEvent =
  | "generate_lead"
  | "newsletter_signup"
  | "whatsapp_click"
  | "calendly_click"
  | "contact_cta_click"
  | "brochure_copy_link"
  | "brochure_native_share"
  | "brochure_download_pdf"
  | "brochure_whatsapp_share"
  | "brochure_download";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
