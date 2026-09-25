import { NextResponse } from "next/server";
import { z } from "zod";
import { clientIp, isHoneypotTriggered, rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    const limited = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
    if (!limited.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again shortly." },
        { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } }
      );
    }

    const body = await request.json();
    const data = schema.parse(body);

    // Silent success for bots — don't tip them off
    if (isHoneypotTriggered(data.website)) {
      return NextResponse.json({ ok: true });
    }

    const { website: _hp, ...payload } = data;

    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "rankedbyapril-contact",
          receivedAt: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
