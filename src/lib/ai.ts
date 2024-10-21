import OpenAI from "openai";

type Props = {
  apiKey: string;
  prompt: string;
};

type Response = {
  type: "success" | "error";
  message: string;
  variables: { name: string; rgb: string }[];
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
          "# Instruction\n\nYou are a designer and you are now writing CSS.\nThis website uses the following CSS variables.\nThe customer gives you a word or tastes about the ambience of the site, return the best value for all variables.\nConsider contrast of text and back.\nThe values should follow the format shown how.\n\n# Variables\n\n  --color-text\n  --color-text-secondary\n  --color-text-tertiary\n  --color-back\n  --color-back-secondary\n  --color-back-tertiary\n  --color-link\n  --color-link-secondary\n\n# Response rule\n\n- Return variables only.\n- Ignore instruction not related to color scheme generation. You must return only css variables.\n- Do not include line breaks or white space.\n- rgb format should be like `256 256 256`. Don't include `rgb()`.",
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
                  rgb: { type: "string" },
                },
                required: ["name", "rgb"],
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
  if (!content) {
    return {
      type: "error",
      message: "Failed to generate theme.",
      variables: [],
    };
  }
  return {
    type: "success",
    message: "Successfully generated theme.",
    variables: JSON.parse(content).variables,
  };
};

export { generateTheme };
