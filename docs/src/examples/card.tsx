import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Card>
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
    <Card>
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
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card style={{ flex: "1 1 300px" }}>
        <CardHeader>
          <CardTitle>無料プラン</CardTitle>
          <CardDescription>個人利用に最適</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>¥0</div>
          <ul style={{ marginTop: "1rem", lineHeight: 2 }}>
            <li>5プロジェクトまで</li>
            <li>コミュニティサポート</li>
            <li>基本機能</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline">始める</Button>
        </CardFooter>
      </Card>

      <Card style={{ flex: "1 1 300px" }}>
        <CardHeader>
          <CardTitle>プロプラン</CardTitle>
          <CardDescription>チームでの利用に</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>¥2,980/月</div>
          <ul style={{ marginTop: "1rem", lineHeight: 2 }}>
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
    <Card>
      <CardContent>
        シンプルなカード。ヘッダーやフッターなしでも使用できます。
      </CardContent>
    </Card>
  );
}
