"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Languages } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type MenuPos = { top: number; right: number };

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<MenuPos>({ top: 0, right: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return;

    function updatePosition() {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPos({
        top: rect.bottom + 8,
        right: Math.max(12, window.innerWidth - rect.right),
      });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (rootRef.current?.contains(target)) return;
      const menu = document.getElementById("language-menu");
      if (menu?.contains(target)) return;
      setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  const menu =
    open && mounted
      ? createPortal(
          <ul
            id="language-menu"
            role="listbox"
            aria-label={t.language.label}
            style={{ top: pos.top, right: pos.right }}
            className="fixed z-[200] min-w-[10rem] overflow-hidden rounded-xl border border-brand-ink/10 bg-white py-1 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] dark:border-white/15 dark:bg-[#1f2937]"
          >
            {locales.map((code) => {
              const active = code === locale;
              return (
                <li key={code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-brand-ink/5 dark:hover:bg-white/10",
                      active
                        ? "font-semibold text-brand-accent"
                        : "font-medium text-brand-ink dark:text-white"
                    )}
                    onClick={() => select(code)}
                  >
                    {localeLabels[code]}
                    {active ? <Check className="h-3.5 w-3.5 shrink-0" aria-hidden /> : null}
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body
        )
      : null;

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-accent dark:text-white/75 dark:hover:text-brand-accent"
        aria-label={t.language.label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Languages className="h-4 w-4" aria-hidden />
        <span className="hidden xl:inline">{localeLabels[locale]}</span>
      </button>
      {menu}
    </div>
  );
}
