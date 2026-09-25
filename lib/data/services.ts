import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "seo",
    title: "SEO Services",
    shortTitle: "SEO",
    description:
      "Full-funnel SEO that grows organic visibility, qualified traffic, and revenue — not vanity rankings.",
    longDescription:
      "We build search systems that compound: technical foundations, intent-matched content, authority, and conversion paths. Every roadmap is tied to business outcomes — pipeline, revenue, and market share — not keyword vanity metrics.",
    icon: "Search",
    features: [
      "Technical & on-page audits with prioritized fixes",
      "Keyword research, clustering & opportunity mapping",
      "Site architecture & internal linking systems",
      "Content strategy, briefs & optimization",
      "Authority & digital PR support",
      "Monthly reporting in plain English",
    ],
    outcomes: [
      "Sustainable organic traffic growth",
      "Higher rankings for commercial intent queries",
      "Improved crawlability and index coverage",
      "Clear attribution from search to leads/sales",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Baseline",
        description: "We map technical health, content gaps, competitors, and revenue opportunities.",
      },
      {
        step: "02",
        title: "Foundation Fixes",
        description: "We remove blockers: crawl issues, thin pages, broken paths, and weak structure.",
      },
      {
        step: "03",
        title: "Growth Execution",
        description: "We ship content, optimizations, and authority plays against a prioritized roadmap.",
      },
      {
        step: "04",
        title: "Measure & Iterate",
        description: "We track rankings, traffic, conversions, and refine based on what actually moves.",
      },
    ],
    faqs: [
      {
        question: "How long until SEO results show?",
        answer:
          "Most clients see meaningful movement in 3–6 months, depending on competition, site health, and content velocity. We prioritize quick wins early while building compounding assets.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical agency can. We guarantee process, transparency, and work designed for eligibility — then we track and iterate relentlessly.",
      },
    ],
  },
  {
    slug: "ai-seo",
    title: "AI SEO / GEO",
    shortTitle: "AI SEO / GEO",
    description:
      "Get named and cited in Google AI Overviews, ChatGPT, Perplexity, and Gemini — not just blue links.",
    longDescription:
      "Buyers ask AI before they click. We structure your brand, entities, and content so answer engines can quote you, cite you, and recommend you. AEO and GEO share the same foundation: content worth lifting.",
    icon: "Sparkles",
    features: [
      "AI Visibility Audit across major engines",
      "Answer-first page restructuring",
      "Entity consistency & schema markup",
      "llms.txt and AI crawler access checks",
      "Citation tracking & competitor monitoring",
      "Third-party corroboration strategy",
    ],
    outcomes: [
      "Eligibility for AI Overview citations",
      "Clearer brand entity signals",
      "Quotable, structured money pages",
      "Visibility beyond classic SERPs",
    ],
    process: [
      {
        step: "01",
        title: "AI Visibility Audit",
        description: "We map where you appear (or don't) across AI answers and competitors.",
      },
      {
        step: "02",
        title: "Make Pages Quotable",
        description: "We restructure content for direct, verifiable, liftable answers.",
      },
      {
        step: "03",
        title: "Entity & Schema",
        description: "We strengthen brand consistency, metadata, and structured data.",
      },
      {
        step: "04",
        title: "Track Citations",
        description: "We monitor mentions and refine based on what engines actually cite.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between SEO, AEO, and GEO?",
        answer:
          "SEO ranks classic results. AEO structures content for answer engines to quote. GEO helps generative tools cite and name your brand. We run all three together.",
      },
      {
        question: "Can you guarantee AI citations?",
        answer:
          "Nobody can. We deliver content that is eligible, structured, and tracked — so when engines choose a source, they can choose you.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Website Development",
    shortTitle: "Websites",
    description:
      "Premium, fast, conversion-focused websites engineered for SEO and Core Web Vitals from day one.",
    longDescription:
      "We design and build sites that look enterprise-grade and perform like product software — clean architecture, accessible UI, and search-ready foundations that marketing can scale on.",
    icon: "Code2",
    features: [
      "Custom Next.js & modern stack builds",
      "Conversion-focused UX & design systems",
      "Core Web Vitals optimization",
      "CMS integration (Sanity-ready)",
      "Accessibility (WCAG) compliance",
      "Analytics, schema & SEO launch checklist",
    ],
    outcomes: [
      "Faster load times and better CWV scores",
      "Higher conversion rates from organic traffic",
      "Maintainable component architecture",
      "SEO-ready information architecture",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Goals, audiences, competitors, and conversion paths define the build plan.",
      },
      {
        step: "02",
        title: "Design System",
        description: "Brand-aligned UI with clear hierarchy and mobile-first layouts.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        description: "Performance-first development with CMS, forms, and analytics wired in.",
      },
      {
        step: "04",
        title: "Launch & Optimize",
        description: "QA, SEO launch, monitoring, and iteration post-release.",
      },
    ],
    faqs: [
      {
        question: "What stack do you use?",
        answer:
          "Primarily Next.js, TypeScript, Tailwind, and headless CMS options like Sanity. We choose tools that stay fast, maintainable, and SEO-friendly.",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description:
      "Own your market in Google Maps, the local pack, and location-based search intent.",
    longDescription:
      "From Google Business Profile optimization to location pages and review systems, we help multi-location and service-area businesses become the obvious local choice.",
    icon: "MapPin",
    features: [
      "Google Business Profile optimization",
      "Local pack & Maps ranking strategy",
      "Location page architecture",
      "Citation consistency cleanup",
      "Review generation systems",
      "Local schema & NAP hygiene",
    ],
    outcomes: [
      "Higher Maps and local pack visibility",
      "More calls, direction requests, and visits",
      "Consistent NAP across directories",
      "Stronger local trust signals",
    ],
    process: [
      {
        step: "01",
        title: "Local Audit",
        description: "GBP, citations, reviews, and competitor local footprints.",
      },
      {
        step: "02",
        title: "Profile & Pages",
        description: "Optimize listings and build location pages that convert.",
      },
      {
        step: "03",
        title: "Authority Locally",
        description: "Citations, reviews, and local content that reinforce relevance.",
      },
      {
        step: "04",
        title: "Scale Locations",
        description: "Playbooks for multi-location growth without duplicate content.",
      },
    ],
    faqs: [
      {
        question: "Do you work with multi-location brands?",
        answer:
          "Yes. We build scalable location templates, citation workflows, and reporting that works across dozens of locations.",
      },
    ],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    description:
      "Crawlability, indexation, Core Web Vitals, and architecture — the foundation growth depends on.",
    longDescription:
      "When technical debt blocks growth, more content won't help. We diagnose and fix the systems Google needs to discover, understand, and rank your pages.",
    icon: "Settings2",
    features: [
      "Crawl & indexation diagnostics",
      "Core Web Vitals remediation",
      "JavaScript rendering analysis",
      "XML sitemaps & robots strategy",
      "Canonicalization & duplicate control",
      "Log file & Search Console analysis",
    ],
    outcomes: [
      "Cleaner index and better crawl budget use",
      "Improved page experience signals",
      "Fewer technical regressions",
      "Faster discovery of new pages",
    ],
    process: [
      {
        step: "01",
        title: "Deep Technical Audit",
        description: "Crawl data, GSC, CWV, and rendering issues mapped by impact.",
      },
      {
        step: "02",
        title: "Prioritized Fixes",
        description: "Engineers and SEOs align on the highest-ROI remediation plan.",
      },
      {
        step: "03",
        title: "Validate & Monitor",
        description: "We confirm fixes in production and set ongoing health checks.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our engineering team?",
        answer:
          "Absolutely. We deliver clear tickets, acceptance criteria, and validation steps your developers can ship confidently.",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    description:
      "Strategy, briefs, and publish-ready content built for search intent, E-E-A-T, and conversion.",
    longDescription:
      "We create content systems — not random blog posts. Research-backed briefs, expert writing, AI-assisted workflows with human QA, and refreshes that keep winners winning.",
    icon: "FileText",
    features: [
      "Keyword clustering & content calendars",
      "SERP-informed content briefs",
      "Editorial writing & expert review",
      "AI draft humanization & fact-checking",
      "Content refreshes for decaying pages",
      "Distribution & internal linking plans",
    ],
    outcomes: [
      "Topical authority in your category",
      "Higher rankings for informational & commercial queries",
      "Content that supports sales enablement",
      "Repeatable editorial operations",
    ],
    process: [
      {
        step: "01",
        title: "Strategy",
        description: "Map topics to funnel stages and revenue opportunity.",
      },
      {
        step: "02",
        title: "Produce",
        description: "Briefs, drafts, expert review, and publish-ready QA.",
      },
      {
        step: "03",
        title: "Distribute & Link",
        description: "Internal links, promotions, and entity reinforcement.",
      },
      {
        step: "04",
        title: "Refresh Winners",
        description: "Update decaying pages and expand what already ranks.",
      },
    ],
    faqs: [
      {
        question: "Do you use AI for content?",
        answer:
          "As a drafting accelerator — never as a publish button. Every piece gets human editing, fact-checking, and brand voice alignment.",
      },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortTitle: "Lead Gen",
    description:
      "Organic funnels, landing systems, and capture flows that turn search demand into pipeline.",
    longDescription:
      "Traffic without conversion is expensive vanity. We align SEO pages, CTAs, forms, and nurture paths so high-intent visitors become qualified leads.",
    icon: "Target",
    features: [
      "High-intent landing page strategy",
      "Lead magnet & offer design",
      "Form UX and CRM-ready capture",
      "Conversion rate optimization",
      "Attribution & pipeline reporting",
      "Newsletter and nurture hooks",
    ],
    outcomes: [
      "More qualified inbound leads",
      "Higher form completion rates",
      "Clearer search-to-pipeline attribution",
      "Reusable conversion playbooks",
    ],
    process: [
      {
        step: "01",
        title: "Funnel Map",
        description: "Identify intent stages and friction in the current journey.",
      },
      {
        step: "02",
        title: "Build Capture Paths",
        description: "Pages, offers, and forms aligned to buyer questions.",
      },
      {
        step: "03",
        title: "Optimize & Scale",
        description: "Test CTAs, messaging, and routing into your CRM.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our CRM?",
        answer:
          "Yes. Forms are built CRM-integration ready (HubSpot, Salesforce, and custom webhooks).",
      },
    ],
  },
  {
    slug: "white-label-seo",
    title: "White Label SEO",
    shortTitle: "White Label",
    description:
      "Reliable, white-label SEO delivery for agencies that need capacity without hiring chaos.",
    longDescription:
      "Stay client-facing while we handle strategy, execution, and reporting under your brand. Clear SLAs, branded deliverables, and communication that protects your relationships.",
    icon: "Layers",
    features: [
      "Branded reports and deliverables",
      "Dedicated account pods",
      "Audits, content, technical & local SEO",
      "Flexible retainer capacity",
      "Slack/email communication protocols",
      "NDA-backed partnership terms",
    ],
    outcomes: [
      "Scale delivery without headcount risk",
      "Consistent quality across clients",
      "Faster proposal-to-kickoff cycles",
      "Protected client relationships",
    ],
    process: [
      {
        step: "01",
        title: "Partner Onboarding",
        description: "Brand guidelines, communication rules, and delivery standards.",
      },
      {
        step: "02",
        title: "Client Kickoffs",
        description: "We run (or support) discovery under your agency brand.",
      },
      {
        step: "03",
        title: "Execute & Report",
        description: "White-labeled workstreams with predictable weekly cadence.",
      },
    ],
    faqs: [
      {
        question: "Will clients know we use a partner?",
        answer:
          "Only if you want them to. Default is fully white-labeled communication and deliverables.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
