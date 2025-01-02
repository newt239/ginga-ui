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
    maxRetries = 5,
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
        if (result.type === "success") {
          console.log(result.value);
          const variables = v.parse(Variables, result.value);
          const colorBackground = variables["--color-background"];
          let valid = true;

          for (const [key, value] of Object.entries(variables)) {
            if (
              key.startsWith("--color-primary") ||
              key.startsWith("--color-secondary")
            ) {
              const contrast = chroma.contrast(value, colorBackground);
              console.log(contrast);
              if (contrast < 3) {
                console.log("Contrast is too low, retrying...");
                valid = false;
                break;
              }
              const colors = generateIntermediateColors(
                colorBackground,
                value
              ).map((c, i) => ({
                key: `${key}-${i}`,
                value: c,
              }));
              colors.forEach((color) => {
                variables[color.key] = color.value;
              });
            }
          }

          if (valid) {
            this.adaptNewTheme(variables);
            return result;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    return { type: "error", retry: i };
  }

  adaptNewTheme(variables: Record<string, string>) {
    const r = document.documentElement;
    Object.entries(variables).forEach(([key, value]) => {
      r.style.setProperty(key, value);
    });
  }
}

export default ThemeClient;
