import OpenAI from "openai";

import { properties, requiredVariables, SYSTEM_PROMPT } from "./const";

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

export type OpenAConstructorProps = {
  apiKey: string;
  model_name?: OpenAI.Chat.ChatModel;
  dangerouslyAllowBrowser?: boolean;
};

class OpenAIClient {
  private openai: OpenAI;
  private model: OpenAI.Chat.ChatModel;

  constructor({
    apiKey,
    model_name = "gpt-4o-mini",
    dangerouslyAllowBrowser,
  }: OpenAConstructorProps) {
    this.model = model_name;
    this.openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser,
    });
  }

  async generateTheme(prompt: string) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: this.model,
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          { role: "user", content: prompt },
        ],
        response_format: RESPONSE_FORMAT,
      });
      if (!completion.choices[0].message.content) {
        return { type: "error", message: "No response from OpenAI" } as const;
      }
      return {
        type: "success",
        value: completion.choices[0].message.content,
      } as const;
    } catch (e) {
      console.error(e);
      return { type: "error", message: "Error from OpenAI" } as const;
    }
  }
}

export default OpenAIClient;
