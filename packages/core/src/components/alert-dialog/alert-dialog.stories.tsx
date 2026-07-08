import { Button } from "../button";
import { DialogTrigger, Modal } from "../dialog";
import { AlertDialog, AlertDialogTitle } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertDialog> = {
  title: "Display/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Basic: Story = {
  render: () => (
    <DialogTrigger>
      <Button>ファイルを削除</Button>
      <Modal>
        <AlertDialog variant="danger">
          <AlertDialogTitle>ファイルの削除</AlertDialogTitle>
          <p>この操作は取り消せません。本当に削除しますか？</p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            <Button slot="close" variant="outline">
              キャンセル
            </Button>
            <Button slot="close">削除する</Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  ),
};

export const Warning: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="outline">ログアウト</Button>
      <Modal>
        <AlertDialog variant="warning">
          <AlertDialogTitle>ログアウトの確認</AlertDialogTitle>
          <p>保存されていない変更は失われます。ログアウトしますか？</p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            <Button slot="close" variant="outline">
              キャンセル
            </Button>
            <Button slot="close">ログアウト</Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  ),
};
