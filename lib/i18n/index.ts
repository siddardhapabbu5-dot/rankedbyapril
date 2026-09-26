import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { ceb } from "./dictionaries/ceb";
import { tl } from "./dictionaries/tl";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ceb,
  tl,
};

export type { Dictionary };
