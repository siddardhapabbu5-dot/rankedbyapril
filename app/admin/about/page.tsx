import { redirect } from "next/navigation";
import { AdminPageEditor } from "@/components/admin/page-editor";
import { isAdminAuthenticated } from "@/lib/cms/auth";

export default async function AdminAboutPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminPageEditor
      page="about"
      title="About page"
      fields={[
        { key: "eyebrow", label: "Eyebrow" },
        { key: "title", label: "Main title", multiline: true },
        { key: "intro", label: "Intro paragraph", multiline: true },
        { key: "storyEyebrow", label: "Story eyebrow" },
        { key: "storyTitle", label: "Story title", multiline: true },
        { key: "storyDescription", label: "Story description", multiline: true },
        { key: "storyP1", label: "Story paragraph 1", multiline: true },
        { key: "storyP2", label: "Story paragraph 2", multiline: true },
        { key: "missionTitle", label: "Mission title" },
        { key: "missionBody", label: "Mission body", multiline: true },
        { key: "visionTitle", label: "Vision title" },
        { key: "visionBody", label: "Vision body", multiline: true },
      ]}
    />
  );
}
