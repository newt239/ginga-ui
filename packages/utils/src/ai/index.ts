import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import chroma from "chroma-js";

import { generateIntermediateColors } from "../lib/color";

import { SYSTEM_PROMPT } from "./const";
import { themeVariablesSchema, type ThemeVariables } from "./schema";

export type ThemeClientConstructorProps = {
  model?: string;
};

export type GenerateThemeOptions = {
  maxRetries?: number;
};

export class ThemeClient {
  private model: string;
  private maxRetries: number = 3;

  constructor({ model = "gpt-4o-mini" }: ThemeClientConstructorProps) {
    this.model = model;
  }

  private getProvider() {
    // モデル名からプロバイダーを自動判定
    if (this.model.startsWith("gpt-") || this.model.startsWith("o1")) {
      return openai(this.model);
    }
    if (this.model.startsWith("claude-")) {
      return anthropic(this.model);
    }
    if (this.model.startsWith("gemini-")) {
      return google(this.model);
    }
    throw new Error(`Unsupported model: ${this.model}`);
  }

  async generateTheme(prompt: string, options?: GenerateThemeOptions) {
    if (options?.maxRetries) {
      this.maxRetries = options.maxRetries;
    }

    for (let i = 0; i < this.maxRetries; i++) {
      try {
        const { object } = await generateObject({
          model: this.getProvider(),
          schema: themeVariablesSchema,
          system: SYSTEM_PROMPT,
          prompt,
        });

        const isPrimaryColorValid =
          chroma.contrast(
            object["--color-background"],
            object["--color-primary"]
          ) > 3;
        const isSecondaryColorValid =
          chroma.contrast(
            object["--color-background"],
            object["--color-secondary"]
          ) > 3;

        if (isPrimaryColorValid && isSecondaryColorValid) {
          const CSSCode = this.adaptNewTheme(object);
          return { type: "success", CSSCode } as const;
        }

        // 最後のリトライでコントラストを強制
        if (i === this.maxRetries - 1) {
          const enforcedVariables = {
            ...object,
            "--color-primary": this.enforceContrast(
              object["--color-background"],
              object["--color-primary"]
            ),
            "--color-secondary": this.enforceContrast(
              object["--color-background"],
              object["--color-secondary"]
            ),
          };

          const CSSCode = this.adaptNewTheme(enforcedVariables);
          return { type: "success", CSSCode } as const;
        }
      } catch (e) {
        console.error(`Retry ${i + 1}/${this.maxRetries} failed:`, e);
        if (i === this.maxRetries - 1) {
          const errorMessage =
            e instanceof Error ? e.message : "Failed to generate theme";
          return { type: "error", CSSCode: errorMessage } as const;
        }
      }
    }

    return { type: "error", CSSCode: "Failed to generate theme" } as const;
  }

  enforceContrast(baseColor: string, targetColor: string) {
    let color = chroma(targetColor);
    let contrast = chroma.contrast(color, baseColor);
    let iterations = 0;
    const maxIterations = 100;

    while (contrast < 3 && iterations < maxIterations) {
      if (chroma(baseColor).luminance() > 0.5) {
        color = color.darken(0.1);
      } else {
        color = color.brighten(0.1);
      }

      const newContrast = chroma.contrast(color, baseColor);

      // コントラストが改善していない場合は打ち切り
      if (newContrast <= contrast) {
        console.warn(`Contrast improvement stopped at: ${contrast}`);
        break;
      }

      contrast = newContrast;
      iterations++;
    }

    if (iterations >= maxIterations) {
      console.warn(
        `Max iterations reached: baseColor=${baseColor}, targetColor=${targetColor}`
      );
    }

    return color.hex();
  }

  adaptNewTheme(variables: ThemeVariables) {
    const primaryColors = generateIntermediateColors(
      variables["--color-background"],
      variables["--color-primary"]
    ).map((c, i) => ({ key: `--color-primary-${i}`, value: c }));

    const secondaryColors = generateIntermediateColors(
      variables["--color-background"],
      variables["--color-secondary"]
    ).map((c, i) => ({ key: `--color-secondary-${i}`, value: c }));

    const allVariables = {
      ...variables,
      ...Object.fromEntries(primaryColors.map((c) => [c.key, c.value])),
      ...Object.fromEntries(secondaryColors.map((c) => [c.key, c.value])),
    };

    // ブラウザ環境でCSS変数を設定
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      Object.entries(allVariables).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }

    // CSSコードを生成
    let CSSCode = ":root {\n";
    Object.entries(allVariables).forEach(([key, value]) => {
      CSSCode += `  ${key}: ${value};\n`;
    });
    CSSCode += "}";

    return CSSCode;
  }
}
