import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Display/Accordion",
  component: () => (
    <Accordion type="single" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">
          What is your refund policy?
        </AccordionTrigger>
        <AccordionContent value="item-1">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">
          How do I get started?
        </AccordionTrigger>
        <AccordionContent value="item-2">
          Follow our step-by-step guide to get up and running in under 5
          minutes. No technical knowledge needed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger value="item-3">
          Do you offer technical support?
        </AccordionTrigger>
        <AccordionContent value="item-3">
          Yes, we provide 24/7 technical support via email and live chat. Our
          support team typically responds within 2 hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// 基本的な単一選択アコーディオン
export const SingleExpansion: Story = {
  args: {},
};

// 複数選択可能なアコーディオン
export const MultipleExpansion: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">First Section</AccordionTrigger>
        <AccordionContent value="item-1">
          This is the content for the first section. Multiple sections can be
          open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">Second Section</AccordionTrigger>
        <AccordionContent value="item-2">
          This is the content for the second section. Try opening multiple
          sections!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// カスタムアイコンを使用するアコーディオン
export const CustomIcon: Story = {
  render: () => (
    <Accordion type="single" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          value="item-1"
          icon={<span style={{ fontSize: "0.8rem" }}>▼</span>}
        >
          Custom Icon Example
        </AccordionTrigger>
        <AccordionContent value="item-1">
          This accordion uses a custom icon instead of the default one.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
