import OpenAI, { type ClientOptions } from "openai";
import * as v from "valibot";
import { generateIntermediateColors } from "../color";

type Props = {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
};

type Response = {
  type: "success" | "error";
  variables: { [key: string]: string };
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

const Variables = v.record(
  v.union([
    v.string("--color-primary"),
    v.string("--color-secondary"),
    v.string("--color-background"),
    v.string("--width-border"),
    v.string("--size-radius"),
    v.string("--font-family"),
  ]),
  v.string()
);

const RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "css_variables",
    schema: {
      type: "object",
      properties: {
        "--color-primary": { type: "string" },
        "--color-secondary": { type: "string" },
        "--color-background": { type: "string" },
        "--width-border": { type: "string" },
        "--size-radius": { type: "string" },
        "--font-family": { type: "string" },
      },
      required: [
        "--color-primary",
        "--color-secondary",
        "--color-background",
        "--width-border",
        "--size-radius",
        "--font-family",
      ],
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
    console.log(completion.choices[0].message.content);
    const variables = v.parse(
      Variables,
      JSON.parse(completion.choices[0].message.content!)
    );
    const colorBackground = variables["--color-background"];
    Object.keys(variables).forEach((variable_name) => {
      if (
        variable_name.startsWith("--color-primary") ||
        variable_name.startsWith("--color-secondary")
      ) {
        const colors = generateIntermediateColors(
          colorBackground,
          variables[variable_name]
        ).map((c, i) => ({
          key: `${variable_name}-${i}`,
          value: c,
        }));
        colors.forEach((color) => {
          variables[color.key] = color.value;
        });
      }
    });
    adaptNewTheme(variables);
    return { type: "success", variables };
  }
  return { type: "error", variables: {} };
};

export const adaptNewTheme = (variables: { [key: string]: string }) => {
  const r = document.documentElement;
  Object.entries(variables).forEach(([key, value]) => {
    console.log(key, value);
    r.style.setProperty(key, value);
  });
};

export { generateTheme };
