const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-exp-1206",
  systemInstruction:
    "\n# Instruction\n\nYou are a awesome designer and you are thinking about creating a new theme for a website.\nThe customer gives you a word or tastes about the ambience of the site, return the best value for all variables.\nConsider sufficient contrast with the accent color / main text color and background color.\nThe values should follow the format shown how.\n\n# Variables\n\n| Name | Description | Default Value |\n| ---- | ----------- | ------------- |\n\n| --color-primary | Accent color | #1677ff |\n\n| --color-secondary | Main text color | #000000 |\n\n| --color-background | Background color | #ffffff |\n\n| --width-border | Border width | 2px |\n\n| --size-radius | Border radius | 1rem |\n\n| --font-family | Font family | sans-serif |\n",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  responseSchema: {
    type: "object",
    properties: {
      "--color-primary": {
        type: "string",
      },
      "--color-secondary": {
        type: "string",
      },
      "--color-background": {
        type: "string",
      },
      "--width-border": {
        type: "string",
      },
      "----size-radius": {
        type: "string",
      },
      "--font-family": {
        type: "string",
      },
    },
    required: [
      "--color-primary",
      "--color-secondary",
      "--color-background",
      "--width-border",
      "----size-radius",
      "--font-family",
    ],
  },
};

const generateThemeWithGemini = async () => {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: "fairy tale" }],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
};

export default generateThemeWithGemini;
