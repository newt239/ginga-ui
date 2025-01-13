import { useState } from "react";

import FormControl from "./FormControl";

import type { Meta, StoryObj } from "@storybook/react";

import ThemeClient from "@/ai";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

const meta: Meta<typeof FormControl> = {
  title: "Forms/FormControl",
  component: FormControl,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    title: "フォームコントロール名",
    children: <Input placeholder="プレースホルダーを表示できます" />,
  },
};

export const WithCustomId: Story = {
  args: {
    title: "Email",
    htmlFor: "custom-email-id",
    children: (
      <Input id="custom-email-id" type="email" placeholder="Enter your email" />
    ),
  },
};

export const withGeminiTheme: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");
    const themeClient = new ThemeClient({
      clientType: "gemini",
      apiKey: import.meta.env.STORYBOOK_GEMINI_API_KEY as string,
    });

    const onClick = async () => {
      setIsGenerating(true);
      await themeClient.generateTheme(value);
      setIsGenerating(false);
    };

    return (
      <>
        <FormControl title="With Gemini Generated Theme">
          <Input
            placeholder="fairy tale"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button variant="filled" disabled={false} onPress={onClick}>
          Generate
          {isGenerating && "..."}
        </Button>
      </>
    );
  },
};

export const withOpenAITheme: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");
    const themeClient = new ThemeClient({
      clientType: "openai",
      apiKey: import.meta.env.STORYBOOK_OPENAI_API_KEY as string,
      dangerouslyAllowBrowser: true,
    });

    const onClick = async () => {
      setIsGenerating(true);
      await themeClient.generateTheme(value);
      setIsGenerating(false);
    };

    return (
      <>
        <FormControl title="With OpenAI Generated Theme">
          <Input
            placeholder="fantasy theme"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button variant="filled" disabled={false} onPress={onClick}>
          Generate
          {isGenerating && "..."}
        </Button>
      </>
    );
  },
};
