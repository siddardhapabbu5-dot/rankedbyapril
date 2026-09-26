import { siteConfig } from "@/lib/site-config";
import { en } from "@/lib/i18n/dictionaries/en";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/content";
import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PortfolioEditItem,
  ServiceEditItem,
  SiteSettingsContent,
} from "@/lib/cms/types";

export function defaultSettings(): SiteSettingsContent {
  return {
    name: siteConfig.name,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    calendly: siteConfig.calendly,
    address: { ...siteConfig.address },
    social: { ...siteConfig.social },
  };
}

export function defaultHome(): HomeContent {
  return {
    hero: { ...en.hero, stats: { ...en.hero.stats } },
    contactCta: { ...en.contactCta },
    footerBlurb: en.footer.blurb,
  };
}

export function defaultAbout(): AboutContent {
  return {
    eyebrow: "About rankedbyapril",
    title: "Organic growth operators for brands that refuse to rent every click.",
    intro:
      "We started rankedbyapril to close the gap between SEO reports and business outcomes — combining classic search, AI visibility, and conversion-ready websites in one system.",
    storyEyebrow: "Our story",
    storyTitle: "Built for the SERP that actually exists now",
    storyDescription:
      "Blue links still matter. So do AI Overviews and generative answers. We built an agency that treats all three as one visibility problem — with delivery standards enterprise teams trust.",
    storyP1:
      "Too many SEO engagements optimize for vanity metrics. Too many website projects ignore search until after launch. Too many “AI SEO” pitches overpromise citations.",
    storyP2:
      "rankedbyapril exists for teams who want honest strategy, sharp execution, and systems that keep compounding — audits, content, technical work, GEO, and builds that marketing can actually run.",
    missionTitle: "Mission",
    missionBody:
      "Help ambitious brands earn durable demand through search and AI discovery — measured in pipeline and revenue, not screenshots alone.",
    visionTitle: "Vision",
    visionBody:
      "A world where organic and AI visibility are operated as a growth system — clear, accountable, and built to compound.",
  };
}

export function defaultContact(): ContactContent {
  return {
    eyebrow: "Contact",
    title: "Tell us what you're trying to grow",
    description:
      "Share your site and goals. We'll reply within one business day — often with a free mini audit.",
    formTitle: "Project inquiry",
    bookTitle: "Book a call",
    bookDescription: "Prefer calendar booking? Grab a strategy slot on Calendly.",
    bookButton: "Open Calendly",
  };
}

export function defaultServices(): ServiceEditItem[] {
  return services.map((s) => ({
    slug: s.slug,
    title: s.title,
    shortTitle: s.shortTitle,
    description: s.description,
    longDescription: s.longDescription,
    features: [...s.features],
    outcomes: [...s.outcomes],
  }));
}

export function defaultPortfolio(): PortfolioEditItem[] {
  return caseStudies.map((c) => ({
    slug: c.slug,
    title: c.title,
    client: c.client,
    industry: c.industry,
    summary: c.summary,
    challenge: c.challenge,
    solution: c.solution,
  }));
}
