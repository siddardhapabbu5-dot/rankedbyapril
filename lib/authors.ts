import type { Author } from "@/types";
import { siteConfig } from "@/lib/site-config";

export const authors: Record<string, Author> = {
  april: {
    slug: "april",
    name: "April Reyes",
    role: "Founder & Strategy Lead",
    bio: "April leads organic growth strategy at rankedbyapril, specializing in SEO systems and AI search visibility for growth-stage brands.",
    image: "/images/team-april.jpg",
    social: {
      linkedin: siteConfig.social.linkedin,
      twitter: siteConfig.social.twitter,
    },
  },
  mia: {
    slug: "mia",
    name: "Mia Torres",
    role: "Content & GEO Lead",
    bio: "Mia builds answer-first content engines designed to rank in classic search and earn citations from AI platforms.",
    image: "/images/team-mia.jpg",
    social: { linkedin: siteConfig.social.linkedin },
  },
};

export function getAuthor(slug: string) {
  return authors[slug];
}
