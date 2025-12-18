import { Tab, TabList, TabPanel, Tabs } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Tabs>
      <TabList aria-label="プログラミング言語">
        <Tab id="javascript">JavaScript</Tab>
        <Tab id="typescript">TypeScript</Tab>
        <Tab id="python">Python</Tab>
      </TabList>
      <TabPanel id="javascript">
        JavaScriptは、主にWebブラウザ上で動作するプログラミング言語です。動的型付けとプロトタイプベースのオブジェクト指向が特徴です。
      </TabPanel>
      <TabPanel id="typescript">
        TypeScriptは、JavaScriptに静的型付けを追加した言語です。大規模なアプリケーション開発に適しています。
      </TabPanel>
      <TabPanel id="python">
        Pythonは、シンプルで読みやすい構文が特徴のプログラミング言語です。データサイエンスやWeb開発に広く使用されています。
      </TabPanel>
    </Tabs>
  );
}

export function VerticalExample() {
  return (
    <Tabs orientation="vertical">
      <TabList aria-label="設定">
        <Tab id="general">一般</Tab>
        <Tab id="security">セキュリティ</Tab>
        <Tab id="notifications">通知</Tab>
      </TabList>
      <TabPanel id="general">
        <h3>一般設定</h3>
        <p>アプリケーションの基本的な設定を管理します。</p>
      </TabPanel>
      <TabPanel id="security">
        <h3>セキュリティ設定</h3>
        <p>パスワードや二段階認証の設定を行います。</p>
      </TabPanel>
      <TabPanel id="notifications">
        <h3>通知設定</h3>
        <p>メールやプッシュ通知の設定を管理します。</p>
      </TabPanel>
    </Tabs>
  );
}

export function DisabledTabExample() {
  return (
    <Tabs>
      <TabList aria-label="機能">
        <Tab id="basic">基本機能</Tab>
        <Tab id="advanced">高度な機能</Tab>
        <Tab id="experimental" disabled>
          実験的機能(無効)
        </Tab>
      </TabList>
      <TabPanel id="basic">
        <h3>基本機能</h3>
        <p>すべてのユーザーが利用できる標準機能です。</p>
      </TabPanel>
      <TabPanel id="advanced">
        <h3>高度な機能</h3>
        <p>プロユーザー向けの機能です。</p>
      </TabPanel>
      <TabPanel id="experimental">
        <h3>実験的機能</h3>
        <p>現在開発中の機能です。</p>
      </TabPanel>
    </Tabs>
  );
}

export function ControlledExample() {
  return (
    <Tabs
      defaultSelectedKey="overview"
      onSelectionChange={(key) => console.log("選択されたタブ:", key)}
    >
      <TabList aria-label="ドキュメント">
        <Tab id="overview">概要</Tab>
        <Tab id="quickstart">クイックスタート</Tab>
        <Tab id="api">API</Tab>
      </TabList>
      <TabPanel id="overview">
        <h3>概要</h3>
        <p>このライブラリについての基本情報です。</p>
      </TabPanel>
      <TabPanel id="quickstart">
        <h3>クイックスタート</h3>
        <p>インストールから初めての使用までのガイドです。</p>
      </TabPanel>
      <TabPanel id="api">
        <h3>APIリファレンス</h3>
        <p>詳細なAPI仕様とサンプルコードです。</p>
      </TabPanel>
    </Tabs>
  );
}
