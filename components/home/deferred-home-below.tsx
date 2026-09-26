"use client";

import { useEffect, useState, type ComponentType } from "react";
import { LanguageProvider } from "@/components/providers/language-provider";
import type { ContactCtaCopy } from "@/components/shared/contact-cta";
import type { Service } from "@/types";

type BelowProps = {
  services?: Service[];
  contactCta?: ContactCtaCopy;
};

/** Do not load below-fold section modules until after load+idle. */
export function DeferredHomeBelow(props: BelowProps) {
  const [Comp, setComp] = useState<ComponentType<BelowProps> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      import("@/components/home/home-below-fold").then((m) => {
        if (!cancelled) setComp(() => m.HomeBelowFold);
      });
    };

    const schedule = () => {
      const ric =
        window.requestIdleCallback?.bind(window) ??
        ((fn: IdleRequestCallback) =>
          window.setTimeout(() => fn({} as IdleDeadline), 1));
      ric(load, { timeout: 4000 });
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!Comp) return null;
  return (
    <LanguageProvider>
      <Comp {...props} />
    </LanguageProvider>
  );
}
