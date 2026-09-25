"use client";

import { clientLogos } from "@/lib/data/content";
import { FadeIn } from "@/components/shared/section-heading";

export function ClientLogos() {
  return (
    <section className="border-y border-brand-ink/8 bg-brand-surface/60 py-10 dark:border-white/10 dark:bg-brand-surface/40">
      <div className="container-page">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
            Brands we&apos;ve ranked &amp; built for
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-8">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-12 items-center justify-center text-center text-sm font-semibold tracking-tight text-brand-ink/35 dark:text-white/35"
              >
                {logo}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
