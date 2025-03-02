import Anthropic from "@anthropic-ai/sdk";

import { properties, SYSTEM_PROMPT } from "./const";

export type AnthropicConstructorProps = {
  apiKey: string;
  model_name?: Anthropic.Messages.Model;
};

const FORMAT_INSTRUCTIONS = `

# Response format

${JSON.stringify(properties, null, 2)}
`;

class AnthropicClient {
  private anthropic: Anthropic;
  private model: string;

  constructor({
    apiKey,
    model_name = "gpt-4o-mini",
  }: AnthropicConstructorProps) {
    this.model = model_name;
    this.anthropic = new Anthropic({
      apiKey,
    });
  }

  async generateTheme(prompt: string) {
    try {
      const message = await this.anthropic.messages.create({
        model: this.model,
        messages: [
          {
            role: "user",
            content: SYSTEM_PROMPT + FORMAT_INSTRUCTIONS,
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 1024,
      });
      if (!message.content) {
        return {
          type: "error",
          message: "No response from Anthropic",
        } as const;
      }
      if (message.content[0].type !== "text") {
        return {
          type: "error",
          message: "Invalid response from Anthropic",
        } as const;
      }
      return {
        type: "success",
        value: message.content[0].text,
      } as const;
    } catch (e) {
      console.error(e);
      return { type: "error", message: "Error generating theme" } as const;
    }
  }
}

export default AnthropicClient;
