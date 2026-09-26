import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
import { ResultsSection } from "@/components/home/results-section";
import { DeferredHomeBelow } from "@/components/home/deferred-home-below";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/data/content";
import { resolveHomeContent, resolveServices, resolveSiteConfig } from "@/lib/cms/public";
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
export default async function HomePage() {
  const [home, services, site] = await Promise.all([
    resolveHomeContent(),
    resolveServices(),
    resolveSiteConfig(),
  ]);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <ResultsSection />
      <DeferredHomeBelow
        services={services}
        contactCta={{
          eyebrow: home.contactCta.eyebrow,
          title: home.contactCta.title,
          description: home.contactCta.description,
          bookCall: home.contactCta.bookCall,
          emailLabel: home.contactCta.email,
          email: site.email,
        }}
      />
    </>
  );
}
