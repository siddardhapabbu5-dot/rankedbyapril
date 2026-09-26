import { getHome, getPortfolioContent, getServicesContent, getSettings } from "@/lib/cms/store";
import { siteConfig } from "@/lib/site-config";
import { services as baseServices } from "@/lib/data/services";
import { caseStudies as baseCases } from "@/lib/data/content";
import type { CaseStudy, Service } from "@/types";

export async function resolveSiteConfig() {
  const s = await getSettings();
  return {
    ...siteConfig,
    name: s.name,
    tagline: s.tagline,
    description: s.description,
    email: s.email,
    phone: s.phone,
    whatsapp: s.whatsapp,
    calendly: s.calendly,
    address: s.address,
    social: s.social,
  };
}

export async function resolveHomeContent() {
  return getHome();
}

export async function resolveServices(): Promise<Service[]> {
  const edits = await getServicesContent();
  const bySlug = new Map(edits.map((e) => [e.slug, e]));
  return baseServices.map((svc) => {
    const edit = bySlug.get(svc.slug);
    if (!edit) return svc;
    return {
      ...svc,
      title: edit.title,
      shortTitle: edit.shortTitle,
      description: edit.description,
      longDescription: edit.longDescription,
      features: edit.features.length ? edit.features : svc.features,
      outcomes: edit.outcomes.length ? edit.outcomes : svc.outcomes,
    };
  });
}

export async function resolveCaseStudies(): Promise<CaseStudy[]> {
  const edits = await getPortfolioContent();
  const bySlug = new Map(edits.map((e) => [e.slug, e]));
  return baseCases.map((c) => {
    const edit = bySlug.get(c.slug);
    if (!edit) return c;
    return {
      ...c,
      title: edit.title,
      client: edit.client,
      industry: edit.industry,
      summary: edit.summary,
      challenge: edit.challenge,
      solution: edit.solution,
    };
  });
}
