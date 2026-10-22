import { createHighlighter } from "shiki";

const THEMES = {
  light: "github-light-high-contrast",
  dark: "github-dark-high-contrast",
} as const;

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: Object.values(THEMES),
      langs: ["tsx", "typescript", "jsx", "javascript", "css", "bash"],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string = "tsx") {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    themes: THEMES,
    defaultColor: false,
    colorReplacements: { [THEMES.light]: { "#66707b": "#535b64" } },
  });
}
