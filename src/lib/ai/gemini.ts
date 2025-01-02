import { GoogleGenerativeAI } from "@google/generative-ai";
import { properties, requiredVariables, SYSTEM_PROMPT } from "./const";

class GeminiClient {
  private genAI: any;
  private model: any;
  private generationConfig: any;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-exp-1206",
      systemInstruction: SYSTEM_PROMPT,
    });
    this.generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      responseSchema: {
        type: "object",
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
      console.log(result.response.text());
      const variables = JSON.parse(result.response.text());
      return { type: "success", variables };
    } catch (e) {
      console.error(e);
      return { type: "error" };
    }
  }
}

export default GeminiClient;
