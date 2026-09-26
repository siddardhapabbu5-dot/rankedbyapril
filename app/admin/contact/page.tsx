import { redirect } from "next/navigation";
import { AdminPageEditor } from "@/components/admin/page-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminContactEditPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminPageEditor
      page="contact"
      title="Contact page"
      fields={[
        { key: "eyebrow", label: "Eyebrow" },
        { key: "title", label: "Title", multiline: true },
        { key: "description", label: "Description", multiline: true },
        { key: "formTitle", label: "Form title" },
        { key: "bookTitle", label: "Book a call title" },
        { key: "bookDescription", label: "Book a call description", multiline: true },
        { key: "bookButton", label: "Calendly button label" },
      ]}
    />
  );
}
