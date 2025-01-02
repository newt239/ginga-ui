import OpenAI from "openai";
import * as v from "valibot";
import { properties, requiredVariables, SYSTEM_PROMPT } from "./const";
import { Variables } from "./types";

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

  constructor(apiKey: string, options: any) {
    this.openai = new OpenAI({
      apiKey,
      ...options,
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
      const variables = v.parse(
        Variables,
        JSON.parse(completion.choices[0].message.content!)
      );
      console.log(variables);
      return { type: "success", variables };
    } catch (e) {
      console.error(e);
      return { type: "error" };
    }
  }
}

export default OpenAIClient;
