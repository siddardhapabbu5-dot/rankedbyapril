import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
import { ResultsSection } from "@/components/home/results-section";
import { DeferredHomeBelow } from "@/components/home/deferred-home-below";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  description:
    "rankedbyapril — premium SEO, AI SEO / GEO, website development, and organic growth systems for ecommerce, SaaS, and service brands.",
});

/**
 * Eager SSR: Hero + Logos + Results (Speed Index / LCP).
 * Deeper sections load after idle (TBT / DOM).
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <ResultsSection />
      <DeferredHomeBelow />
    </>
  );
}
