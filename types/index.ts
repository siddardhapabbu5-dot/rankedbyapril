export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  outcomes: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "seo" | "website" | "ai-seo" | "local-seo" | "content";
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; change?: string }[];
  metrics: { label: string; before: string; after: string }[];
  tags: string[];
  image: string;
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: string;
  featured?: boolean;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: { twitter?: string; linkedin?: string };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Value = {
  title: string;
  description: string;
  icon: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
};
