import { AdminLoginForm } from "@/components/admin/login-form";
import { adminPasswordConfigured, isAdminAuthenticated } from "@/lib/cms/auth";
import { CMS_PAGES } from "@/lib/cms/types";

export default async function AdminHomePage() {
  const authed = await isAdminAuthenticated();

  if (!adminPasswordConfigured()) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <p className="font-semibold">Admin is not configured yet</p>
        <p className="mt-2">
          Add <code className="rounded bg-white px-1">ADMIN_PASSWORD</code> (and ideally{" "}
          <code className="rounded bg-white px-1">ADMIN_SECRET</code>) to the server env, restart
          the app, then share the password with your client.
        </p>
      </div>
    );
  }

  if (!authed) {
    return <AdminLoginForm />;
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Choose a page to edit</h2>
      <p className="mt-2 max-w-2xl text-sm text-brand-muted">
        Your client can correct wording on each page below. Changes save to the server and appear on
        the live site after refresh.
      </p>
      <ul className="mt-6 space-y-3">
        {CMS_PAGES.map((page) => (
          <li key={page.id}>
            <a
              href={page.href}
              className="block rounded-2xl border border-brand-ink/10 bg-white px-5 py-4 font-medium transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              {page.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-brand-muted">
        Blog posts are separate MDX files — ask the developer if you need blog editing in this panel
        next.
      </p>
    </div>
  );
}
