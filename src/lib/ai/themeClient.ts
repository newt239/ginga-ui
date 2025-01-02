import GeminiClient from "./gemini";
import OpenAIClient from "./openai";

type ClientType = "gemini" | "openai";

class ThemeClient {
  private client: any;
  private maxRetries: number;

  constructor(
    clientType: ClientType,
    apiKey: string,
    options?: any,
    maxRetries = 5
  ) {
    if (clientType === "gemini") {
      this.client = new GeminiClient(apiKey);
    } else if (clientType === "openai") {
      this.client = new OpenAIClient(apiKey, options);
    } else {
      throw new Error("Invalid client type");
    }
    this.maxRetries = maxRetries;
  }

  async generateTheme(prompt: string) {
    let i: number;
    for (i = 0; i < this.maxRetries; i++) {
      try {
        const result = await this.client.generateTheme(prompt);
        if (result.type === "success") {
          this.adaptNewTheme(result.variables);
          return result;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return { type: "error", retry: i };
  }

  adaptNewTheme(variables: { [key: string]: string }) {
    const r = document.documentElement;
    Object.entries(variables).forEach(([key, value]) => {
      r.style.setProperty(key, value);
    });
  }
}

export default ThemeClient;
