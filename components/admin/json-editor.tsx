"use client";

import { useEffect, useState } from "react";
import type { CmsPageId } from "@/lib/cms/types";

/** Editor for services / portfolio arrays as readable JSON. */
export function AdminJsonEditor({
  page,
  title,
  help,
}: {
  page: CmsPageId;
  title: string;
  help: string;
}) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/admin/content?page=${page}`);
      if (res.status === 401) {
        window.location.href = "/admin";
        return;
      }
      const json = (await res.json()) as { data?: unknown };
      if (!cancelled) setText(JSON.stringify(json.data ?? [], null, 2));
    })();
    return () => {
      cancelled = true;
    };
  }, [page]);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setStatus("");
    try {
      const parsed = JSON.parse(text) as unknown;
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, data: parsed }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Save failed");
        return;
      }
      setStatus("Saved. Live site will show updates shortly.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSave} className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <a href="/admin" className="text-sm text-brand-muted hover:text-brand-accent">
            ← All pages
          </a>
          <h2 className="mt-1 font-display text-2xl font-bold">{title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-brand-muted">{help}</p>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={28}
        spellCheck={false}
        className="w-full rounded-xl border border-brand-ink/15 bg-white px-3 py-3 font-mono text-xs leading-relaxed outline-none focus:border-brand-accent"
      />
      {status ? <p className="text-sm text-emerald-700">{status}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
