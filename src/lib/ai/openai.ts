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

class OpenAIClient {
  private openai: OpenAI;

  constructor(apiKey: string, dangerouslyAllowBrowser: boolean) {
    this.openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser,
    });
  }

  async generateTheme(prompt: string) {
    try {
      const completion = await this.openai.chat.completions.create({
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
      if (!completion.choices[0].message.content) {
        return { type: "error" } as const;
      }
      return {
        type: "success",
        value: completion.choices[0].message.content,
      } as const;
    } catch (e) {
      console.error(e);
      return { type: "error" } as const;
    }
  }
}

export default OpenAIClient;
