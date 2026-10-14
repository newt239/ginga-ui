"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@ginga-ui/core";
import styles from "./card.module.css";

export function BasicExample() {
  return (
    <Card className={styles.basicCard}>
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>
          カードの説明テキストがここに表示されます。
        </CardDescription>
      </CardHeader>
      <CardContent>
        カードのメインコンテンツです。関連する情報をグループ化して表示できます。
      </CardContent>
    </Card>
  );
}

export function WithFooterExample() {
  return (
    <Card className={styles.withFooterCard}>
      <CardHeader>
        <CardTitle>プロジェクトを作成</CardTitle>
        <CardDescription>
          ワンクリックで新しいプロジェクトをデプロイ
        </CardDescription>
      </CardHeader>
      <CardContent>
        プロジェクト名を入力して、デプロイ設定を選択してください。すぐに本番環境に公開できます。
      </CardContent>
      <CardFooter>
        <Button variant="outline">キャンセル</Button>
        <Button variant="filled">デプロイ</Button>
      </CardFooter>
    </Card>
  );
}

export function MultipleCardsExample() {
  return (
    <div className={styles.plans}>
      <Card className={styles.plan}>
        <CardHeader>
          <CardTitle>無料プラン</CardTitle>
          <CardDescription>個人利用に最適</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.planPrice}>¥0</div>
          <ul className={styles.planFeatures}>
            <li>5プロジェクトまで</li>
            <li>コミュニティサポート</li>
            <li>基本機能</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline">始める</Button>
        </CardFooter>
      </Card>

      <Card className={styles.plan}>
        <CardHeader>
          <CardTitle>プロプラン</CardTitle>
          <CardDescription>チームでの利用に</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.planPrice}>¥2,980/月</div>
          <ul className={styles.planFeatures}>
            <li>無制限プロジェクト</li>
            <li>優先サポート</li>
            <li>高度な機能</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="filled">アップグレード</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function SimpleExample() {
  return (
    <Card className={styles.simpleCard}>
      <CardContent>
        シンプルなカード。ヘッダーやフッターなしでも使用できます。
      </CardContent>
    </Card>
  );
}
