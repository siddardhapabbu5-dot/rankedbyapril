export type Dictionary = {
  skipToContent: string;
  nav: {
    results: string;
    services: string;
    caseStudies: string;
    blog: string;
    about: string;
    hireMe: string;
    openMenu: string;
    closeMenu: string;
    allServices: string;
    shopifySeo: string;
    aeoGeo: string;
    contentWriting: string;
    brochure: string;
  };
  services: {
    seo: { title: string; description: string };
    aiSeo: { title: string; description: string };
    webDev: { title: string; description: string };
    localSeo: { title: string; description: string };
    technicalSeo: { title: string; description: string };
    content: { title: string; description: string };
    leadGen: { title: string; description: string };
    whiteLabel: { title: string; description: string };
  };
  language: {
    label: string;
    english: string;
    visaya: string;
    tagalog: string;
  };
  install: {
    title: string;
    subtitle: string;
    action: string;
    shortAction: string;
    howTo: string;
    iosSteps: string;
    androidSteps: string;
    dismiss: string;
    unavailable: string;
  };
  hero: {
    titleBefore: string;
    visibility: string;
    titleMiddle: string;
    revenue: string;
    titleAfter: string;
    bodyBefore: string;
    bodyStrong1: string;
    bodyMid: string;
    bodyStrong2: string;
    bodyAfter: string;
    roleLabel: string;
    roleTitle: string;
    stats: {
      years: string;
      brands: string;
      views: string;
      aiLabel: string;
    };
  };
  contactCta: {
    eyebrow: string;
    title: string;
    description: string;
    bookCall: string;
    email: string;
  };
  footer: {
    blurb: string;
    newsletter: string;
    newsletterHint: string;
    services: string;
    company: string;
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
  };
};

export const en: Dictionary = {
  skipToContent: "Skip to content",
  nav: {
    results: "Results",
    services: "Services",
    caseStudies: "Case Studies",
    blog: "Blog",
    about: "About",
    hireMe: "Hire me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    allServices: "All services",
    shopifySeo: "Shopify & Ecommerce SEO",
    aeoGeo: "AEO · GEO · AI Search",
    contentWriting: "SEO Content Writing",
    brochure: "Brochure",
  },
  services: {
    seo: {
      title: "SEO Services",
      description: "Technical, on-page, and growth SEO that ranks and converts.",
    },
    aiSeo: {
      title: "AI SEO / GEO",
      description: "Get cited in AI Overviews, ChatGPT, and Perplexity.",
    },
    webDev: {
      title: "Website Development",
      description: "Fast, conversion-focused sites built for search.",
    },
    localSeo: {
      title: "Local SEO",
      description: "Dominate Maps and local pack visibility.",
    },
    technicalSeo: {
      title: "Technical SEO",
      description: "Crawl, index, Core Web Vitals, and site architecture.",
    },
    content: {
      title: "Content Marketing",
      description: "Strategy, briefs, and publish-ready content that compounds.",
    },
    leadGen: {
      title: "Lead Generation",
      description: "Organic funnels that turn searchers into pipeline.",
    },
    whiteLabel: {
      title: "White Label SEO",
      description: "Reliable SEO delivery for agencies under your brand.",
    },
  },
  language: {
    label: "Language",
    english: "English",
    visaya: "Visayan",
    tagalog: "Tagalog",
  },
  install: {
    title: "Add to Home Screen",
    subtitle: "Open rankedbyapril like an app from your phone’s home screen.",
    action: "Add to Home Screen",
    shortAction: "Install App",
    howTo: "Show steps",
    iosSteps:
      "1. Tap the Share button in Safari\n2. Scroll and tap “Add to Home Screen”\n3. Tap Add",
    androidSteps:
      "1. Tap the browser menu (⋮)\n2. Tap “Install app” or “Add to Home screen”\n3. Confirm",
    dismiss: "Dismiss",
    unavailable:
      "On Chrome/Edge: menu (⋮) → Install app / Add to Home screen. On iPhone Safari: Share → Add to Home Screen.",
  },
  hero: {
    titleBefore: "SEO that grows your",
    visibility: "visibility",
    titleMiddle: ", your traffic, and your",
    revenue: "revenue",
    titleAfter: ".",
    bodyBefore: "I'm an",
    bodyStrong1: "SEO specialist for Shopify, health, beauty, and SaaS brands",
    bodyMid: ". Audits, technical fixes, site structure,",
    bodyStrong2: "content strategy, and AI search optimization (AEO/GEO)",
    bodyAfter:
      ", including for publicly known 7–9 figure Shopify & DTC brands. Working with clients worldwide.",
    roleLabel: "April Grace Degracia",
    roleTitle: "Organic Growth & SEO Specialist | AEO & GEO Expert",
    stats: {
      years: "years growing organic visibility",
      brands: "brands & publications",
      views: "combined organic views across supported sites*",
      aiLabel: "I optimize content for Google's AI answers (GEO)",
    },
  },
  contactCta: {
    eyebrow: "Let's talk",
    title: "Want organic growth without renting every click?",
    description:
      "Tell us your site and goals. We'll reply with clear next steps — and a free mini audit if it's a fit.",
    bookCall: "Book a strategy call",
    email: "Email",
  },
  footer: {
    blurb:
      "Premium SEO, AI search optimization, and websites that turn visibility into pipeline. Built for brands that want organic growth that compounds.",
    newsletter: "Newsletter",
    newsletterHint: "SEO & AI search notes — no fluff.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};
