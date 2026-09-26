import { redirect } from "next/navigation";
import { AdminPageEditor } from "@/components/admin/page-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminSettingsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminPageEditor
      page="settings"
      title="Site settings"
      fields={[
        { key: "name", label: "Brand name" },
        { key: "tagline", label: "Tagline" },
        { key: "description", label: "Site description", multiline: true },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "whatsapp", label: "WhatsApp number (digits, country code)" },
        { key: "calendly", label: "Calendly URL" },
        { key: "address.street", label: "Address street" },
        { key: "address.city", label: "City" },
        { key: "address.state", label: "State / province" },
        { key: "address.zip", label: "ZIP / postal" },
        { key: "address.country", label: "Country" },
        { key: "social.linkedin", label: "LinkedIn URL" },
        { key: "social.twitter", label: "Twitter / X URL" },
        { key: "social.instagram", label: "Instagram URL" },
      ]}
    />
  );
}
