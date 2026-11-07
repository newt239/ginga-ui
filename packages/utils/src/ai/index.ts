import { generateText, Output } from "ai";

import { themeVariablesSchema } from "./schema";
import {
  buildSystemPrompt,
  buildThemeCSS,
  checkConstraints,
  repairConstraints,
  THEME_CONSTRAINTS,
  THEME_VARIABLES,
  validateThemeValues,
} from "./theme";

export * from "./browser";
export * from "./theme";
export type { ThemeVariables } from "./schema";

export const DEFAULT_MODELS = {
  openai: "gpt-6-luna",
  google: "gemini-3.8-flash",
  anthropic: "claude-haiku-5-5",
  browser: "text",
} as const;

export type ThemeProvider = keyof typeof DEFAULT_MODELS;

export const PROVIDERS = Object.keys(DEFAULT_MODELS) as ThemeProvider[];

export type ThemeClientConstructorProps = {
  provider: ThemeProvider;
  model?: string;
  apiKey?: string;
};

export type DownloadProgressCallback = (progress: number) => void;

export type GenerateThemeOptions = {
  onDownloadProgress?: DownloadProgressCallback;
};

export type GenerateThemeResult =
  | {
      readonly type: "success";
      readonly CSSCode: string;
      readonly variables: Readonly<Record<string, string>>;
      readonly violations: readonly string[];
    }
  | {
      readonly type: "error";
      readonly message: string;
    };

const SYSTEM_PROMPT = buildSystemPrompt(THEME_VARIABLES, THEME_CONSTRAINTS);

export class ThemeClient {
  private provider: ThemeProvider;
  private model: string;
  private apiKey?: string;

  constructor({ provider, model, apiKey }: ThemeClientConstructorProps) {
    if (!PROVIDERS.includes(provider)) {
      throw new Error(`Unsupported provider: ${provider}`);
    }
    this.provider = provider;
    this.model = model ?? DEFAULT_MODELS[provider];
    this.apiKey = apiKey;
  }

  private async getLanguageModel(
    onDownloadProgress?: DownloadProgressCallback
  ) {
    switch (this.provider) {
      case "openai": {
        const { createOpenAI, openai } = await import("@ai-sdk/openai");
        return this.apiKey
          ? createOpenAI({ apiKey: this.apiKey })(this.model)
          : openai(this.model);
      }
      case "google": {
        const { createGoogleGenerativeAI, google } =
          await import("@ai-sdk/google");
        return this.apiKey
          ? createGoogleGenerativeAI({ apiKey: this.apiKey })(this.model)
          : google(this.model);
      }
      case "anthropic": {
        const { createAnthropic, anthropic } =
          await import("@ai-sdk/anthropic");
        return this.apiKey
          ? createAnthropic({ apiKey: this.apiKey })(this.model)
          : anthropic(this.model);
      }
      case "browser": {
        const { browserAI } = await import("@browser-ai/core");
        const model = browserAI("text");
        if (onDownloadProgress) {
          await model.createSessionWithProgress(onDownloadProgress);
        }
        return model;
      }
    }
  }

  async generateTheme(
    prompt: string,
    options?: GenerateThemeOptions
  ): Promise<GenerateThemeResult> {
    try {
      const model = await this.getLanguageModel(options?.onDownloadProgress);
      const { output } = await generateText({
        model,
        output: Output.object({ schema: themeVariablesSchema }),
        system: SYSTEM_PROMPT,
        prompt,
      });
      const values = validateThemeValues(THEME_VARIABLES, output);
      const violations = checkConstraints(THEME_CONSTRAINTS, values);
      const variables =
        violations.length === 0
          ? values
          : repairConstraints(THEME_CONSTRAINTS, values);
      return {
        type: "success",
        CSSCode: buildThemeCSS(THEME_VARIABLES, variables),
        variables,
        violations,
      };
    } catch (e) {
      return {
        type: "error",
        message: e instanceof Error ? e.message : "Failed to generate theme",
      };
    }
  }
}
