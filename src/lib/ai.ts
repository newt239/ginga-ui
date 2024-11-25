import OpenAI, { type ClientOptions } from "openai";
import { generateColorsMap } from "./color";

type Props = {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
};

type Response = {
  type: "success" | "error";
  variables: { key: string; value: string }[];
};

const generateTheme = async ({
  apiKey,
  prompt,
  options,
}: Props): Promise<Response> => {
  const openai = new OpenAI({
    apiKey,
    ...options,
  });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
          # Instruction
          
          You are a designer and you are now writing CSS.
          This website uses the following CSS variables.
          The customer gives you a word or tastes about the ambience of the site, return the best value for all variables.
          Consider contrast of text and back.
          The values should follow the format shown how.
          Value should follow the format shown below.
          
          - color-*: \`#\${string}\`;
          - width-*, height-*: 0 | 1px | 2px | 1rem | 50% | 100%;
          - size-*: 0 | 0.5rem |  1rem | 2rem | 9999px;
          - font-family: serif | sans-serif;

          # Variables
          
          --color-primary
          --color-secondary
          --color-white
          --color-black
          --width-border
          --size-radius
          --font-family
          `,
      },
      { role: "user", content: prompt },
    ],
    response_format: {
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
    },
  });
  const content = completion.choices[0].message.content;
  if (content) {
    const variables: { key: string; value: string }[] =
      JSON.parse(content).variables;

    // TODO: check the existence of document object
    const r = document.documentElement;
    variables.forEach((v: any) => {
      console.log(v);
      r.style.setProperty(`${v.key}`, v.value);
      if (v.key === "--color-primary" || v.key === "--color-secondary") {
        const colors = generateColorsMap(v.value).colors;
        colors.forEach((c, i) => {
          console.log(`${v.key}-${i}`, c.hex());
          r.style.setProperty(`${v.key}-${i}`, c.hex());
        });
      }
    });
    return { type: "success", variables };
  } else {
    return { type: "error", variables: [] };
  }
};

export { generateTheme };
