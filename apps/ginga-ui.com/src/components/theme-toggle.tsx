"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@ginga-ui/core";
import { Monitor, Moon, Sun } from "lucide-react";
import { useDictionary } from "#/i18n/locale-context";

type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "ginga-docs-theme";
const NEXT_PREFERENCE: Record<ThemePreference, ThemePreference> = {
  system: "light",
  light: "dark",
  dark: "system",
};
const ICONS: Record<ThemePreference, React.ReactNode> = {
  system: <Monitor />,
  light: <Sun />,
  dark: <Moon />,
};

const listeners = new Set<() => void>();

function readPreference(): ThemePreference {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : "system";
}

function writePreference(preference: ThemePreference) {
  const root = document.documentElement;
  try {
    if (preference === "system") {
      delete root.dataset.theme;
      localStorage.removeItem(STORAGE_KEY);
    } else {
      root.dataset.theme = preference;
      localStorage.setItem(STORAGE_KEY, preference);
    }
  } catch {
    if (preference !== "system") root.dataset.theme = preference;
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function ThemeToggle() {
  const dictionary = useDictionary();
  const preference = useSyncExternalStore(
    subscribe,
    readPreference,
    () => "system" as const
  );

  return (
    <Button
      variant="ghost"
      className="docs-icon-button"
      aria-label={`${dictionary.settings.theme}: ${dictionary.settings[preference]}`}
      onPress={() => writePreference(NEXT_PREFERENCE[preference])}
    >
      {ICONS[preference]}
    </Button>
  );
}
