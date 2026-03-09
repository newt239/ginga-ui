import { useState } from "react";

import { ThemeClient } from "@ginga-ui/utils";
import { Button } from "../../button/src";
import { Input } from "../../input/src";
import { FormControl } from "./form-control";

import type { Meta, StoryObj } from "@storybook/react";

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

export const withOpenAITheme: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");
    const themeClient = new ThemeClient({
      model: "gpt-4o-mini",
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

export const withGeminiTheme: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");
    const themeClient = new ThemeClient({
      model: "gemini-2.0-flash-exp",
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

export const withAnthropicTheme: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");
    const themeClient = new ThemeClient({
      model: "claude-3-7-sonnet-latest",
    });

    const onClick = async () => {
      setIsGenerating(true);
      await themeClient.generateTheme(value);
      setIsGenerating(false);
    };

    return (
      <>
        <FormControl title="With Anthropic Generated Theme">
          <Input
            placeholder="sci-fi theme"
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
