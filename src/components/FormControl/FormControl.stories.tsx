import { generateTheme } from "@/lib/ai";
import FormControl from "../FormControl/FormControl";
import Input from "../Input/Input";

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../Button/Button";

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

export const WithTextarea: Story = {
  args: {
    title: "Description // wip",
    children: <textarea placeholder="Enter a detailed description" rows={4} />,
  },
};

export const withAIGeneratedTheme: Story = {
  render: () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [value, setValue] = useState("");

    const onClick = async () => {
      setIsGenerating(true);
      await generateTheme({
        apiKey: import.meta.env.STORYBOOK_OPENAI_API_KEY!,
        prompt: value,
        options: {
          dangerouslyAllowBrowser: true,
        },
      });
      setIsGenerating(false);
    };

    return (
      <>
        <FormControl title="With AI Generated Theme">
          <Input
            placeholder="fairy tale"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button variant="filled" isDisabled={false} onPress={onClick}>
          Generate
          {isGenerating && "..."}
        </Button>
      </>
    );
  },
};
