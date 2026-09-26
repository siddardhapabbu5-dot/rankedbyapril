"use client";

import { useState } from "react";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "Login failed");
        return;
      }
      window.location.href = "/admin";
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-sm">
      <h2 className="font-display text-2xl font-bold">Client login</h2>
      <p className="mt-2 text-sm text-brand-muted">
        Enter the content password to edit Home, About, Contact, Services, and Portfolio text.
      </p>
      <label className="mt-6 block text-sm font-medium" htmlFor="admin-password">
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-brand-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-accent"
      />
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
