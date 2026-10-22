"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { SegmentedControl, SegmentedControlItem } from "@ginga-ui/core";
import { Monitor, Moon, Sun } from "lucide-react";
import { useDictionary } from "#/i18n/locale-context";

type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "ginga-docs-theme";
const PREFERENCES: { id: ThemePreference; icon: React.ReactNode }[] = [
  { id: "light", icon: <Sun /> },
  { id: "system", icon: <Monitor /> },
  { id: "dark", icon: <Moon /> },
];

const isThemePreference = (value: unknown): value is ThemePreference =>
  value === "system" || value === "light" || value === "dark";

const listeners = new Set<() => void>();

function readStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

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

  useLayoutEffect(() => {
    writePreference(readStoredPreference());
  }, []);

  return (
    <SegmentedControl
      size="sm"
      aria-label={dictionary.settings.theme}
      value={preference}
      onChange={(value) => {
        if (isThemePreference(value)) writePreference(value);
      }}
    >
      {PREFERENCES.map(({ id, icon }) => (
        <SegmentedControlItem
          key={id}
          id={id}
          aria-label={dictionary.settings[id]}
        >
          {icon}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
}
