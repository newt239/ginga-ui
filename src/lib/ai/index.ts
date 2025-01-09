import chroma from "chroma-js";
import * as v from "valibot";

import { generateIntermediateColors } from "../color";

import GeminiClient from "./gemini";
import OpenAIClient from "./openai";
import { Variables } from "./types";

type ClientType = "gemini" | "openai";

class ThemeClient {
  private client: OpenAIClient | GeminiClient;
  private maxRetries: number;

  constructor({
    clientType = "openai",
    apiKey,
    dangerouslyAllowBrowser = false,
    maxRetries = 3,
  }: {
    clientType: ClientType;
    apiKey: string;
    dangerouslyAllowBrowser?: boolean;
    maxRetries?: number;
  }) {
    if (clientType === "gemini") {
      this.client = new GeminiClient(apiKey);
    } else if (clientType === "openai") {
      this.client = new OpenAIClient(apiKey, dangerouslyAllowBrowser);
    } else {
      throw new Error("Invalid client type");
    }
    this.maxRetries = maxRetries;
  }

  async generateTheme(prompt: string) {
    let i: number;
    for (i = 0; i < this.maxRetries; i++) {
      try {
        const result = await this.client.generateTheme(prompt);
        if (result.type === "error") {
          throw new Error(result.message);
        }
        console.log(result.value);
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
          return CSSCode;
        }

        if (i === this.maxRetries - 1) {
          console.log("Max retries reached, forcing contrast...");

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

export default ThemeClient;

// for CommonJS compatibility
module.exports = ThemeClient;
