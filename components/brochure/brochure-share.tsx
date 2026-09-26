"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Download, FileText, MessageCircle, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { downloadBrochurePdf } from "@/lib/generate-brochure-pdf";

const brochurePath = "/whatsapp-brochure-v2.png";

const previewServices = [
  "Shopify & Ecommerce SEO",
  "AEO · GEO · AI Search",
  "SEO Content Writing",
  "Technical SEO",
  "Content Marketing",
  "Websites · Local · White label",
];

export function BrochureShareActions({ pageUrl }: { pageUrl: string }) {
  const [copied, setCopied] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const shareText = `rankedbyapril — SEO that grows visibility, traffic & revenue.\n\nApril Grace Degracia · Founder & CEO\nShopify · Health · Beauty · SaaS\nFree mini audit available.\n\n${pageUrl}`;

  const whatsappShareHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      trackEvent("brochure_copy_link");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function nativeShare() {
    if (!navigator.share) {
      await copyLink();
      return;
    }
    try {
      await navigator.share({
        title: "rankedbyapril brochure",
        text: "SEO that grows visibility, traffic & revenue — April Grace Degracia, Founder & CEO",
        url: pageUrl,
      });
      trackEvent("brochure_native_share");
    } catch {
      /* user cancelled */
    }
  }

  async function onDownloadPdf() {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      await downloadBrochurePdf();
      trackEvent("brochure_download_pdf");
    } catch {
      alert("Couldn’t create the PDF. Please try again.");
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={whatsappShareHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("brochure_whatsapp_share")}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        Share on WhatsApp
      </a>
      <button
        type="button"
        onClick={onDownloadPdf}
        disabled={pdfLoading}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        <FileText className="h-4 w-4" />
        {pdfLoading ? "Preparing PDF…" : "Download full PDF"}
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Link copied" : "Copy brochure link"}
      </button>
      <a
        href={brochurePath}
        download="rankedbyapril-brochure.png"
        onClick={() => trackEvent("brochure_download")}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
      >
        <Download className="h-4 w-4" />
        Download image
      </a>
      <button
        type="button"
        onClick={nativeShare}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-accent hover:text-brand-accent sm:hidden"
      >
        <Share2 className="h-4 w-4" />
        Share…
      </button>
    </div>
  );
}

/** Live preview card — CEO photo + fuller service list (matches PDF content). */
export function BrochureCard() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1220] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="relative px-6 pb-7 pt-7">
        <div
          className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-accent/20 blur-3xl"
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              rankedbyapril
            </p>
            <h2 className="mt-2 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-white">
              SEO that grows visibility, traffic &amp; revenue
            </h2>
            <p className="mt-2 text-xs text-white/55">Shopify · Health · Beauty · SaaS</p>
          </div>
          <div className="shrink-0 text-center">
            <div className="relative mx-auto h-[4.75rem] w-[4.75rem] overflow-hidden rounded-full ring-[3px] ring-brand-accent">
              <Image
                src="/images/april-portrait.jpg"
                alt="April Grace Degracia — Founder & CEO"
                fill
                className="object-cover object-top"
                sizes="76px"
                priority
              />
            </div>
            <p className="mt-1.5 text-[10px] font-semibold leading-tight text-white">
              April Grace Degracia
            </p>
            <p className="text-[9px] font-medium text-brand-accent">Founder &amp; CEO</p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-3">
          {[
            { value: "5+", label: "years" },
            { value: "30+", label: "brands" },
            { value: "250M+", label: "views" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-display text-lg font-bold text-brand-accent">{stat.value}</dt>
              <dd className="text-[10px] text-white/55">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-4 space-y-2">
          {previewServices.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[12px] text-white/85">
              <span className="mt-1.5 h-2 w-0.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-full bg-brand-accent px-4 py-2.5 text-center text-sm font-bold text-[#0B1220]">
          Free mini audit
        </div>
        <p className="mt-3 text-center text-[10px] text-white/40">
          {siteConfig.email} · rankedbyapril.com
        </p>
      </div>
    </div>
  );
}

export function BrochureContactRow() {
  return (
    <p className="text-sm text-white/60">
      Or message directly:{" "}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="font-semibold text-brand-accent hover:underline"
      >
        WhatsApp
      </a>
      {" · "}
      <a
        href={`mailto:${siteConfig.email}`}
        className="font-semibold text-white hover:text-brand-accent"
      >
        {siteConfig.email}
      </a>
    </p>
  );
}
