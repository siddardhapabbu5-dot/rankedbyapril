"use client";

import { useEffect, useState } from "react";
import type { CmsPageId } from "@/lib/cms/types";

type Field =
  | { key: string; label: string; multiline?: boolean }
  | { key: string; label: string; type: "list" };

export function AdminPageEditor({
  page,
  title,
  fields,
}: {
  page: CmsPageId;
  title: string;
  fields: Field[];
}) {
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/admin/content?page=${page}`);
      if (res.status === 401) {
        window.location.href = "/admin";
        return;
      }
      const json = (await res.json()) as { ok?: boolean; data?: Record<string, unknown> };
      if (!cancelled && json.data) setData(flatten(json.data));
    })();
    return () => {
      cancelled = true;
    };
  }, [page]);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    setError("");
    setStatus("");
    try {
      const payload = unflatten(data, page);
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, data: payload }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Save failed");
        return;
      }
      setStatus("Saved. Live site will show updates shortly.");
    } catch {
      setError("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }

  if (!data) {
    return <p className="text-sm text-brand-muted">Loading editor…</p>;
  }

  return (
    <form onSubmit={onSave} className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <a href="/admin" className="text-sm text-brand-muted hover:text-brand-accent">
            ← All pages
          </a>
          <h2 className="mt-1 font-display text-2xl font-bold">{title}</h2>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>

      {fields.map((field) => {
        const value = String(data[field.key] ?? "");
        if ("type" in field && field.type === "list") {
          return (
            <label key={field.key} className="block">
              <span className="text-sm font-medium">{field.label} (one per line)</span>
              <textarea
                rows={6}
                value={value}
                onChange={(e) => setData({ ...data, [field.key]: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-brand-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-accent"
              />
            </label>
          );
        }
        const multiline = "multiline" in field && field.multiline;
        return (
          <label key={field.key} className="block">
            <span className="text-sm font-medium">{field.label}</span>
            {multiline ? (
              <textarea
                rows={4}
                value={value}
                onChange={(e) => setData({ ...data, [field.key]: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-brand-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-accent"
              />
            ) : (
              <input
                value={value}
                onChange={(e) => setData({ ...data, [field.key]: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-brand-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-accent"
              />
            )}
          </label>
        );
      })}

      {status ? <p className="text-sm text-emerald-700">{status}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}

function flatten(input: Record<string, unknown>, prefix = ""): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flatten(value as Record<string, unknown>, path));
    } else if (Array.isArray(value)) {
      if (value.every((v) => typeof v === "string")) out[path] = value.join("\n");
      else out[path] = JSON.stringify(value, null, 2);
    } else {
      out[path] = value ?? "";
    }
  }
  return out;
}

function setPath(obj: Record<string, unknown>, path: string, value: unknown) {
  const parts = path.split(".");
  let cur: Record<string, unknown> = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i]!;
    if (!cur[p] || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p] as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]!] = value;
}

function unflatten(flat: Record<string, unknown>, page: CmsPageId) {
  if (page === "services" || page === "portfolio") {
    // stored as JSON string in one field when using list editors below
    const raw = flat["__json"];
    if (typeof raw === "string") return JSON.parse(raw);
  }
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(flat)) {
    if (key.endsWith("features") || key.endsWith("outcomes")) {
      setPath(
        out,
        key,
        String(value)
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      );
    } else {
      setPath(out, key, value);
    }
  }
  return out;
}
