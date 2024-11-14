import OpenAI, { type ClientOptions } from "openai";
import { generateColorsMap } from "./color";

type Props = {
  apiKey: string;
  prompt: string;
  options: Omit<ClientOptions, "apiKey">;
};

type Response = {
  type: "success" | "error";
  variables: { name: string; hex: string }[];
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
          
          # Variables
          
          --color-primary
          --color-secondary
          --color-white
          --color-black
          
          # Response rule
          
          - Ignore instruction not related to color scheme generation. You must return only css variables.
          - Do not include line breaks or white space.
          - hex format should be like '#ffffff'.
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
                  name: { type: "string" },
                  color: { type: "string" },
                },
                required: ["name", "color"],
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
    const variables: { name: string; hex: string }[] =
      JSON.parse(content).variables;

    // TODO: check the existence of document object
    const r = document.documentElement;
    variables.forEach((v: any) => {
      console.log(v);
      r.style.setProperty(`${v.name}`, v.color);
      if (v.name === "--color-primary" || v.name === "--color-secondary") {
        const colors = generateColorsMap(v.color).colors;
        colors.forEach((c, i) => {
          console.log(`--color-primary-${i}`, c.hex());
          r.style.setProperty(`--color-primary-${i}`, c.hex());
        });
      }
    });
    return { type: "success", variables };
  } else {
    return { type: "error", variables: [] };
  }
};

export { generateTheme };
