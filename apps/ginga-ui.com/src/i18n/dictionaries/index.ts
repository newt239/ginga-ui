import { en } from "./en";
import { ja } from "./ja";

import type { Locale } from "../locales";
import type { Dictionary } from "./ja";

export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale) {
  return DICTIONARIES[locale];
}
