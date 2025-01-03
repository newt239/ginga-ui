import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label, TextField } from "react-aria-components";

import Button from "../Button/Button";
import { Dialog, DialogTitle, DialogTrigger, Modal } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// 基本的なダイアログ
export const Basic: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal>
        <Dialog>
          <DialogTitle>Welcome</DialogTitle>
          <p>This is a basic dialog with just some text content.</p>
          <Button slot="close" className="mt-4">
            Close
          </Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  ),
};

// サインアップフォーム付きダイアログ
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
            <div className="flex justify-end gap-3 mt-6">
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

// カスタムスタイル付きダイアログ
export const CustomStyled: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="outline">Custom Dialog</Button>
      <Modal>
        <Dialog className="max-w-md bg-primary-50 border-primary-200">
          <DialogTitle className="text-2xl text-primary-900">
            Custom Styled Dialog
          </DialogTitle>
          <div className="space-y-4">
            <p className="text-primary-800">
              This dialog uses custom styling to demonstrate the flexibility of
              the component.
            </p>
            <div className="bg-primary-100 p-4 rounded-lg">
              <h3 className="font-bold text-primary-900">Key Features:</h3>
              <ul className="list-disc list-inside text-primary-800 mt-2">
                <li>Custom background colors</li>
                <li>Custom border styles</li>
                <li>Custom typography</li>
                <li>Custom layout</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button slot="close">Got it</Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  ),
};

// 確認ダイアログ
export const Confirmation: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="filled">Delete Account</Button>
      <Modal>
        <Dialog>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <p className="text-gray-600">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-3 mt-6">
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
