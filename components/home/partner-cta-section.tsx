"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, FileText, Mail } from "lucide-react";
import { FadeIn } from "@/components/shared/section-heading";
import { downloadBrochurePdf } from "@/lib/generate-brochure-pdf";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "OnlineJobs.ph", href: "https://www.onlinejobs.ph" },
  { label: "JobStreet", href: "https://www.jobstreet.com" },
];

export function PartnerCtaSection() {
  const [copied, setCopied] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function onDownloadPdf() {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      await downloadBrochurePdf();
      trackEvent("brochure_download_pdf", { location: "partner_cta" });
    } catch {
      alert("Couldn’t create the PDF. Please try again.");
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <section
      id="partner"
      className="section-pad scroll-mt-24 bg-[#F3F1EF] dark:bg-[#1A1C20]"
    >
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-brand-ink/8 bg-white px-6 py-10 text-center shadow-[0_20px_60px_-24px_rgba(24,35,58,0.2)] sm:px-10 md:px-14 md:py-12 dark:border-white/10 dark:bg-brand-surface">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Partner with me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
              Let&apos;s get you{" "}
              <span className="italic text-[#5E2A5E] dark:text-[#D5C8D8]">ranked</span>.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-brand-muted">
              Open to freelance and long-term SEO content projects for ecommerce, Shopify, SaaS,
              and service-based brands.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#5E2A5E] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-brand-ink/25 bg-white px-6 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink dark:border-white/25 dark:bg-transparent dark:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy email
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onDownloadPdf}
                disabled={pdfLoading}
                className="inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-6 py-3.5 text-sm font-semibold text-brand-accent transition-colors hover:bg-brand-accent hover:text-white disabled:opacity-60 dark:border-brand-accent/50"
              >
                <FileText className="h-4 w-4" />
                {pdfLoading ? "Preparing PDF…" : "Download brochure PDF"}
              </button>
            </div>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-brand-muted">
              Prefer a quick start? Email me your website + target keyword. I&apos;ll reply with
              first thoughts and a{" "}
              <strong className="font-semibold text-brand-ink dark:text-white">
                free mini audit
              </strong>
              . Or{" "}
              <Link
                href="/brochure"
                className="font-semibold text-brand-accent underline-offset-2 hover:underline"
              >
                view the full brochure
              </Link>{" "}
              to share on WhatsApp.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-ink underline-offset-4 hover:text-brand-accent hover:underline dark:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs text-brand-muted">
              📍 {siteConfig.address.city}, {siteConfig.address.state} · usually replies within 24
              hours
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
