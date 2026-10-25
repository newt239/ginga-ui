"use client";

import { Tab, TabList, TabPanel, Tabs } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Tabs>
      <TabList aria-label="Programming languages">
        <Tab id="javascript">JavaScript</Tab>
        <Tab id="typescript">TypeScript</Tab>
        <Tab id="python">Python</Tab>
      </TabList>
      <TabPanel id="javascript">
        JavaScript is a programming language that mainly runs in web browsers.
        It features dynamic typing and prototype-based object orientation.
      </TabPanel>
      <TabPanel id="typescript">
        TypeScript is a language that adds static typing to JavaScript. It is
        well suited to building large-scale applications.
      </TabPanel>
      <TabPanel id="python">
        Python is a programming language known for its simple, readable syntax.
        It is widely used in data science and web development.
      </TabPanel>
    </Tabs>
  );
}

export function VerticalExample() {
  return (
    <Tabs orientation="vertical">
      <TabList aria-label="Settings">
        <Tab id="general">General</Tab>
        <Tab id="security">Security</Tab>
        <Tab id="notifications">Notifications</Tab>
      </TabList>
      <TabPanel id="general">
        <h3>General settings</h3>
        <p>Manage the basic settings of the application.</p>
      </TabPanel>
      <TabPanel id="security">
        <h3>Security settings</h3>
        <p>Configure your password and two-factor authentication.</p>
      </TabPanel>
      <TabPanel id="notifications">
        <h3>Notification settings</h3>
        <p>Manage email and push notification settings.</p>
      </TabPanel>
    </Tabs>
  );
}

export function DisabledTabExample() {
  return (
    <Tabs>
      <TabList aria-label="Features">
        <Tab id="basic">Basic features</Tab>
        <Tab id="advanced">Advanced features</Tab>
        <Tab id="experimental" disabled>
          Experimental features (disabled)
        </Tab>
      </TabList>
      <TabPanel id="basic">
        <h3>Basic features</h3>
        <p>Standard features available to all users.</p>
      </TabPanel>
      <TabPanel id="advanced">
        <h3>Advanced features</h3>
        <p>Features for pro users.</p>
      </TabPanel>
      <TabPanel id="experimental">
        <h3>Experimental features</h3>
        <p>Features currently in development.</p>
      </TabPanel>
    </Tabs>
  );
}

export function ControlledExample() {
  return (
    <Tabs
      defaultSelectedKey="overview"
      onSelectionChange={(key) => console.log("Selected tab:", key)}
    >
      <TabList aria-label="Documentation">
        <Tab id="overview">Overview</Tab>
        <Tab id="quickstart">Quick start</Tab>
        <Tab id="api">API</Tab>
      </TabList>
      <TabPanel id="overview">
        <h3>Overview</h3>
        <p>Basic information about this library.</p>
      </TabPanel>
      <TabPanel id="quickstart">
        <h3>Quick start</h3>
        <p>A guide from installation to your first use.</p>
      </TabPanel>
      <TabPanel id="api">
        <h3>API reference</h3>
        <p>Detailed API specifications and sample code.</p>
      </TabPanel>
    </Tabs>
  );
}

export function FullWidthExample() {
  return (
    <Tabs fullWidth>
      <TabList aria-label="Account">
        <Tab id="profile">Profile</Tab>
        <Tab id="security">Security</Tab>
        <Tab id="billing">Billing</Tab>
      </TabList>
      <TabPanel id="profile">Change your name and avatar.</TabPanel>
      <TabPanel id="security">
        Set your password and two-factor authentication.
      </TabPanel>
      <TabPanel id="billing">Manage your plan and payment methods.</TabPanel>
    </Tabs>
  );
}
