import OpenAI from "openai";
import * as v from "valibot";

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
  let i;
  for (i = 0; i < maxRetries; i++) {
    try {
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
      const colorBackground = variables["--color-background"];
      Object.entries(variables).forEach(([key, value]) => {
        if (
          key.startsWith("--color-primary") ||
          key.startsWith("--color-secondary")
        ) {
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
      });
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
    console.log(key, value);
    r.style.setProperty(key, value);
  });
};

export { generateTheme };
