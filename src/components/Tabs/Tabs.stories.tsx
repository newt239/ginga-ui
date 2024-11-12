import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Display/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList aria-label="History of Ancient Rome">
        <Tab id="republic">Republic</Tab>
        <Tab id="empire">Empire</Tab>
        <Tab id="byzantium">Byzantine</Tab>
      </TabList>
      <TabPanel id="republic">
        The Roman Republic was the era of classical Roman civilization, led by
        the Roman people, beginning with the overthrow of the Roman Kingdom and
        ending with the establishment of the Roman Empire.
      </TabPanel>
      <TabPanel id="empire">
        The Roman Empire was the post-Republican period of ancient Rome. As a
        polity it included large territorial holdings around the Mediterranean
        Sea in Europe, Northern Africa, and Western Asia.
      </TabPanel>
      <TabPanel id="byzantium">
        The Byzantine Empire, also referred to as the Eastern Roman Empire or
        Byzantium, was the continuation of the Roman Empire in its eastern
        provinces during Late Antiquity and the Middle Ages.
      </TabPanel>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: (args) => (
    <Tabs orientation="vertical" {...args}>
      <TabList aria-label="Ancient Civilizations">
        <Tab id="egypt">Egypt</Tab>
        <Tab id="greece">Greece</Tab>
        <Tab id="rome">Rome</Tab>
      </TabList>
      <TabPanel id="egypt">
        Ancient Egypt was a civilization of ancient North Africa, concentrated
        along the lower reaches of the Nile River, situated in the place that is
        now the country Egypt.
      </TabPanel>
      <TabPanel id="greece">
        Ancient Greece was a civilization belonging to a period of Greek history
        from the Greek Dark Ages of the 12th–9th centuries BC to the end of
        antiquity (c. AD 600).
      </TabPanel>
      <TabPanel id="rome">
        In modern historiography, ancient Rome refers to Roman civilization from
        the founding of the Italian city of Rome in the 8th century BC to the
        collapse of the Western Roman Empire in the 5th century AD.
      </TabPanel>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList aria-label="Planets">
        <Tab id="mercury">Mercury</Tab>
        <Tab id="venus">Venus</Tab>
        <Tab id="earth">Earth</Tab>
        <Tab id="mars" isDisabled>
          Mars
        </Tab>
      </TabList>
      <TabPanel id="mercury">
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun.
      </TabPanel>
      <TabPanel id="venus">
        Venus is the second planet from the Sun and is Earth's closest planetary
        neighbor.
      </TabPanel>
      <TabPanel id="earth">
        Earth is the third planet from the Sun and the only astronomical object
        known to harbor life.
      </TabPanel>
      <TabPanel id="mars">
        Mars is the fourth planet from the Sun and the second-smallest planet in
        the Solar System.
      </TabPanel>
    </Tabs>
  ),
};
