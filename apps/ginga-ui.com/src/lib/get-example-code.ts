import fs from "node:fs/promises";
import path from "node:path";

import type { Locale } from "#/i18n/locales";

export type ExampleSource = {
  componentId: string;
  tsx: string;
  css: string;
};

const EXAMPLES_DIR = path.join(process.cwd(), "src/examples");

async function readOptional(filePath: string) {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

function extractFunction(source: string, exampleName: string) {
  const regex = new RegExp(`export function ${exampleName}[\\s\\S]*?^}`, "m");
  return source.match(regex)?.[0] ?? "";
}

function splitTopLevelRules(css: string) {
  const rules: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}") {
      depth--;
      if (depth === 0) {
        rules.push(css.slice(start, i + 1).trim());
        start = i + 1;
      }
    }
  }
  return rules;
}

function extractUsedRules(css: string, functionCode: string) {
  const usedClasses = new Set(
    [...functionCode.matchAll(/styles\.([A-Za-z0-9_]+)/g)].map((m) => m[1])
  );
  if (usedClasses.size === 0) return "";

  return splitTopLevelRules(css)
    .filter((rule) => {
      const selector = rule.slice(0, rule.indexOf("{"));
      return [...selector.matchAll(/\.([A-Za-z0-9_-]+)/g)].some((m) =>
        usedClasses.has(m[1])
      );
    })
    .join("\n\n");
}

function isUsed(name: string, functionCode: string) {
  return new RegExp(`\\b${name}\\b`).test(functionCode);
}

function pruneImport(line: string, functionCode: string) {
  const named = line.match(/^import\s+(type\s+)?\{([^}]*)\}\s+from\s+(.+)$/);
  if (named) {
    const [, typePrefix = "", specifiers, from] = named;
    const used = specifiers
      .split(",")
      .map((specifier) => specifier.trim())
      .filter(Boolean)
      .filter((specifier) =>
        isUsed(specifier.split(/\s+as\s+/).pop() ?? specifier, functionCode)
      );
    return used.length > 0
      ? `import ${typePrefix}{ ${used.join(", ")} } from ${from}`
      : null;
  }

  const defaultImport = line.match(/^import\s+(type\s+)?(\w+)\s+from\s+/);
  if (defaultImport) {
    return isUsed(defaultImport[2], functionCode) ? line : null;
  }

  return null;
}

function extractImports(source: string, functionCode: string) {
  return [...source.matchAll(/^import\s[\s\S]*?;$/gm)]
    .map((match) => match[0].replace(/\s+/g, " ").replace(/\{ /, "{ "))
    .map((statement) => pruneImport(statement, functionCode))
    .filter((statement): statement is string => statement !== null)
    .join("\n");
}

export async function getExampleSource(
  locale: Locale,
  componentId: string,
  exampleName: string
): Promise<ExampleSource> {
  const tsxSource = (
    await readOptional(path.join(EXAMPLES_DIR, locale, `${componentId}.tsx`))
  )?.replaceAll(
    `"../${componentId}.module.css"`,
    `"./${componentId}.module.css"`
  );
  if (!tsxSource) {
    console.error(`Failed to read example code: ${componentId}/${exampleName}`);
    return { componentId, tsx: "", css: "" };
  }

  const functionCode = extractFunction(tsxSource, exampleName);
  const cssSource = await readOptional(
    path.join(EXAMPLES_DIR, `${componentId}.module.css`)
  );
  const css = cssSource ? extractUsedRules(cssSource, functionCode) : "";
  const imports = extractImports(tsxSource, functionCode);
  const tsx = [imports, functionCode].filter(Boolean).join("\n\n");

  return { componentId, tsx, css };
}
