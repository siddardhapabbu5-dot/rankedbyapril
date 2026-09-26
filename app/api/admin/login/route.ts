import { NextResponse } from "next/server";
import {
  adminPasswordConfigured,
  createAdminToken,
  setAdminCookie,
  verifyAdminPassword,
} from "@/lib/cms/auth";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!adminPasswordConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Admin password is not configured on the server." },
      { status: 503 }
    );
  }

  const ip = clientIp(request);
  const limited = rateLimit(`admin-login:${ip}`, { limit: 8, windowMs: 60_000 });
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again shortly." },
      { status: 429 }
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password ?? "";
  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ ok: false, error: "Incorrect password." }, { status: 401 });
  }

  await setAdminCookie(createAdminToken());
  return NextResponse.json({ ok: true });
}
