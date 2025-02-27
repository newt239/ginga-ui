import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Modal,
} from "@ginga-ui/core";
import { Input, Label, TextField } from "react-aria-components";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Display/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal>
        <Dialog>
          <DialogTitle>Welcome</DialogTitle>
          <p>This is a basic dialog with just some text content.</p>
          <Button slot="close">Close</Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  ),
};

export const SignUpForm: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Sign Up</Button>
      <Modal>
        <Dialog>
          <form onSubmit={(e) => e.preventDefault()}>
            <DialogTitle>Create an Account</DialogTitle>
            <TextField autoFocus>
              <Label>First Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Email</Label>
              <Input type="email" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <Input type="password" />
            </TextField>
            <div>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="filled">Delete Account</Button>
      <Modal>
        <Dialog>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <p>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <div>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button variant="filled">Delete Account</Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  ),
};
