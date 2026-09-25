export type ResultSite = {
  domain: string;
  niche: string;
  keywords: string;
  keywordsGrowth?: string;
  traffic: string;
  trafficGrowth?: string;
  featured?: boolean;
  size?: "lg" | "md" | "sm";
};

export const resultSites: ResultSite[] = [
  {
    domain: "keychron.com",
    niche: "Mechanical keyboards · DTC",
    keywords: "915.7k",
    keywordsGrowth: "2,963%",
    traffic: "31.3M",
    trafficGrowth: "3,594%",
    featured: true,
    size: "lg",
  },
  {
    domain: "moft.us",
    niche: "Tech accessories",
    keywords: "621.4k",
    keywordsGrowth: "5,962%",
    traffic: "47.8M",
    trafficGrowth: "6,492%",
    featured: true,
    size: "md",
  },
  {
    domain: "arccaptain.com",
    niche: "Welding gear",
    keywords: "592.8k",
    traffic: "42.8M",
    size: "sm",
  },
  {
    domain: "vantrue.com",
    niche: "Dash cams",
    keywords: "354.8k",
    keywordsGrowth: "3,284%",
    traffic: "18.5M",
    trafficGrowth: "3,569%",
    size: "sm",
  },
  {
    domain: "btartboxnails.com",
    niche: "Press-on nails · Beauty",
    keywords: "159.1k",
    traffic: "31.4M",
    size: "sm",
  },
  {
    domain: "roughlinen.com",
    niche: "Home & linen",
    keywords: "152.5k",
    keywordsGrowth: "5,513%",
    traffic: "19.3M",
    trafficGrowth: "6,443%",
    size: "sm",
  },
  {
    domain: "chinalegalexperts.com",
    niche: "B2B legal services",
    keywords: "126.8k",
    traffic: "9M",
    size: "sm",
  },
  {
    domain: "isinwheel.com",
    niche: "E-scooters · AI Overview source",
    keywords: "83.7k",
    traffic: "6.3M",
    size: "sm",
  },
];

export const moreResultSites = [
  { domain: "tracysdog.com", keywords: "417k", traffic: "7.5M" },
  { domain: "carbonwellnessmd.com", keywords: "119.8k", traffic: "8.5M" },
  { domain: "onlinesellersolutions.com", keywords: "92.3k", traffic: "10.2M" },
  { domain: "tantaly.com", keywords: "84k", traffic: "1.6M" },
  { domain: "cycrown.com", keywords: "65.3k", traffic: "2.3M" },
  { domain: "prepitpackitshipit.com", keywords: "57.9k", traffic: "6.5M" },
  { domain: "iscooterglobal.de", keywords: "30.9k", traffic: "1.1M" },
  { domain: "circooter.com", keywords: "7.4k", traffic: "894.9k" },
  { domain: "resiners.com", keywords: "7.1k", traffic: "777.8k" },
  { domain: "pasturepaws.com", keywords: "2.8k", traffic: "553.1k" },
  { domain: "caydo.com", keywords: "1.5k", traffic: "264.4k" },
  { domain: "arcadiafurnishing.com", keywords: "80", traffic: "24.5k" },
];

export const resultsDisclaimer =
  "* Snapshots from third-party SEO tools (Semrush), taken from the brands' live dashboards. SEO is a team sport: these numbers reflect combined efforts across content, technical SEO, brand authority, and broader marketing, with me driving the SEO and content side.";
