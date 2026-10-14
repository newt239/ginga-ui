"use client";

import { Alert, AlertDescription, AlertTitle } from "@ginga-ui/core";
import styles from "./alert.module.css";
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

export function BasicExample() {
  return (
    <Alert icon={<Info />}>
      <AlertTitle>お知らせ</AlertTitle>
      <AlertDescription>
        メンテナンスのため、明日の午前2時から4時までサービスを停止します。
      </AlertDescription>
    </Alert>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.alertStack}>
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
  );
}

export function DescriptionOnlyExample() {
  return (
    <Alert variant="success" icon={<CircleCheck />}>
      <AlertDescription>プロフィールを更新しました。</AlertDescription>
    </Alert>
  );
}
