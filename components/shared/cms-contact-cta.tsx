import { ContactCta, type ContactCtaCopy } from "@/components/shared/contact-cta";
import { resolveHomeContent, resolveSiteConfig } from "@/lib/cms/public";

/** Server CTA that reads editable home + settings content. */
export async function CmsContactCta(overrides?: ContactCtaCopy) {
  const [home, site] = await Promise.all([resolveHomeContent(), resolveSiteConfig()]);
  return (
    <ContactCta
      eyebrow={overrides?.eyebrow ?? home.contactCta.eyebrow}
      title={overrides?.title ?? home.contactCta.title}
      description={overrides?.description ?? home.contactCta.description}
      bookCall={overrides?.bookCall ?? home.contactCta.bookCall}
      emailLabel={overrides?.emailLabel ?? home.contactCta.email}
      email={overrides?.email ?? site.email}
    />
  );
}
