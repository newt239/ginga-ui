import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-light-high-contrast"],
      langs: ["tsx", "typescript", "jsx", "javascript", "css", "bash"],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string = "tsx") {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-light-high-contrast",
    colorReplacements: { "#66707b": "#535b64" },
  });
}
