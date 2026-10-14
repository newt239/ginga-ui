import { Alert, AlertDescription, AlertTitle } from "./index";

import type { Meta, StoryObj } from "@storybook/react";
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Display/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  render: () => (
    <Alert icon={<Info />}>
      <AlertTitle>お知らせ</AlertTitle>
      <AlertDescription>
        メンテナンスのため、明日の午前2時から4時までサービスを停止します。
      </AlertDescription>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Alert variant="info" icon={<Info />}>
        <AlertTitle>情報</AlertTitle>
        <AlertDescription>新しいバージョンが利用可能です。</AlertDescription>
      </Alert>
      <Alert variant="success" icon={<CircleCheck />}>
        <AlertTitle>成功</AlertTitle>
        <AlertDescription>変更が保存されました。</AlertDescription>
      </Alert>
      <Alert variant="warning" icon={<TriangleAlert />}>
        <AlertTitle>警告</AlertTitle>
        <AlertDescription>
          ストレージの空き容量が少なくなっています。
        </AlertDescription>
      </Alert>
      <Alert variant="danger" icon={<CircleAlert />}>
        <AlertTitle>エラー</AlertTitle>
        <AlertDescription>データの読み込みに失敗しました。</AlertDescription>
      </Alert>
    </div>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="success" icon={<CircleCheck />}>
      <AlertDescription>プロフィールを更新しました。</AlertDescription>
    </Alert>
  ),
};
