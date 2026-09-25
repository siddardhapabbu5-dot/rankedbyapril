"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "years growing organic visibility" },
  { value: "30+", label: "brands & publications" },
  { value: "250M+", label: "combined organic views across supported sites*" },
  {
    value: "AI Overviews",
    label: "I optimize content for Google's AI answers (GEO)",
    accent: true,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] dark:bg-background">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#EFE9E0] dark:bg-brand-surface"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-28 h-[28rem] w-[28rem] rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-start gap-12 pb-12 pt-10 md:gap-14 md:pb-16 md:pt-14 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:pt-4">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-[2.35rem] font-bold leading-[1.12] tracking-tight text-brand-ink text-balance sm:text-5xl md:text-[3.15rem] dark:text-white"
          >
            SEO that grows your{" "}
            <span className="italic text-brand-accent">visibility</span>, your traffic, and your{" "}
            <span className="italic text-brand-accent">revenue</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 max-w-xl text-[1.05rem] leading-[1.7] text-brand-muted"
          >
            I&apos;m an{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              SEO specialist for Shopify, health, beauty, and SaaS brands
            </strong>
            . Audits, technical fixes, site structure,{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              content strategy, and AI search optimization (AEO/GEO)
            </strong>
            , including for publicly known 7–9 figure Shopify &amp; DTC brands. Working with
            clients worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/#results"
              className="inline-flex items-center justify-center rounded-full bg-[#18233A] px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              See the results
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#18233A]/30 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-[#18233A] transition-colors hover:border-[#18233A] dark:border-white/35 dark:text-white"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
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
          <div className="mb-5 text-center lg:pl-4 lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
              April Reyes
            </p>
            <p className="mt-1.5 text-sm font-semibold text-brand-ink dark:text-white">
              Organic Growth &amp; SEO Specialist | AEO &amp; GEO Expert
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-2">
            <div
              className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-brand-accent/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-4 left-6 grid h-16 w-20 grid-cols-4 gap-1.5 opacity-50"
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
                  alt="April Reyes — Organic Growth & SEO Specialist"
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
