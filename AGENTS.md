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
npx tsc --noEmit && pnpm run lint && pnpm run format && pnpm run stylelint
```

型エラーやリントエラーが出た場合は、コミット前に必ず修正してください。

## プロジェクト概要

Ginga UIは、LLMを活用したテーマ生成機能を持つReact UIコンポーネントライブラリです。コンポーネントは、Webサイトのコンテンツやユーザーのプロンプトに基づいて動的にスタイリングされます。テーマ生成にはOpenAI、Gemini、Anthropicのモデルをサポートしています。

## 開発コマンド

### パッケージ管理

- **パッケージマネージャー**: pnpm（`packageManager`フィールドで必須指定）
- **セットアップ**: `pnpm setup`（corepackを有効化）
- **インストール**: `pnpm install`

### ビルド

- **全パッケージのビルド**: `pnpm build`（tsup --dtsで型定義ファイルを生成）
- **高速ビルド**（型定義スキップ）: `pnpm build:fast`
- **ウォッチモード**: `pnpm dev`（パッケージをウォッチモードでビルド）

### コード品質

- **Lint**: `pnpm lint`（型を考慮したoxlintを使用）
- **フォーマット**: `pnpm format`（oxfmtを使用）
- **スタイルLint**: `pnpm stylelint`（CSS用）
- **型チェック**: `npx tsc --noEmit`

### ドキュメント・ストーリー

- **Storybook**: `pnpm storybook`（Storybook開発サーバーを起動）
- **ドキュメントサイト**: `pnpm docs`（ドキュメントサイトを起動）

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
- **`app/ginga-ui.com/`**: ドキュメントウェブサイト（Next.js）

### パスエイリアス

TypeScriptパスマッピングを使用:

```typescript
"@ginga-ui/*": ["./packages/*/src"]
```

### ビルドシステム

- **バンドラー**: tsup（esbuildベース）
- **出力**: CommonJS（`.cjs`）とESM（`.js`）形式
- **型定義**: `--dts`フラグで生成
- **CSS処理**: `onSuccess`フックでCSSファイルをdistにコピー
- **クライアントコンポーネント**: Next.js App Routerとの互換性のため、全コンポーネントに`"use client"`バナーを付与

### テーマ生成システム

`packages/utils/src/ai/`に配置:

1. **ThemeClient**（`ai/index.ts`）: 3つのクライアントタイプをサポートするメインエントリーポイント
   - OpenAIクライアント（デフォルト: `gpt-4o-mini`）
   - Geminiクライアント（デフォルト: `gemini-exp-1206`）
   - Anthropicクライアント（デフォルト: `claude-3-7-sonnet-latest`）

2. **テーマ生成フロー**:
   - LLMがプロンプトに基づいてCSS変数を生成
   - chroma-jsを使用してコントラスト比（最低3:1）を検証
   - コントラスト検証に失敗した場合は最大3回リトライ
   - 最大リトライ回数に達した場合は色を調整してコントラストを強制
   - プライマリ・セカンダリカラーの中間色スケール（0-9）を生成
   - `<style>`タグで適用可能なCSSコードを返す

3. **CSS変数システム**:
   - コア変数: `--color-primary`、`--color-secondary`、`--color-background`、`--width-border`、`--size-radius`、`--font-family`
   - 生成されるスケール: `--color-primary-0`から`--color-primary-9`（セカンダリも同様）
   - カラースケールは背景色とメインカラーの間を補間

### パブリッシング

- バージョン管理にChangesets を使用（`pnpm changeset-version`、`pnpm changeset-publish`）
- パッケージはnpmにpublicアクセスとprovenanceで公開

## 重要なパターン

### コンポーネント構造

各コンポーネント実装は以下のパターンに従う:

- `src/`ディレクトリにソースコード（通常`component-name.tsx`と`index.ts`）
- `src/`にCSSファイル（distにエクスポート）
- `packages/core/src/index.ts`から再エクスポート
- `@ginga-ui/core`の一部としてまとめてビルドされる

### クライアントサイドの安全性

`dangerouslyAllowBrowser`オプションはOpenAIクライアントでのみ存在し、ローカル開発時にクライアントサイドでの使用を許可します。APIキーが露出するため、本番環境では決して使用しないでください。

### サーバーサイドレンダリング

テーマ生成はSSR向けに設計（特にNext.js App Router）:

- サーバーコンポーネントでテーマを生成
- コンポーネントツリー内で`<style>`タグで適用
- CSS変数はサーバー・クライアント両方で動作

## ツール設定

- **TypeScript**: strictモード有効、ESNextターゲット
- **Linting**: oxlint（Rustベースのリンター）、型を考慮したチェック
- **Formatting**: oxfmt（Rustベースのフォーマッター）
- **Reactバージョン**: 18以上必須（devDependenciesでは19以上）
