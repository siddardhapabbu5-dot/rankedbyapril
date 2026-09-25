import { NextResponse } from "next/server";
import { z } from "zod";
import { clientIp, isHoneypotTriggered, rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  email: z.string().email(),
  website: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    const limited = rateLimit(`newsletter:${ip}`, { limit: 8, windowMs: 60_000 });
    if (!limited.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests." },
        { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } }
      );
    }

    const body = await request.json();
    const data = schema.parse(body);

    if (isHoneypotTriggered(data.website)) {
      return NextResponse.json({ ok: true });
    }

    if (process.env.NEWSLETTER_WEBHOOK_URL) {
      await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          source: "rankedbyapril-newsletter",
          receivedAt: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
