import {
  type GenerationConfig,
  GenerativeModel,
  GoogleGenerativeAI,
  type ModelParams,
  SchemaType,
} from "@google/generative-ai";

import { properties, requiredVariables, SYSTEM_PROMPT } from "./const";

export type GeminiConstructorProps = {
  apiKey: string;
  model?: ModelParams["model"];
};

class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private generationConfig: GenerationConfig;

  constructor({ apiKey, model = "gemini-exp-1206" }: GeminiConstructorProps) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: model,
      systemInstruction: SYSTEM_PROMPT,
    });
    this.generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      responseSchema: {
        type: "object" as SchemaType,
        properties,
        required: requiredVariables.map((variable) => variable.name),
      },
    };
  }

  async generateTheme(prompt: string) {
    try {
      const chatSession = this.model.startChat({
        generationConfig: this.generationConfig,
        history: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

      const result = await chatSession.sendMessage(prompt);
      return { type: "success", value: result.response.text() } as const;
    } catch (e) {
      console.error(e);
      return {
        type: "error",
        message: "Error from Gemini",
      } as const;
    }
  }
}

export default GeminiClient;
