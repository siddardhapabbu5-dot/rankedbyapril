import Link from "next/link";
import {
  BrochureCard,
  BrochureContactRow,
  BrochureShareActions,
} from "@/components/brochure/brochure-share";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Brochure",
  description:
    "rankedbyapril company brochure with Founder & CEO April Grace Degracia — full services, results, process, and free mini audit. Share via WhatsApp or download the PDF.",
  path: "/brochure",
  image: "/whatsapp-brochure-v2.png",
});

export default function BrochurePage() {
  const pageUrl = absoluteUrl("/brochure");

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-[#0B1220] text-white">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-10 py-10 md:grid-cols-12 md:items-center md:gap-12 md:py-16">
        <div className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Client brochure
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Ready to share on{" "}
            <span className="italic text-brand-accent">WhatsApp</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Full company brochure with Founder &amp; CEO April Grace Degracia — all services, selected
            results, how we work, and a free mini audit CTA. Share the image on WhatsApp or
            download the multi-page PDF.
          </p>

          <div className="mt-8">
            <BrochureShareActions pageUrl={pageUrl} />
          </div>

          <div className="mt-6 space-y-2">
            <BrochureContactRow />
            <p className="text-xs text-white/40">
              Tip: the <strong className="font-semibold text-white/70">full PDF</strong> includes
              CEO photo, all 8 services, results, and process — attach it in WhatsApp or share the
              link.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold text-white/80 underline-offset-4 hover:text-brand-accent hover:underline"
            >
              Prefer a full strategy call? Contact →
            </Link>
          </div>
        </div>

        <div className="md:col-span-7">
          <BrochureCard />
        </div>
      </div>
    </div>
  );
}
