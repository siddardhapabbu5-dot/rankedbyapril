export type SiteSettingsContent = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  calendly: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
};

export type HomeContent = {
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
  footerBlurb: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  intro: string;
  storyEyebrow: string;
  storyTitle: string;
  storyDescription: string;
  storyP1: string;
  storyP2: string;
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  formTitle: string;
  bookTitle: string;
  bookDescription: string;
  bookButton: string;
};

export type ServiceEditItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  outcomes: string[];
};

export type PortfolioEditItem = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
};

export type CmsPageId =
  | "settings"
  | "home"
  | "about"
  | "contact"
  | "services"
  | "portfolio";

export const CMS_PAGES: { id: CmsPageId; label: string; href: string }[] = [
  { id: "settings", label: "Site settings (phone, email, address)", href: "/admin/settings" },
  { id: "home", label: "Home page", href: "/admin/home" },
  { id: "about", label: "About page", href: "/admin/about" },
  { id: "contact", label: "Contact page", href: "/admin/contact" },
  { id: "services", label: "Services", href: "/admin/services" },
  { id: "portfolio", label: "Portfolio / case studies", href: "/admin/portfolio" },
];
