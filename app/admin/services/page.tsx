import { redirect } from "next/navigation";
import { AdminJsonEditor } from "@/components/admin/json-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminServicesPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminJsonEditor
      page="services"
      title="Services"
      help="Edit each service’s title, short description, long description, features, and outcomes. Keep the slug values unchanged (seo, ai-seo, etc.) so page URLs still work."
    />
  );
}
