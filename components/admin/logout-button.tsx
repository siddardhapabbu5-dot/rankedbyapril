"use client";

export function AdminLogoutButton() {
  return (
    <button
      type="button"
      className="rounded-full border border-brand-ink/15 px-3 py-1.5 text-sm font-medium hover:border-brand-accent hover:text-brand-accent"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        window.location.href = "/admin";
      }}
    >
      Log out
    </button>
  );
}
