"use client";

import { Alert, AlertDescription, AlertTitle } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Alert>
      <AlertTitle>お知らせ</AlertTitle>
      <AlertDescription>
        メンテナンスのため、明日の午前2時から4時までサービスを停止します。
      </AlertDescription>
    </Alert>
  );
}

export function VariantsExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Alert variant="info">
        <AlertTitle>情報</AlertTitle>
        <AlertDescription>新しいバージョンが利用可能です。</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>成功</AlertTitle>
        <AlertDescription>変更が保存されました。</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>警告</AlertTitle>
        <AlertDescription>
          ストレージの空き容量が少なくなっています。
        </AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>エラー</AlertTitle>
        <AlertDescription>データの読み込みに失敗しました。</AlertDescription>
      </Alert>
    </div>
  );
}

export function DescriptionOnlyExample() {
  return (
    <Alert variant="success">
      <AlertDescription>プロフィールを更新しました。</AlertDescription>
    </Alert>
  );
}
