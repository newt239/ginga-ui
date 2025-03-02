import chroma from "chroma-js";
import * as v from "valibot";

import { generateIntermediateColors } from "../lib/color";

import GeminiClient, { GeminiConstructorProps } from "./gemini";
import OpenAIClient, { OpenAConstructorProps } from "./openai";
import { Variables } from "./types";

export type ThemeClientConstructorProps =
  | ({
      clientType: "openai";
    } & OpenAConstructorProps)
  | ({
      clientType: "gemini";
    } & GeminiConstructorProps);

export type GemerateaThemeOptions = {
  maxRetries?: number;
};

export class ThemeClient {
  private client: OpenAIClient | GeminiClient;
  private maxRetries: number = 3;

  constructor(props: ThemeClientConstructorProps) {
    if (props.clientType === "gemini") {
      this.client = new GeminiClient(props);
    } else if (props.clientType === "openai") {
      this.client = new OpenAIClient(props);
    } else {
      throw new Error("Invalid client type");
    }
  }

  async generateTheme(prompt: string, options?: GemerateaThemeOptions) {
    if (options?.maxRetries) {
      this.maxRetries = options.maxRetries;
    }
    let i: number;
    for (i = 0; i < this.maxRetries; i++) {
      try {
        const result = await this.client.generateTheme(prompt);
        if (result.type === "error") {
          throw new Error(result.message);
        }
        const variables = v.parse(Variables, JSON.parse(result.value));
        const isPrimaryColorValid =
          chroma.contrast(
            variables["--color-background"],
            variables["--color-primary"]
          ) > 3;
        const isSecondaryColorValid =
          chroma.contrast(
            variables["--color-background"],
            variables["--color-secondary"]
          ) > 3;

        if (isPrimaryColorValid && isSecondaryColorValid) {
          const CSSCode = this.adaptNewTheme(variables);
          return {
            type: "success",
            CSSCode,
          } as const;
        }

        if (i === this.maxRetries - 1) {
          const enforcedPrimaryColor = this.enforceContrast(
            variables["--color-background"],
            variables["--color-primary"]
          );
          variables["--color-primary"] = enforcedPrimaryColor;

          const enforcedSecondaryColor = this.enforceContrast(
            variables["--color-background"],
            variables["--color-secondary"]
          );
          variables["--color-secondary"] = enforcedSecondaryColor;

          const CSSCode = this.adaptNewTheme(variables);
          return {
            type: "success",
            CSSCode,
          } as const;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return { type: "error", CSSCode: "Failed to generate theme" } as const;
  }

  enforceContrast(baseColor: string, targetColor: string) {
    let color = chroma(targetColor);
    let contrast = chroma.contrast(color, baseColor);
    while (contrast < 3) {
      if (chroma(baseColor).luminance() > 0.5) {
        color = color.darken(0.1);
      } else {
        color = color.brighten(0.1);
      }
      contrast = chroma.contrast(color, baseColor);
    }
    return color.hex();
  }

  adaptNewTheme(variables: Record<string, string>) {
    const primaryColors = generateIntermediateColors(
      variables["--color-background"],
      variables["--color-primary"]
    ).map((c, i) => ({
      key: `--color-primary-${i}`,
      value: c,
    }));
    primaryColors.forEach((color) => {
      variables[color.key] = color.value;
    });

    const secondaryColors = generateIntermediateColors(
      variables["--color-background"],
      variables["--color-secondary"]
    ).map((c, i) => ({
      key: `--color-secondary-${i}`,
      value: c,
    }));
    secondaryColors.forEach((color) => {
      variables[color.key] = color.value;
    });

    if (typeof window !== "undefined") {
      const r = window.document.documentElement;
      Object.entries(variables).forEach(([key, value]) => {
        r.style.setProperty(key, value);
      });
    }
    let CSSCode = ":root {\n";
    Object.entries(variables).forEach(([key, value]) => {
      CSSCode += `  ${key}: ${value};\n`;
    });
    CSSCode += "}";
    return CSSCode;
  }
}
