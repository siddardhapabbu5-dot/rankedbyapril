import { redirect } from "next/navigation";
import { AdminJsonEditor } from "@/components/admin/json-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminPortfolioPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminJsonEditor
      page="portfolio"
      title="Portfolio / case studies"
      help="Edit case study titles, summaries, challenges, and solutions. Keep slug values unchanged so portfolio URLs still work."
    />
  );
}
