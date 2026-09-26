import type {
  CaseStudy,
  FaqItem,
  ProcessStep,
  TeamMember,
  Testimonial,
  Value,
} from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "dtc-organic-growth",
    title: "3,500% organic traffic growth for a DTC accessories brand",
    client: "MOFT-style DTC",
    industry: "Ecommerce · Tech accessories",
    category: "seo",
    summary:
      "Rebuilt category architecture, content clusters, and technical foundations to unlock multi-million monthly organic visits.",
    challenge:
      "Strong product-market fit but thin category pages, weak internal linking, and no scalable content system for high-intent queries.",
    solution:
      "Technical cleanup, collection-page SEO, topical clusters, and a publishing cadence tied to commercial keywords.",
    results: [
      { label: "Organic traffic", value: "47.8M", change: "+6,492%" },
      { label: "Keywords", value: "621k", change: "+5,962%" },
      { label: "Revenue impact", value: "Multiplied", change: "Organic-led" },
    ],
    metrics: [
      { label: "Monthly organic visits", before: "720k", after: "47.8M" },
      { label: "Ranking keywords", before: "10.2k", after: "621k" },
      { label: "Top 3 rankings", before: "180", after: "12.4k" },
    ],
    tags: ["Ecommerce SEO", "Content Clusters", "Technical SEO"],
    image: "/images/case-dtc.jpg",
    featured: true,
  },
  {
    slug: "saas-ai-citations",
    title: "Named #1 in AI answers for a caregiving SaaS",
    client: "Care coordination SaaS",
    industry: "SaaS · Healthtech",
    category: "ai-seo",
    summary:
      "Structured answer-first content that earned citations across ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    challenge:
      "Competitors owned classic rankings, but AI tools rarely mentioned the brand despite strong product fit.",
    solution:
      "Entity consistency, FAQ/schema, quotable page rewrites, and corroboration across trusted third-party sources.",
    results: [
      { label: "AI engines citing", value: "4/4", change: "Major LLMs" },
      { label: "AI Overview slots", value: "Multiple", change: "Live" },
      { label: "Demo requests", value: "+38%", change: "QoQ" },
    ],
    metrics: [
      { label: "Brand AI mentions", before: "Rare", after: "Consistent" },
      { label: "Featured answer rate", before: "2%", after: "19%" },
      { label: "Organic demo rate", before: "1.1%", after: "1.5%" },
    ],
    tags: ["GEO", "AEO", "SaaS SEO"],
    image: "/images/case-saas.jpg",
    featured: true,
  },
  {
    slug: "local-multi-location",
    title: "Local pack dominance for a 24-location service brand",
    client: "Regional service franchise",
    industry: "Home services",
    category: "local-seo",
    summary:
      "Standardized GBP, location pages, and review systems that lifted Maps visibility market by market.",
    challenge:
      "Inconsistent NAP, thin location pages, and uneven review velocity across territories.",
    solution:
      "Location templates, citation cleanup, review automation, and localized content at scale.",
    results: [
      { label: "Local pack presence", value: "+64%", change: "Avg metro" },
      { label: "Direction requests", value: "+41%", change: "YoY" },
      { label: "Call volume", value: "+29%", change: "Organic local" },
    ],
    metrics: [
      { label: "Avg local pack rank", before: "8.2", after: "2.4" },
      { label: "GBP actions / mo", before: "18k", after: "31k" },
      { label: "Review velocity", before: "12/mo", after: "47/mo" },
    ],
    tags: ["Local SEO", "GBP", "Multi-location"],
    image: "/images/case-local.jpg",
    featured: true,
  },
  {
    slug: "enterprise-site-rebuild",
    title: "Enterprise site rebuild with 92+ Lighthouse performance",
    client: "B2B professional services",
    industry: "B2B services",
    category: "website",
    summary:
      "Replatformed to Next.js with a design system, CMS, and SEO architecture that cut bounce and lifted conversions.",
    challenge:
      "Legacy CMS, poor CWV, confusing IA, and marketing unable to ship pages without engineering bottlenecks.",
    solution:
      "Headless rebuild, component library, schema, and editor workflows that keep pages fast and searchable.",
    results: [
      { label: "Lighthouse perf", value: "92+", change: "Mobile" },
      { label: "Conversion rate", value: "+47%", change: "Form submits" },
      { label: "Publish time", value: "-70%", change: "New pages" },
    ],
    metrics: [
      { label: "LCP", before: "4.8s", after: "1.9s" },
      { label: "Bounce rate", before: "62%", after: "41%" },
      { label: "Organic leads", before: "220/mo", after: "410/mo" },
    ],
    tags: ["Web Development", "CWV", "CRO"],
    image: "/images/case-web.jpg",
  },
  {
    slug: "content-engine-health",
    title: "YMYL content engine for a health publisher",
    client: "Health & wellness media",
    industry: "Health · Publishing",
    category: "content",
    summary:
      "Built an expert-reviewed content operation that ranked informational queries while meeting E-E-A-T expectations.",
    challenge:
      "High competition YMYL niche with thin authorship signals and inconsistent medical accuracy.",
    solution:
      "Expert bylines, citation standards, brief templates, and refresh cycles for decaying winners.",
    results: [
      { label: "Organic sessions", value: "+210%", change: "12 months" },
      { label: "Page-one keywords", value: "1,840", change: "+320%" },
      { label: "Avg time on page", value: "+34%", change: "Engagement" },
    ],
    metrics: [
      { label: "Indexed articles", before: "120", after: "480" },
      { label: "Topical clusters", before: "4", after: "18" },
      { label: "Returning visitors", before: "18%", after: "31%" },
    ],
    tags: ["Content Marketing", "E-E-A-T", "YMYL"],
    image: "/images/case-content.jpg",
  },
  {
    slug: "shopify-collection-seo",
    title: "Shopify collection SEO for a beauty DTC brand",
    client: "Beauty ecommerce",
    industry: "Beauty · DTC",
    category: "seo",
    summary:
      "Transformed thin collections into search-winning category hubs with metadata systems at scale.",
    challenge:
      "Hundreds of products, duplicate descriptions, and collections that couldn't rank against established competitors.",
    solution:
      "Collection templates, unique copy systems, internal links, and structured data for products.",
    results: [
      { label: "Collection traffic", value: "+185%", change: "6 months" },
      { label: "Non-brand revenue", value: "+62%", change: "Organic" },
      { label: "Indexed collections", value: "100%", change: "Coverage" },
    ],
    metrics: [
      { label: "Collection rankings", before: "42", after: "310" },
      { label: "Organic CVR", before: "1.4%", after: "2.1%" },
      { label: "Crawl errors", before: "280", after: "12" },
    ],
    tags: ["Shopify SEO", "Ecommerce", "On-page"],
    image: "/images/case-shopify.jpg",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "rankedbyapril didn't just send ranking reports — they rebuilt how we think about organic growth. Pipeline from search is finally predictable.",
    author: "Jordan Hale",
    role: "VP Marketing",
    company: "Northline Commerce",
    rating: 5,
  },
  {
    quote:
      "The AI SEO work was the missing piece. We started showing up in ChatGPT and AI Overviews for the queries that actually drive demos.",
    author: "Priya Nair",
    role: "Head of Growth",
    company: "CareStack Software",
    rating: 5,
  },
  {
    quote:
      "As an agency, their white-label delivery is flawless. Our clients think we grew our SEO team overnight — and the work holds up.",
    author: "Marcus Chen",
    role: "Founder",
    company: "Brightfold Agency",
    rating: 5,
  },
  {
    quote:
      "The site rebuild paid for itself. Faster pages, clearer messaging, and a CMS our team can actually use without tickets.",
    author: "Elena Brooks",
    role: "CMO",
    company: "Harbor Legal Group",
    rating: 5,
  },
];

export const team: TeamMember[] = [
  {
    name: "April Grace Degracia",
    role: "Founder & Strategy Lead",
    bio: "SEO and organic growth leader focused on systems that compound — from technical foundations to AI search visibility.",
    image: "/images/team-april.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Noah Patel",
    role: "Technical SEO Director",
    bio: "Crawl, indexation, and Core Web Vitals specialist who turns Search Console chaos into clean growth capacity.",
    image: "/images/team-noah.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mia Torres",
    role: "Content & GEO Lead",
    bio: "Builds answer-first content engines designed to rank in classic search and get cited by AI platforms.",
    image: "/images/team-mia.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sam Okonkwo",
    role: "Head of Web Experience",
    bio: "Designs and ships conversion-focused Next.js experiences with accessibility and performance as defaults.",
    image: "/images/team-sam.jpg",
    linkedin: "https://linkedin.com",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Start with the goal",
    description:
      "We learn the business, analytics, competitors, and revenue priorities before proposing tactics.",
  },
  {
    number: "02",
    title: "Fix the foundation",
    description:
      "Technical health, structure, and on-page gaps get cleared so growth work isn't wasted.",
  },
  {
    number: "03",
    title: "Build the strategy",
    description:
      "Keywords, intent, and business value shape a prioritized roadmap your team can follow.",
  },
  {
    number: "04",
    title: "Create and optimize",
    description:
      "We ship pages, content, and experiences built for people — and structured for search and AI.",
  },
  {
    number: "05",
    title: "Review and QA",
    description:
      "Metadata, links, accuracy, and conversion paths are checked before anything goes live.",
  },
  {
    number: "06",
    title: "Measure and improve",
    description:
      "Rankings, traffic, engagement, and conversions guide what we expand, refresh, or cut.",
  },
];

export const values: Value[] = [
  {
    title: "Outcomes over vanity",
    description:
      "We optimize for revenue, pipeline, and durable visibility — not screenshot-friendly ranking charts alone.",
    icon: "TrendingUp",
  },
  {
    title: "Honest by default",
    description:
      "No ranking guarantees. Clear tradeoffs, plain-English reporting, and strategies you can defend internally.",
    icon: "Shield",
  },
  {
    title: "Systems that compound",
    description:
      "Playbooks, templates, and operating cadence so growth continues after the initial wins.",
    icon: "Layers",
  },
  {
    title: "Built for the new SERP",
    description:
      "Classic SEO plus AEO/GEO — because discovery now happens in blue links and AI answers.",
    icon: "Sparkles",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What makes rankedbyapril different from other SEO agencies?",
    answer:
      "We combine classic SEO, AI search optimization (AEO/GEO), and conversion-focused web development in one operating system. You get strategy, execution, and measurement tied to business outcomes — not disconnected deliverables.",
  },
  {
    question: "Do you work with companies outside the United States?",
    answer:
      "Yes. We support clients across North America, Europe, and APAC with async-friendly workflows and overlapping hours for key calls.",
  },
  {
    question: "What's included in an AI SEO / GEO engagement?",
    answer:
      "An AI visibility audit, quotability rewrites, entity/schema work, crawler access checks, and citation tracking across major answer engines — alongside the SEO foundation those citations depend on.",
  },
  {
    question: "Can you white-label SEO for our agency?",
    answer:
      "Yes. Our white-label program includes branded reporting, dedicated delivery pods, and communication protocols that keep your client relationships protected.",
  },
  {
    question: "How do engagements typically start?",
    answer:
      "Book a strategy call or send your site + goals via the contact form. We'll reply with initial observations and a proposed next step — often including a focused mini-audit.",
  },
];

export const clientLogos = [
  "Northline",
  "CareStack",
  "Brightfold",
  "Harbor Legal",
  "Keystone DTC",
  "Lumen Health",
  "Arc & Co",
  "Vellum Apps",
];

export const trustBadges = [
  { label: "5+ years", sub: "organic growth focus" },
  { label: "30+ brands", sub: "across ecommerce & SaaS" },
  { label: "AI-ready", sub: "GEO & AEO systems" },
  { label: "Enterprise", sub: "delivery standards" },
];
