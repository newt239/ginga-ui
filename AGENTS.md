# AGENTS.md

このファイルは AI Agents がこのリポジトリで作業する際の具体的なガイダンスを提供します。

## 原則

### 日本語による応答

ユーザーとのコミュニケーションやコミットメッセージ、コメント、ログ、ドキュメントは**すべて日本語で記述**してください。

### 確認必須

機能や実装について少しでも不明点があれば必ず質問してください。

### lintの実行

実装後の必須作業として、以下のコマンドを実行してください。

```bash
pnpm exec tsc --noEmit && pnpm run lint && pnpm run format && pnpm run stylelint
```

型エラーやリントエラーが出た場合は、コミット前に必ず修正してください。

### コメントを書かない

コードにコメントは原則として書かないでください。命名と構造によって意図が伝わるコードを書いてください。

## プロジェクト概要

Ginga UIは、LLMを活用したテーマ生成機能を持つReact UIコンポーネントライブラリです。コンポーネントは、Webサイトのコンテンツやユーザーのプロンプトに基づいて動的にスタイリングされます。テーマ生成にはOpenAI、Gemini、Anthropicのモデルをサポートしています。

## 開発コマンド

### パッケージ管理

- **パッケージマネージャー**: pnpm（`packageManager`フィールドで必須指定）
- **セットアップ**: `pnpm setup`（corepackを有効化）
- **インストール**: `pnpm install`

### ビルド

- **全パッケージのビルド**: `pnpm build`（tsdownで型定義ファイルを生成）
- **高速ビルド**（型定義スキップ）: `pnpm build:fast`
- **ウォッチモード**: `pnpm dev`（パッケージをウォッチモードでビルド）

### コード品質

- **Lint**: `pnpm lint`（型を考慮したoxlintを使用）
- **フォーマット**: `pnpm format`（oxfmtを使用）
- **スタイルLint**: `pnpm stylelint`（CSS用）
- **型チェック**: `pnpm exec tsc --noEmit`

### ドキュメント・ストーリー

- **Storybook**: `pnpm storybook`（Storybook開発サーバーを起動）
- **ドキュメントサイト**: `pnpm run docs`（ドキュメントサイトを起動）

### クリーン

- **成果物のクリーン**: `pnpm clean`（node_modules、.turbo、dist、pnpm-lock.yamlを削除）

## アーキテクチャ

### モノレポ構造

pnpmワークスペースとTurborepoを使用したモノレポ構成:

- **`packages/core/`**: メインパッケージ（`@ginga-ui/core`）。全コンポーネントとユーティリティを再エクスポート
- **`packages/core/src/components/*/`**: `@ginga-ui/core` に内包された各コンポーネント実装（accordion、button、cardなど）
  - アクセシビリティのためReact Aria Componentsを使用
  - 各コンポーネントには専用のCSSファイルがエクスポートされる
- **`packages/utils/`**: AI テーマ生成クライアントを含む共有ユーティリティ
- **`apps/ginga-ui.com/`**: ドキュメントウェブサイト（Next.js）
  - 英語を接頭辞なし、日本語を `/ja` で配信する。ページは `src/app/[locale]/` 配下に置き、`src/proxy.ts` が接頭辞なしのパスを `/en` へ rewrite する
  - UI 文言は `src/i18n/dictionaries/{ja,en}.ts`、コード例は `src/examples/{ja,en}/<id>.tsx`、長文ページは `src/content/{ja,en}/` に言語別で置く

### パスエイリアス

TypeScriptパスマッピングを使用:

```typescript
"@ginga-ui/*": ["./packages/*/src"]
```

### ビルドシステム

- **バンドラー**: tsdown（Rolldownベース）
- **出力**: ESM（`.js`）のみ。CommonJS は配布しない
- **型定義**: `dts: true`で生成（`build:fast`は`--no-dts`でスキップ）
- **CSS処理**: `@tsdown/css`が各コンポーネントのCSSを`dist/components/<name>/index.css`に出力し、各コンポーネントのJSから import する。`variables.css`は`onSuccess`フックでdistにコピー
- **クライアントコンポーネント**: Next.js App Routerとの互換性のため、全コンポーネントに`"use client"`バナーを付与

### テーマ生成システム

`packages/utils/src/ai/`に配置:

1. **ThemeClient** — `ai/index.ts` に定義。Vercel AI SDK を利用した単一のエントリーポイント。コンストラクタで `provider` を明示指定し、`model` を省略した場合は `DEFAULT_MODELS` の値を使用する。**モデル名から条件分岐でプロバイダーを判定してはならない**
   - `provider: "openai"` — デフォルトモデルは `gpt-6-luna`
   - `provider: "google"` — デフォルトモデルは `gemini-3.8-flash`
   - `provider: "anthropic"` — デフォルトモデルは `claude-haiku-5-5`
   - `provider: "browser"` — Gemini Nano。APIキー不要でブラウザ内でのみ動作するため、Client Component から呼ぶ。`@browser-ai/core` は動的 import して読み込む

2. **テーマ生成フロー**:
   - LLMの呼び出しは1回のみでリトライしない。検証と補正は `ai/theme.ts` に置き、api.newt239.dev の `src/libs/theme.ts` と同じ方式にそろえる
   - 色は OKLCH の `L C H`、寸法は単位なしの数値（範囲付き）、`--font-family` は候補からの選択で受け取り、形式や範囲に合わない値は変数ごとに既定値へ置き換える。生成値をそのまま CSS に連結しない
   - culori でコントラスト比を判定し、文字色（`--color-secondary`）は背景に対して4.5:1、アクセント色（`--color-primary`）は3:1を下回ると、色相を保ったまま明度を二分探索で補正する
   - プライマリ・セカンダリカラーの中間色スケール（0-9）を背景色との OKLCH 補間で生成
   - 成功時は `<style>`タグで適用可能な `CSSCode`、失敗時は `message` を持つ判別 union を返す
   - `getBrowserAIAvailability()` で Gemini Nano が使えるかを判定できる

3. **CSS変数システム**:
   - コア変数: `--color-primary`、`--color-secondary`、`--color-background`、`--width-border`、`--size-radius`、`--font-family`
   - 生成されるスケール: `--color-primary-0`から`--color-primary-9`（セカンダリも同様）
   - カラースケールは背景色とメインカラーの間を補間
   - 既定値は `:where(:root)` で詳細度 0 にしてあり、`prefers-color-scheme: dark` または `<html data-theme="dark">` でダーク用の値に切り替わる（`data-theme="light"` でライトに固定）。生成テーマの `:root {…}` は詳細度で必ず勝つため、ダーク時もテーマ生成の結果が優先される
   - ステータス色の `-light` / `-dark` は `color-mix` で背景色と文字色から作るので、ダーク時や生成テーマでも追従する

### パブリッシング

- バージョン管理にChangesets を使用（`pnpm changeset-version`、`pnpm changeset-publish`）
- パッケージはnpmにpublicアクセスとprovenanceで公開
- **バージョン統一**: `@ginga-ui/core`・`@ginga-ui/utils`・`ginga-ui.com` は Changesets の `fixed` 設定（`.changeset/config.json`）でグループ化しており、常に同一バージョンで一緒に更新される。いずれか1つのパッケージのみを変更した場合でも、グループ内の全パッケージのバージョンが揃って更新される
- `ginga-ui.com` は `private: true` のため `fixed` グループに含めてもnpmへは公開されず、バージョン番号のみがグループに合わせて更新される

## 重要なパターン

### コンポーネント構造

各コンポーネント実装は以下のパターンに従う:

- `src/`ディレクトリにソースコード（通常`component-name.tsx`と`index.ts`）
- `src/`にCSSファイル（distにエクスポート）
- `packages/core/src/index.ts`から再エクスポート
- RAC の `className` は関数を受け取りうるため `cn()` に直接渡さず、`composeRenderProps(className, (c) => cn("ginga-xxx", c))` で合成する
- 状態系の props は RAC の `isDisabled` などではなく `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable` で公開する
- `@ginga-ui/core`の一部としてまとめてビルドされる

### クライアントサイドの安全性

APIキーはVercel AI SDKが環境変数から読み込みます。クライアントサイドにAPIキーを渡すと露出するため、テーマ生成はServer ComponentsやRoute Handlerなどのサーバーサイドで実行してください。ただし `provider: "browser"` はAPIキーを必要とせずブラウザ内でのみ動作するため、Client Componentから呼び出します。

### サーバーサイドレンダリング

テーマ生成はSSR向けに設計（特にNext.js App Router）:

- サーバーコンポーネントでテーマを生成
- コンポーネントツリー内で`<style>`タグで適用
- CSS変数はサーバー・クライアント両方で動作

## ツール設定

- **TypeScript**: strictモード有効、ESNextターゲット
- **Linting**: oxlint（Rustベースのリンター）、型を考慮したチェック
- **Formatting**: oxfmt（Rustベースのフォーマッター）
- **Reactバージョン**: 19以上必須。`forwardRef` は使わず ref を props として受け取る
