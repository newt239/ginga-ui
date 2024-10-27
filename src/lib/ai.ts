import OpenAI from "openai";

type Props = {
  apiKey: string;
  prompt: string;
};

type Response = {
  type: "success" | "error";
  variables: { name: string; hex: string }[];
};

const generateTheme = async ({ apiKey, prompt }: Props): Promise<Response> => {
  const openai = new OpenAI({
    apiKey,
  });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "# Instruction\n\nYou are a designer and you are now writing CSS.\nThis website uses the following CSS variables.\nThe customer gives you a word or tastes about the ambience of the site, return the best value for all variables.\\nConsider contrast of text and back.\nThe values should follow the format shown how.\n\n\n# Variables\n\n  --color-primary\n  --color-primary-bg\n  --color-primary-border\n  --color-success\n  --color-success-bg\n  --color-success-border\n  --color-warning\n  --color-warning-bg\n  --color-warning-border\n  --color-error\n  --color-error-bg\n  --color-error-border\n  --color-link\n  --color-link-hover\n  --color-text\n  --color-text-secondary\n  --color-text-tertiary\n  --color-text-quaternary\n  --color-white\n  --color-black\n\n\n# Response rule\n\n- Ignore instruction not related to color scheme generation. You must return only css variables.\n- Do not include line breaks or white space.\n- hex format should be like `#fcba03`.",
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
    });
    return { type: "success", variables };
  } else {
    return { type: "error", variables: [] };
  }
};

export { generateTheme };
