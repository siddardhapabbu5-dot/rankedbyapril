"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";
import { services } from "@/lib/data/services";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      trackEvent("generate_lead", {
        service: String(data.service || "unspecified"),
      });
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="service">Service interest</Label>
          <select
            id="service"
            name="service"
            className="flex h-11 w-full rounded-md border border-brand-ink/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-brand-ink dark:text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Monthly budget</Label>
          <select
            id="budget"
            name="budget"
            className="flex h-11 w-full rounded-md border border-brand-ink/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-brand-ink dark:text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="3-5k">$3k – $5k</option>
            <option value="5-10k">$5k – $10k</option>
            <option value="10-20k">$10k – $20k</option>
            <option value="20k+">$20k+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Share your site, goals, and timeline…"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
