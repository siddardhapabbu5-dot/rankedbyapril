import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import {
  getAbout,
  getContact,
  getHome,
  getPortfolioContent,
  getServicesContent,
  getSettings,
  saveAbout,
  saveContact,
  saveHome,
  savePortfolio,
  saveServices,
  saveSettings,
  seedEditableContentIfMissing,
} from "@/lib/cms/store";
import type { CmsPageId } from "@/lib/cms/types";

const LOADERS = {
  settings: getSettings,
  home: getHome,
  about: getAbout,
  contact: getContact,
  services: getServicesContent,
  portfolio: getPortfolioContent,
} as const;

const SAVERS = {
  settings: saveSettings,
  home: saveHome,
  about: saveAbout,
  contact: saveContact,
  services: saveServices,
  portfolio: savePortfolio,
} as const;

function isPageId(value: string): value is CmsPageId {
  return value in LOADERS;
}

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  await seedEditableContentIfMissing();
  const id = new URL(request.url).searchParams.get("page") || "";
  if (!isPageId(id)) {
    return NextResponse.json({ ok: false, error: "Unknown page" }, { status: 400 });
  }
  const data = await LOADERS[id]();
  return NextResponse.json({ ok: true, data });
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as
    | { page?: string; data?: unknown }
    | null;
  const id = body?.page || "";
  if (!isPageId(id) || body?.data == null) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  await SAVERS[id](body.data as never);

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/contact");
  revalidatePath("/services");
  revalidatePath("/portfolio");
  if (id === "services") revalidatePath("/services", "layout");
  if (id === "portfolio") revalidatePath("/portfolio", "layout");

  return NextResponse.json({ ok: true });
}
