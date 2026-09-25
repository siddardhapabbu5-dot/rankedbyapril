import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
import { ResultsSection } from "@/components/home/results-section";
import { OrganicGrowthSection } from "@/components/home/organic-growth-section";
import { SearchDoorwaysSection } from "@/components/home/search-doorways-section";
import { SeoPillarsSection } from "@/components/home/seo-pillars-section";
import { AdaptedSection } from "@/components/home/adapted-section";
import { NamedInAiSection } from "@/components/home/named-in-ai-section";
import { AiRecommendSection } from "@/components/home/ai-recommend-section";
import { AboutMeSection } from "@/components/home/about-me-section";
import { ProcessSection } from "@/components/home/process-section";
import { WritingSamplesSection } from "@/components/home/writing-samples-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { Testimonials } from "@/components/home/testimonials";
import { PartnerCtaSection } from "@/components/home/partner-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactCta } from "@/components/shared/contact-cta";
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
 * Homepage flow (conversion + story):
 * 1 Hero → 2 Logos → 3 Results (proof early; matches nav)
 * → 4–6 Offer / how search works → 7–9 AI/GEO proof
 * → 10 About → 11 Process → 12 Writing → 13 Services
 * → 14 Testimonials → 15 Partner CTA → 16 FAQ → 17 Final CTA
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <ResultsSection />
      <OrganicGrowthSection />
      <SearchDoorwaysSection />
      <SeoPillarsSection />
      <AdaptedSection />
      <NamedInAiSection />
      <AiRecommendSection />
      <AboutMeSection />
      <ProcessSection />
      <WritingSamplesSection />
      <ServicesOverview />
      <Testimonials />
      <PartnerCtaSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}
