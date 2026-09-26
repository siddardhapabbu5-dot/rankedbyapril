"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const ThemeProvider = dynamic(
  () =>
    import("@/components/providers/theme-provider").then((m) => m.ThemeProvider),
  { ssr: false }
);

/** Light theme by default; next-themes loads after idle so it doesn't block LCP. */
export function DeferredTheme({ children }: { children: ReactNode }) {
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
      }, { timeout: 3000 });
    };
    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return <>{children}</>;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
