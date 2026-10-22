"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ginga-ui/core";
import { ChevronDown } from "lucide-react";

export function BasicExample() {
  return (
    <Accordion defaultExpandedKeys={["item-1"]}>
      <AccordionItem id="item-1">
        <AccordionTrigger icon={<ChevronDown />}>
          What is your refund policy?
        </AccordionTrigger>
        <AccordionContent>
          We offer a full refund within 90 days of purchase, no questions asked.
          Just send us an email.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger icon={<ChevronDown />}>
          How do I get started?
        </AccordionTrigger>
        <AccordionContent>
          Follow our step-by-step guide to finish setup in under 5 minutes. No
          technical knowledge required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger icon={<ChevronDown />}>
          Do you offer technical support?
        </AccordionTrigger>
        <AccordionContent>
          Yes, we provide support 24/7 via email and live chat. We usually reply
          within 2 hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function MultipleExpansionExample() {
  return (
    <Accordion
      allowsMultipleExpanded
      defaultExpandedKeys={["item-1", "item-2"]}
    >
      <AccordionItem id="item-1">
        <AccordionTrigger icon={<ChevronDown />}>Section 1</AccordionTrigger>
        <AccordionContent>
          Multiple sections can be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger icon={<ChevronDown />}>Section 2</AccordionTrigger>
        <AccordionContent>Try opening several sections!</AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger icon={<ChevronDown />}>Section 3</AccordionTrigger>
        <AccordionContent>Content of the third section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function DefaultClosedExample() {
  return (
    <Accordion>
      <AccordionItem id="faq-1">
        <AccordionTrigger icon={<ChevronDown />}>
          Frequently asked question 1
        </AccordionTrigger>
        <AccordionContent>The answer appears here.</AccordionContent>
      </AccordionItem>
      <AccordionItem id="faq-2">
        <AccordionTrigger icon={<ChevronDown />}>
          Frequently asked question 2
        </AccordionTrigger>
        <AccordionContent>The answer appears here.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function ControlledExample() {
  return (
    <Accordion
      onExpandedChange={(keys) => console.log("Expanded items:", keys)}
    >
      <AccordionItem id="item-1">
        <AccordionTrigger icon={<ChevronDown />}>Item 1</AccordionTrigger>
        <AccordionContent>
          Changes to the expanded state are logged to the console.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger icon={<ChevronDown />}>Item 2</AccordionTrigger>
        <AccordionContent>Content of the second item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
