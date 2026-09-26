import { Hero } from "@/components/home/hero";
import { ClientLogos } from "@/components/home/client-logos";
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
 * Eager: Hero + Logos (SSR for Speed Index).
 * Results and below mount after load+idle (TBT / DOM).
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <HomeBelowFold />
    </>
  );
}
