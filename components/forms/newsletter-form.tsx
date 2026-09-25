"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:max-w-[220px]"
      />
      <Button type="submit" disabled={status === "loading"} size="default">
        {status === "loading" ? "Joining…" : "Subscribe"}
      </Button>
      {status === "success" && (
        <p className="text-xs text-brand-accent sm:col-span-2" role="status">
          You&apos;re on the list.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-600" role="alert">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
