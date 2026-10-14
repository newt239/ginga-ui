import { Button } from "../button";
import { toast, ToastRegion } from "./index";

import type { Meta, StoryObj } from "@storybook/react";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "lucide-react";

const meta: Meta<typeof ToastRegion> = {
  title: "Display/Toast",
  component: ToastRegion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToastRegion>;

export const Basic: Story = {
  render: () => (
    <>
      <ToastRegion closeIcon={<X />} />
      <Button onPress={() => toast.show("通知が届きました")}>
        トーストを表示
      </Button>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <ToastRegion closeIcon={<X />} />
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Button
          onPress={() =>
            toast.info("新しいバージョンが利用可能です", { icon: <Info /> })
          }
        >
          Info
        </Button>
        <Button
          onPress={() =>
            toast.success("変更が保存されました", { icon: <CircleCheck /> })
          }
        >
          Success
        </Button>
        <Button
          onPress={() =>
            toast.warning("ストレージの空き容量が少なくなっています", {
              icon: <TriangleAlert />,
            })
          }
        >
          Warning
        </Button>
        <Button
          onPress={() =>
            toast.danger("データの読み込みに失敗しました", {
              icon: <CircleAlert />,
            })
          }
        >
          Danger
        </Button>
      </div>
    </>
  ),
};

export const WithDescriptionAndTimeout: Story = {
  render: () => (
    <>
      <ToastRegion closeIcon={<X />} placement="top-right" />
      <Button
        onPress={() =>
          toast.success("アップロード完了", {
            icon: <CircleCheck />,
            description: "5秒後に自動的に閉じます。",
            timeout: 5000,
          })
        }
      >
        自動で閉じるトースト
      </Button>
    </>
  ),
};
