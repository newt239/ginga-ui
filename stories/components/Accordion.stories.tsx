import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../packages/components/accordion/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleExpansion: Story = {
  args: {
    defaultExpandedKeys: ["item-1"],
    children: (
      <>
        <AccordionItem id="item-1">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            Follow our step-by-step guide to get up and running in under 5
            minutes. No technical knowledge needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="item-3">
          <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
          <AccordionContent>
            Yes, we provide 24/7 technical support via email and live chat. Our
            support team typically responds within 2 hours.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

// 複数選択可能なアコーディオン
export const MultipleExpansion: Story = {
  render: () => (
    <Accordion
      allowsMultipleExpanded
      defaultExpandedKeys={["item-1", "item-2"]}
    >
      <AccordionItem id="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          This is the content for the first section. Multiple sections can be
          open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          This is the content for the second section. Try opening multiple
          sections!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
