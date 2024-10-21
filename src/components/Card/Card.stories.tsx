import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Display/Card",
  component: () => (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>Card content goes here</CardContent>
      <CardFooter>
        <Button>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FirstStory: Story = {
  args: {},
};
