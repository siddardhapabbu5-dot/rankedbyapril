import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { Testimonials } from "@/components/home/testimonials";
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <Testimonials />
      <FaqSection />
      <ContactCta />
    </>
  );
}
