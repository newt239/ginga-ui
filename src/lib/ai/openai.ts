import chroma from "chroma-js";
import OpenAI from "openai";
import * as v from "valibot";
import { generateIntermediateColors } from "../color";
import { properties, requiredVariables, SYSTEM_PROMPT } from "./const";
import { Variables } from "./types";

const RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "css_variables",
    schema: {
      type: "object",
      properties,
      required: requiredVariables.map((variable) => variable.name),
      additionalProperties: false,
    },
    strict: true,
  },
} as const;

class OpenAIClient {
  private openai: OpenAI;

  constructor(apiKey: string, options: any) {
    this.openai = new OpenAI({
      apiKey,
      ...options,
    });
  }

  async generateTheme(prompt: string) {
    generateCSSVariables: try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          { role: "user", content: prompt },
        ],
        response_format: RESPONSE_FORMAT,
      });
      const variables = v.parse(
        Variables,
        JSON.parse(completion.choices[0].message.content!)
      );
      console.log(variables);
      const colorBackground = variables["--color-background"];
      for (const [key, value] of Object.entries(variables)) {
        if (
          key.startsWith("--color-primary") ||
          key.startsWith("--color-secondary")
        ) {
          const contrast = chroma.contrast(value, colorBackground);
          console.log(contrast);
          // コントラストを計算して、3未満の場合は再生成
          if (contrast < 3) {
            console.log("Contrast is too low, retrying...");
            break generateCSSVariables;
          }
          const colors = generateIntermediateColors(colorBackground, value).map(
            (c, i) => ({
              key: `${key}-${i}`,
              value: c,
            })
          );
          colors.forEach((color) => {
            variables[color.key] = color.value;
          });
        }
      }
      return { type: "success", variables };
    } catch (e) {
      console.error(e);
      return { type: "error" };
    }
  }
}

export default OpenAIClient;
