import OpenAI, { type ClientOptions } from "openai";
import * as v from "valibot";
import { generateIntermediateColors } from "../color";

type Props = {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
  maxRetries?: number;
};

type Response =
  | {
      type: "error";
      retry: number;
    }
  | {
      type: "success";
      variables: { [key: string]: string };
      retry: number;
    };

const requiredVariables = [
  {
    name: "--color-primary",
    description: "Accent color",
    defaultValue: "#1677ff",
  },
  {
    name: "--color-secondary",
    description: "Main text color",
    defaultValue: "#000000",
  },
  {
    name: "--color-background",
    description: "Background color",
    defaultValue: "#ffffff",
  },
  {
    name: "--width-border",
    description: "Border width",
    defaultValue: "2px",
  },
  {
    name: "--size-radius",
    description: "Border radius",
    defaultValue: "1rem",
  },
  {
    name: "--font-family",
    description: "Font family",
    defaultValue: "sans-serif",
  },
];

const SYSTEM_PROMPT = `
# Instruction

You are a awesome designer and you are thinking about creating a new theme for a website.
The customer gives you a word or tastes about the ambience of the site, return the best value for all variables.
Consider sufficient contrast with the accent color / main text color and background color.
The values should follow the format shown how.

# Variables

| Name | Description | Default Value |
| ---- | ----------- | ------------- |
${requiredVariables
  .map(
    ({ name, description, defaultValue }) => `
| ${name} | ${description} | ${defaultValue} |`
  )
  .join("\n")}
`;

const Variables = v.record(
  v.union(requiredVariables.map((variable) => v.string(variable.name))),
  v.string()
);

const RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "css_variables",
    schema: {
      type: "object",
      properties: Object.fromEntries(
        requiredVariables.map((variable) => [variable.name, { type: "string" }])
      ),
      required: requiredVariables.map((variable) => variable.name),
      additionalProperties: false,
    },
    strict: true,
  },
} as const;

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
