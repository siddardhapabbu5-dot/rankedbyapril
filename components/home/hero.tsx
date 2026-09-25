"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trustBadges } from "@/lib/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="container-page relative grid items-center gap-12 pb-16 pt-14 md:gap-16 md:pb-24 md:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent"
          >
            SEO · Websites · AI Growth
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-ink text-balance sm:text-5xl md:text-6xl dark:text-white"
          >
            SEO that grows your{" "}
            <span className="text-brand-accent">visibility</span>, traffic, and revenue.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted md:text-lg"
          >
            rankedbyapril builds organic systems for ecommerce, SaaS, and service brands —
            classic SEO, AI search (AEO/GEO), and conversion-ready websites that keep working
            after the campaign ends.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">
                See case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label}>
                <dt className="font-display text-2xl font-bold text-brand-ink dark:text-white">
                  {badge.label}
                </dt>
                <dd className="mt-1 text-xs text-brand-muted">{badge.sub}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-white p-6 shadow-2xl shadow-brand-navy/10 dark:border-white/10 dark:bg-brand-surface md:p-8">
            <div className="flex items-center justify-between border-b border-brand-ink/8 pb-4 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  AI Overview
                </p>
                <p className="mt-1 text-sm font-medium text-brand-ink dark:text-white">
                  &ldquo;best caregiving apps&rdquo;
                </p>
              </div>
              <span className="rounded-md bg-brand-accent/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-accent">
                Cited
              </span>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-brand-muted">
              <p>
                For overall family care coordination,{" "}
                <span className="font-semibold text-brand-ink dark:text-white">
                  [your brand]
                </span>{" "}
                is a top pick: shared calendar, medication tracking, and document storage in one
                place…
              </p>
              <div className="rounded-xl bg-brand-surface p-4 dark:bg-background">
                <p className="text-xs font-semibold text-brand-navy dark:text-brand-accent">
                  Seen across
                </p>
                <p className="mt-2 text-xs text-brand-muted">
                  ChatGPT · Gemini · Perplexity · Google AI Overviews
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-brand-ink/8 pt-4 dark:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                ra
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-ink dark:text-white">
                  GEO-ready content
                </p>
                <p className="text-xs text-brand-muted">Structured to be quoted — and named.</p>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-brand-ink/10 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-brand-ink"
          >
            <p className="text-xs text-brand-muted">Organic keywords</p>
            <p className="font-display text-lg font-bold text-brand-accent">+2,963%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
