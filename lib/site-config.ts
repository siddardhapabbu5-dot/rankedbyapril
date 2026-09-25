import type { NavItem } from "@/types";

export const siteConfig = {
  name: "rankedbyapril",
  legalName: "Ranked by April",
  tagline: "SEO. WEBSITES. AI GROWTH.",
  description:
    "Premium digital agency specializing in SEO, AI SEO / GEO, website development, local SEO, content marketing, and white-label growth systems that compound.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rankedbyapril.com",
  ogImage: "/og-image.jpg",
  email: "hello@rankedbyapril.com",
  phone: "+1 (555) 014-2024",
  whatsapp: "15550142024",
  calendly: "https://calendly.com/rankedbyapril/strategy-call",
  address: {
    street: "1200 Market Street, Suite 400",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States",
  },
  social: {
    twitter: "https://twitter.com/rankedbyapril",
    linkedin: "https://linkedin.com/company/rankedbyapril",
    instagram: "https://instagram.com/rankedbyapril",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  },
} as const;

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "SEO Services",
        href: "/services/seo",
        description: "Technical, on-page, and growth SEO that ranks and converts.",
      },
      {
        title: "AI SEO / GEO",
        href: "/services/ai-seo",
        description: "Get cited in AI Overviews, ChatGPT, and Perplexity.",
      },
      {
        title: "Website Development",
        href: "/services/web-development",
        description: "Fast, conversion-focused sites built for search.",
      },
      {
        title: "Local SEO",
        href: "/services/local-seo",
        description: "Dominate Maps and local pack visibility.",
      },
      {
        title: "Technical SEO",
        href: "/services/technical-seo",
        description: "Crawl, index, Core Web Vitals, and site architecture.",
      },
      {
        title: "Content Marketing",
        href: "/services/content-marketing",
        description: "Strategy, briefs, and publish-ready content that compounds.",
      },
      {
        title: "Lead Generation",
        href: "/services/lead-generation",
        description: "Organic funnels that turn searchers into pipeline.",
      },
      {
        title: "White Label SEO",
        href: "/services/white-label-seo",
        description: "Reliable SEO delivery for agencies under your brand.",
      },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { title: "SEO Services", href: "/services/seo" },
    { title: "AI SEO / GEO", href: "/services/ai-seo" },
    { title: "Web Development", href: "/services/web-development" },
    { title: "Local SEO", href: "/services/local-seo" },
    { title: "Content Marketing", href: "/services/content-marketing" },
    { title: "White Label SEO", href: "/services/white-label-seo" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};
