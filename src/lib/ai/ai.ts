import OpenAI, { type ClientOptions } from "openai";
import { generateIntermediateColors } from "../color";

type Props = {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
};

type Response = {
  type: "success" | "error";
  variables: { key: string; value: string }[];
};

const SYSTEM_PROMPT = `
# Instruction

You are a awesome designer and you are thinking about creating a new theme for a website.
The customer gives you a word or tastes about the ambience of the site, return the best value for all variables.
Consider sufficient contrast with the accent color / main text color and background color.
The values should follow the format shown how.

# Variables

| Name               | Description      | Default Value |
| ------------------ | ---------------- | ------------- |
| --color-primary    | Accent color     | #1677ff     |
| --color-secondary  | Main text color  | #000000     |
| --color-background | Background color | #ffffff     |
| --width-border     | Border width     | 2px           |
| --size-radius      | Border radius    | 1rem          |
| --font-family      | Font family      | sans-serif    |
`;

const RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "css_variables",
    schema: {
      type: "object",
      properties: {
        variables: {
          type: "array",
          items: {
            type: "object",
            properties: {
              key: { type: "string" },
              value: { type: "string" },
            },
            required: ["key", "value"],
            additionalProperties: false,
          },
        },
      },
      required: ["variables"],
      additionalProperties: false,
    },
    strict: true,
  },
} as const;

const generateTheme = async ({
  apiKey,
  prompt,
  options,
}: Props): Promise<Response> => {
  const openai = new OpenAI({
    apiKey,
    ...options,
  });
  for (let i = 0; i < 5; i++) {
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
    const content = completion.choices[0].message.content;
    if (content) {
      const variables: { key: string; value: string }[] =
        JSON.parse(content).variables;
      const colorBackground = variables.find(
        (v) => v.key === "--color-background"
      );
      if (!colorBackground) {
        return { type: "error", variables: [] };
      }

      variables.forEach((v) => {
        console.log(v);
        if (v.key === "--color-primary" || v.key === "--color-secondary") {
          const colors = generateIntermediateColors(
            colorBackground.value,
            v.value
          ).map((c, i) => ({
            key: `--color-${v.key}-${i}`,
            value: c,
          }));
          variables.push(...colors);
        }
      });
      adaptNewTheme(variables);
      return { type: "success", variables };
    }
  }
  return { type: "error", variables: [] };
};

export const adaptNewTheme = (variables: { key: string; value: string }[]) => {
  const r = document.documentElement;
  variables.forEach((v) => {
    r.style.setProperty(`${v.key}`, v.value);
  });
};

export { generateTheme };
