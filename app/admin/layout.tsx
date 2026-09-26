import type { Metadata } from "next";
import { AdminLogoutButton } from "@/components/admin/logout-button";
import { seedEditableContentIfMissing } from "@/lib/cms/store";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export const metadata: Metadata = {
  title: "Content admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await seedEditableContentIfMissing().catch(() => undefined);
  const authed = await isAdminAuthenticated();

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-brand-ink">
      <div className="border-b border-brand-ink/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              rankedbyapril
            </p>
            <p className="font-display text-lg font-bold">Content editor</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="/" className="text-brand-muted hover:text-brand-accent">
              View site
            </a>
            {authed ? <AdminLogoutButton /> : null}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
    </div>
  );
}
