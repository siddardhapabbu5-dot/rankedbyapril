"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Share, X } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "rankedbyapril-install-dismissed";

function isIos() {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator &&
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone))
  );
}

type InstallAppButtonProps = {
  variant?: "menu" | "banner" | "header";
  className?: string;
  onInstalled?: () => void;
};

export function InstallAppButton({
  variant = "menu",
  className,
  onInstalled,
}: InstallAppButtonProps) {
  const { t } = useLanguage();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showSteps, setShowSteps] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isStandalone()) {
      setVisible(false);
      return;
    }

    const dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    if (variant === "banner" && dismissed) {
      setVisible(false);
      return;
    }

    setVisible(true);
    if (isIos()) setIosHint(true);

    function onBeforeInstall(event: Event) {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
    }

    function onInstalledApp() {
      setDeferred(null);
      setVisible(false);
      onInstalled?.();
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalledApp);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalledApp);
    };
  }, [variant, onInstalled]);

  useEffect(() => {
    if (!showSteps || variant === "banner") return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setShowSteps(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setShowSteps(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showSteps, variant]);

  const stepsText = iosHint ? t.install.iosSteps : t.install.androidSteps;

  const install = useCallback(async () => {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      setDeferred(null);
      if (choice.outcome === "accepted") {
        setVisible(false);
        onInstalled?.();
      }
      return;
    }

    setShowSteps((v) => !v);
  }, [deferred, onInstalled]);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    setShowSteps(false);
  }, []);

  if (!visible) return null;

  if (variant === "header") {
    return (
      <div ref={rootRef} className={cn("relative hidden lg:block", className)}>
        <button
          type="button"
          onClick={install}
          aria-label={t.install.shortAction}
          aria-expanded={showSteps}
          className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full border border-brand-ink/15 px-2.5 text-xs font-semibold text-brand-ink/85 transition-colors hover:border-brand-accent hover:text-brand-accent dark:border-white/20 dark:text-white/85"
        >
          <Download className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t.install.shortAction}
        </button>

        {showSteps && (
          <div className="absolute right-0 top-full z-[80] mt-2 w-72 rounded-xl border border-brand-ink/10 bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] dark:border-white/15 dark:bg-[#0B1220]">
            <p className="text-sm font-semibold text-brand-ink dark:text-white">
              {t.install.title}
            </p>
            <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-brand-muted">
              {stepsText}
            </p>
            <p className="mt-3 text-[11px] leading-snug text-brand-muted">
              {t.install.unavailable}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={cn(
          "fixed inset-x-0 bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] z-40 px-4 sm:hidden",
          className
        )}
      >
        <div className="mx-auto flex max-w-lg items-start gap-3 rounded-2xl border border-brand-ink/10 bg-white p-3.5 shadow-[0_12px_40px_-16px_rgba(24,35,58,0.45)] dark:border-white/10 dark:bg-[#1f2937]">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111827] text-brand-accent">
            <Download className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-brand-ink dark:text-white">
              {t.install.title}
            </p>
            <p className="mt-0.5 whitespace-pre-line text-xs leading-snug text-brand-muted">
              {showSteps ? stepsText : t.install.subtitle}
            </p>
            <button
              type="button"
              onClick={install}
              className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-3.5 py-1.5 text-xs font-semibold text-white"
            >
              {iosHint ? <Share className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
              {showSteps ? t.install.howTo : t.install.shortAction}
            </button>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full p-1 text-brand-muted hover:text-brand-ink dark:hover:text-white"
            aria-label={t.install.dismiss}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <button
        type="button"
        onClick={install}
        className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-semibold text-brand-ink dark:text-white"
      >
        {iosHint ? (
          <Share className="h-4 w-4 text-brand-accent" />
        ) : (
          <Download className="h-4 w-4 text-brand-accent" />
        )}
        {t.install.shortAction}
      </button>
      {showSteps && (
        <p className="mb-2 whitespace-pre-line px-3 text-xs leading-relaxed text-brand-muted">
          {stepsText}
        </p>
      )}
    </div>
  );
}
