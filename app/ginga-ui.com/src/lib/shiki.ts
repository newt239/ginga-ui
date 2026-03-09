import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["tsx", "typescript", "jsx", "javascript", "css", "bash"],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string = "tsx") {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-light",
  });
}
