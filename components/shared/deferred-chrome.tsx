"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LanguageProvider } from "@/components/providers/language-provider";

const InstallAppButton = dynamic(
  () =>
    import("@/components/shared/install-app-button").then((m) => m.InstallAppButton),
  { ssr: false }
);
const WhatsAppButton = dynamic(
  () =>
    import("@/components/shared/whatsapp-button").then((m) => m.WhatsAppButton),
  { ssr: false }
);
const ServiceWorkerRegister = dynamic(
  () =>
    import("@/components/shared/service-worker-register").then(
      (m) => m.ServiceWorkerRegister
    ),
  { ssr: false }
);
const HashScroll = dynamic(
  () => import("@/components/shared/hash-scroll").then((m) => m.HashScroll),
  { ssr: false }
);
const ScrollRestore = dynamic(
  () =>
    import("@/components/shared/scroll-restore").then((m) => m.ScrollRestore),
  { ssr: false }
);
const AnalyticsClickTracker = dynamic(
  () =>
    import("@/components/shared/analytics-click-tracker").then(
      (m) => m.AnalyticsClickTracker
    ),
  { ssr: false }
);

/** Site chrome that can wait until after load — keeps TBT/TTI down. */
export function DeferredChrome() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (cancelled) return;
      const ric =
        window.requestIdleCallback?.bind(window) ??
        ((fn: IdleRequestCallback) =>
          window.setTimeout(() => fn({} as IdleDeadline), 1));
      ric(() => {
        if (!cancelled) setReady(true);
      }, { timeout: 3000 });
    };

    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <LanguageProvider>
      <InstallAppButton variant="banner" />
      <WhatsAppButton />
      <ServiceWorkerRegister />
      <HashScroll />
      <ScrollRestore />
      <AnalyticsClickTracker />
    </LanguageProvider>
  );
}
