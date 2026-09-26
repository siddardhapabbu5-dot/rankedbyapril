"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: "5+", label: t.hero.stats.years },
    { value: "30+", label: t.hero.stats.brands },
    { value: "250M+", label: t.hero.stats.views },
    {
      value: "AI Overviews",
      label: t.hero.stats.aiLabel,
      accent: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background dark:bg-background">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-ink/5 dark:bg-brand-surface"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-28 h-[28rem] w-[28rem] rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-start gap-10 pb-14 pt-10 md:gap-12 md:pb-16 md:pt-12 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:pt-2">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            {t.hero.titleBefore}{" "}
            <span className="italic text-brand-accent">{t.hero.visibility}</span>
            {t.hero.titleMiddle}{" "}
            <span className="italic text-brand-accent">{t.hero.revenue}</span>
            {t.hero.titleAfter}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 max-w-xl text-lg font-normal leading-[1.6] text-brand-body md:text-xl dark:text-brand-muted"
          >
            {t.hero.bodyBefore}{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              {t.hero.bodyStrong1}
            </strong>
            {t.hero.bodyMid}{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              {t.hero.bodyStrong2}
            </strong>
            {t.hero.bodyAfter}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt
                  className={
                    stat.accent
                      ? "font-display text-lg font-bold leading-tight text-brand-accent md:text-xl"
                      : "font-display text-2xl font-bold text-brand-ink md:text-[1.75rem] dark:text-white"
                  }
                >
                  {stat.value}
                </dt>
                <dd className="mt-1.5 max-w-[11rem] text-[12px] leading-snug text-brand-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative lg:col-span-5"
        >
          <div className="mb-5 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
              {t.hero.roleLabel}
            </p>
            <p className="mx-auto mt-1.5 max-w-xs text-sm font-semibold text-brand-ink dark:text-white">
              {t.hero.roleTitle}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div
              className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-brand-accent/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-4 left-1/2 grid h-16 w-20 -translate-x-1/2 grid-cols-4 gap-1.5 opacity-50"
              aria-hidden
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-accent/70" />
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border-[5px] border-white bg-white shadow-[0_25px_60px_-25px_rgba(24,35,58,0.4)] dark:border-white/10">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/april-portrait.jpg"
                  alt={`${t.hero.roleLabel} — ${t.hero.roleTitle}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
