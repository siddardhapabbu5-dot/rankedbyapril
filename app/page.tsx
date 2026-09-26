import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
import { ResultsSection } from "@/components/home/results-section";
import { HomeBelowFold } from "@/components/home/home-below-fold";
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
 * Eager above-the-fold: Hero → Logos → Results (fast LCP / less JS).
 * Below-fold mounts on scroll to cut TBT, TTI, and initial DOM.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <ResultsSection />
      <HomeBelowFold />
    </>
  );
}
