import { redirect } from "next/navigation";
import { AdminPageEditor } from "@/components/admin/page-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminHomeEditPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminPageEditor
      page="home"
      title="Home page"
      fields={[
        { key: "hero.titleBefore", label: "Hero title (before visibility)" },
        { key: "hero.visibility", label: "Hero accent word: visibility" },
        { key: "hero.titleMiddle", label: "Hero title (middle)" },
        { key: "hero.revenue", label: "Hero accent word: revenue" },
        { key: "hero.titleAfter", label: "Hero title (after)" },
        { key: "hero.bodyBefore", label: "Hero body (before strong 1)" },
        { key: "hero.bodyStrong1", label: "Hero body strong 1", multiline: true },
        { key: "hero.bodyMid", label: "Hero body (middle)" },
        { key: "hero.bodyStrong2", label: "Hero body strong 2", multiline: true },
        { key: "hero.bodyAfter", label: "Hero body (after)", multiline: true },
        { key: "hero.roleLabel", label: "Name under photo" },
        { key: "hero.roleTitle", label: "Title under photo", multiline: true },
        { key: "hero.stats.years", label: "Stat label: years" },
        { key: "hero.stats.brands", label: "Stat label: brands" },
        { key: "hero.stats.views", label: "Stat label: views" },
        { key: "hero.stats.aiLabel", label: "Stat label: AI", multiline: true },
        { key: "contactCta.eyebrow", label: "Bottom CTA eyebrow" },
        { key: "contactCta.title", label: "Bottom CTA title", multiline: true },
        { key: "contactCta.description", label: "Bottom CTA description", multiline: true },
        { key: "contactCta.bookCall", label: "Bottom CTA button" },
        { key: "contactCta.email", label: "Bottom CTA email button label" },
        { key: "footerBlurb", label: "Footer blurb", multiline: true },
      ]}
    />
  );
}
