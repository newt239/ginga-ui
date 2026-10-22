"use client";

import { createContext, useContext } from "react";
import { getDictionary } from "./dictionaries";
import { DEFAULT_LOCALE } from "./locales";

import type { Locale } from "./locales";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const LocaleProvider = LocaleContext.Provider;

export function useLocale() {
  return useContext(LocaleContext);
}

export function useDictionary() {
  return getDictionary(useLocale());
}
