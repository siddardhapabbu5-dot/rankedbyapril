"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/shared/deferred-mount";

const ResultsSection = dynamic(
  () => import("@/components/home/results-section").then((m) => m.ResultsSection),
  { ssr: false }
);
const OrganicGrowthSection = dynamic(
  () =>
    import("@/components/home/organic-growth-section").then((m) => m.OrganicGrowthSection),
  { ssr: false }
);
const SearchDoorwaysSection = dynamic(
  () =>
    import("@/components/home/search-doorways-section").then((m) => m.SearchDoorwaysSection),
  { ssr: false }
);
const SeoPillarsSection = dynamic(
  () => import("@/components/home/seo-pillars-section").then((m) => m.SeoPillarsSection),
  { ssr: false }
);
const AdaptedSection = dynamic(
  () => import("@/components/home/adapted-section").then((m) => m.AdaptedSection),
  { ssr: false }
);
const NamedInAiSection = dynamic(
  () => import("@/components/home/named-in-ai-section").then((m) => m.NamedInAiSection),
  { ssr: false }
);
const AiRecommendSection = dynamic(
  () => import("@/components/home/ai-recommend-section").then((m) => m.AiRecommendSection),
  { ssr: false }
);
const AboutMeSection = dynamic(
  () => import("@/components/home/about-me-section").then((m) => m.AboutMeSection),
  { ssr: false }
);
const ProcessSection = dynamic(
  () => import("@/components/home/process-section").then((m) => m.ProcessSection),
  { ssr: false }
);
const WritingSamplesSection = dynamic(
  () =>
    import("@/components/home/writing-samples-section").then((m) => m.WritingSamplesSection),
  { ssr: false }
);
const ServicesOverview = dynamic(
  () => import("@/components/home/services-overview").then((m) => m.ServicesOverview),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("@/components/home/testimonials").then((m) => m.Testimonials),
  { ssr: false }
);
const PartnerCtaSection = dynamic(
  () => import("@/components/home/partner-cta-section").then((m) => m.PartnerCtaSection),
  { ssr: false }
);
const FaqSection = dynamic(
  () => import("@/components/home/faq-section").then((m) => m.FaqSection),
  { ssr: false }
);
const ContactCta = dynamic(
  () => import("@/components/shared/contact-cta").then((m) => m.ContactCta),
  { ssr: false }
);

/** Below-fold homepage blocks — code-split and mount on scroll. */
export function HomeBelowFold() {
  return (
    <>
      <DeferredMount minHeight={720}>
        <ResultsSection />
      </DeferredMount>
      <DeferredMount minHeight={520}>
        <OrganicGrowthSection />
      </DeferredMount>
      <DeferredMount minHeight={520}>
        <SearchDoorwaysSection />
      </DeferredMount>
      <DeferredMount minHeight={480}>
        <SeoPillarsSection />
      </DeferredMount>
      <DeferredMount minHeight={640}>
        <AdaptedSection />
      </DeferredMount>
      <DeferredMount minHeight={640}>
        <NamedInAiSection />
      </DeferredMount>
      <DeferredMount minHeight={520}>
        <AiRecommendSection />
      </DeferredMount>
      <DeferredMount minHeight={640}>
        <AboutMeSection />
      </DeferredMount>
      <DeferredMount minHeight={520}>
        <ProcessSection />
      </DeferredMount>
      <DeferredMount minHeight={640}>
        <WritingSamplesSection />
      </DeferredMount>
      <DeferredMount minHeight={520}>
        <ServicesOverview />
      </DeferredMount>
      <DeferredMount minHeight={480}>
        <Testimonials />
      </DeferredMount>
      <DeferredMount minHeight={420}>
        <PartnerCtaSection />
      </DeferredMount>
      <DeferredMount minHeight={420}>
        <FaqSection />
      </DeferredMount>
      <DeferredMount minHeight={360}>
        <ContactCta />
      </DeferredMount>
    </>
  );
}
