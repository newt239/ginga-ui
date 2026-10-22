import type { Dictionary } from "./ja";

export const en: Dictionary = {
  metadata: {
    title:
      "Ginga UI - React UI component library with LLM-powered theme generation",
    description:
      "React components styled dynamically from your website's content or a prompt",
  },
  layout: {
    skipToContent: "Skip to content",
    loading: "Loading",
    toc: "On this page",
  },
  nav: {
    label: "Documentation",
    gettingStarted: "Getting started",
    overview: "Overview",
    quickStart: "Quick start",
    themeGeneration: "Theme generation",
    allComponents: "All components",
    resources: "Resources",
    opensInNewTab: " (opens in a new tab)",
    logoCredit: "Logo:",
    openMenu: "Open menu",
    menu: "Menu",
    closeMenu: "Close menu",
  },
  settings: {
    theme: "Color theme",
    system: "System",
    light: "Light",
    dark: "Dark",
    language: "Language",
  },
  codeBlock: {
    copy: "Copy",
    copied: "Copied",
    files: "Files",
  },
  home: {
    eyecatchAlt:
      "Ginga UI introduction image listing its features: UI Component Library for React, 20+ Components, Accessible, Simple to Use, TypeScript Based, Support SSR, Free and Opensource, Generate Theme with AI.",
  },
  components: {
    lead: (count: number) =>
      `Browse all ${count} components that Ginga UI provides. Switch categories with the tabs and open each component's page for details.`,
    categoryTabs: "Component categories",
    install: "Installation",
  },
  themeGenerator: {
    mode: "Run with",
    modeFree: "Free tier",
    modeOwnKey: "Your own API key",
    freeTitle: "Try it without an API key",
    freeDescription: (model: string | undefined, limit: number) =>
      `Calls ${model ?? "an OpenAI model"} with the API key registered on the server. Shared by all users, up to ${limit} times in the last 24 hours. Your prompt and the generated result are logged on the server.`,
    freeRemaining: (remaining: number) => ` ${remaining} remaining.`,
    securityTitle: "Security notice",
    securityDescription:
      "The API key you enter in this demo is sent to a server-side Route Handler and used only for theme generation. It is not stored. In production, never accept API keys from the client; read them from server-side environment variables instead.",
    provider: "LLM provider",
    model: "Model",
    apiKey: "API key",
    browserTitle: "Runs entirely in your browser",
    browserDescription:
      "Gemini Nano needs no API key and no server requests. Generation runs entirely on your device.",
    availability: {
      unavailable:
        "Gemini Nano is not available in this browser. Try desktop Chrome or Edge.",
      downloadable:
        "The Gemini Nano model is downloaded on first use. This transfers several gigabytes and takes a while.",
      downloading: "Downloading the Gemini Nano model.",
      available:
        "Gemini Nano is available. No API key or server requests needed.",
    },
    prompt: "Theme prompt",
    promptPlaceholder: "e.g. Quiet forest, cyberpunk, dark mode",
    generate: "Generate theme",
    generating: "Generating...",
    downloading: (progress: number) => `Downloading model... ${progress}%`,
    error: "Error",
    resultTitle: "Generated theme",
    resultDescription:
      "The theme has been applied to the whole site. Scroll the page to see the changes.",
    errors: {
      missingPrompt: "Enter a prompt",
      missingApiKeyAndPrompt: "Enter an API key and a prompt",
      generationFailed: "Theme generation failed",
      quotaFetchFailed: "Could not load the remaining free tier usage",
      quotaExceeded: (limit: number) =>
        `The free tier is limited to ${limit} generations in the last 24 hours. Try again later or use your own API key.`,
      promptTooLong: (max: number) =>
        `Free tier prompts must be ${max} characters or fewer`,
      unknownProvider: (provider: string) => `Unknown provider: ${provider}`,
    },
  },
};
