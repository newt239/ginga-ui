import OpenAI from "openai";
import * as v from "valibot";

import chroma from "chroma-js";
import { generateIntermediateColors } from "../color";
import { RESPONSE_FORMAT, SYSTEM_PROMPT } from "./const";
import { Props, Response, Variables } from "./types";

const generateTheme = async ({
  apiKey,
  prompt,
  options,
  maxRetries = 5,
}: Props): Promise<Response> => {
  const openai = new OpenAI({
    apiKey,
    ...options,
  });
  let i: number;
  for (i = 0; i < maxRetries; i++) {
    generateCSSVariables: try {
      const completion = await openai.chat.completions.create({
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
      adaptNewTheme(variables);
      return { type: "success", variables, retry: i };
    } catch (e) {
      console.error(e);
    }
  }
  return { type: "error", retry: i };
};

export const adaptNewTheme = (variables: { [key: string]: string }) => {
  const r = document.documentElement;
  Object.entries(variables).forEach(([key, value]) => {
    r.style.setProperty(key, value);
  });
};

export { generateTheme };
