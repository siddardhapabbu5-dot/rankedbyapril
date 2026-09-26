"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LanguageSwitcher = dynamic(
  () =>
    import("@/components/layout/language-switcher").then((m) => m.LanguageSwitcher),
  { ssr: false }
);
const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((m) => m.ThemeToggle),
  { ssr: false }
);
const InstallAppButton = dynamic(
  () =>
    import("@/components/shared/install-app-button").then((m) => m.InstallAppButton),
  { ssr: false }
);

/** Header widgets that can wait until after first paint. */
export function HeaderExtras() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      const ric =
        window.requestIdleCallback?.bind(window) ??
        ((fn: IdleRequestCallback) =>
          window.setTimeout(() => fn({} as IdleDeadline), 1));
      ric(() => {
        if (!cancelled) setReady(true);
      }, { timeout: 2500 });
    };
    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return <div className="flex h-9 w-[5.5rem] shrink-0 items-center sm:w-[7.5rem]" aria-hidden />;
  }

  return (
    <>
      <InstallAppButton variant="header" />
      <LanguageSwitcher />
      <div className="hidden sm:block">
        <ThemeToggle />
      </div>
    </>
  );
}
