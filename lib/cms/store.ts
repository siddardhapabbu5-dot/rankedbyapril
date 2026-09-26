import { promises as fs } from "fs";
import path from "path";
import {
  defaultAbout,
  defaultContact,
  defaultHome,
  defaultPortfolio,
  defaultServices,
  defaultSettings,
} from "@/lib/cms/defaults";
import type {
  AboutContent,
  CmsPageId,
  ContactContent,
  HomeContent,
  PortfolioEditItem,
  ServiceEditItem,
  SiteSettingsContent,
} from "@/lib/cms/types";

function contentRoot() {
  return process.env.CONTENT_DIR
    ? path.resolve(process.env.CONTENT_DIR)
    : path.join(process.cwd(), "content", "editable");
}

function filePath(id: CmsPageId) {
  return path.join(contentRoot(), `${id}.json`);
}

async function ensureDir() {
  await fs.mkdir(contentRoot(), { recursive: true });
}

async function readJson<T>(id: CmsPageId, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(filePath(id), "utf8");
    return { ...fallback, ...JSON.parse(raw) } as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(id: CmsPageId, data: T): Promise<void> {
  await ensureDir();
  await fs.writeFile(filePath(id), JSON.stringify(data, null, 2), "utf8");
}

export async function getSettings(): Promise<SiteSettingsContent> {
  return readJson("settings", defaultSettings());
}

export async function getHome(): Promise<HomeContent> {
  const fallback = defaultHome();
  try {
    const raw = await fs.readFile(filePath("home"), "utf8");
    const parsed = JSON.parse(raw) as Partial<HomeContent>;
    return {
      hero: { ...fallback.hero, ...parsed.hero, stats: { ...fallback.hero.stats, ...parsed.hero?.stats } },
      contactCta: { ...fallback.contactCta, ...parsed.contactCta },
      footerBlurb: parsed.footerBlurb ?? fallback.footerBlurb,
    };
  } catch {
    return fallback;
  }
}

export async function getAbout(): Promise<AboutContent> {
  return readJson("about", defaultAbout());
}

export async function getContact(): Promise<ContactContent> {
  return readJson("contact", defaultContact());
}

export async function getServicesContent(): Promise<ServiceEditItem[]> {
  try {
    const raw = await fs.readFile(filePath("services"), "utf8");
    const parsed = JSON.parse(raw) as ServiceEditItem[];
    if (Array.isArray(parsed) && parsed.length) return parsed;
  } catch {
    /* seed */
  }
  return defaultServices();
}

export async function getPortfolioContent(): Promise<PortfolioEditItem[]> {
  try {
    const raw = await fs.readFile(filePath("portfolio"), "utf8");
    const parsed = JSON.parse(raw) as PortfolioEditItem[];
    if (Array.isArray(parsed) && parsed.length) return parsed;
  } catch {
    /* seed */
  }
  return defaultPortfolio();
}

export async function saveSettings(data: SiteSettingsContent) {
  await writeJson("settings", data);
}

export async function saveHome(data: HomeContent) {
  await writeJson("home", data);
}

export async function saveAbout(data: AboutContent) {
  await writeJson("about", data);
}

export async function saveContact(data: ContactContent) {
  await writeJson("contact", data);
}

export async function saveServices(data: ServiceEditItem[]) {
  await writeJson("services", data);
}

export async function savePortfolio(data: PortfolioEditItem[]) {
  await writeJson("portfolio", data);
}

export async function seedEditableContentIfMissing() {
  await ensureDir();
  const files: CmsPageId[] = ["settings", "home", "about", "contact", "services", "portfolio"];
  for (const id of files) {
    try {
      await fs.access(filePath(id));
    } catch {
      if (id === "settings") await saveSettings(defaultSettings());
      if (id === "home") await saveHome(defaultHome());
      if (id === "about") await saveAbout(defaultAbout());
      if (id === "contact") await saveContact(defaultContact());
      if (id === "services") await saveServices(defaultServices());
      if (id === "portfolio") await savePortfolio(defaultPortfolio());
    }
  }
}
