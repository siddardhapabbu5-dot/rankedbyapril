/**
 * Sanity CMS integration stub.
 * When ready: npm install next-sanity sanity @sanity/image-url
 * and configure projectId / dataset via env vars.
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: true,
};

export function isSanityConfigured() {
  return Boolean(sanityConfig.projectId);
}

/** Placeholder fetcher — swap for sanityClient.fetch when CMS is connected */
export async function fetchSanityContent<T>(_query: string): Promise<T | null> {
  if (!isSanityConfigured()) return null;
  return null;
}
