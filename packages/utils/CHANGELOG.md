# @ginga-ui/utils

## 0.14.0

### Minor Changes

- 938f85a: CodeBlock コンポーネントを追加し、Card と Anchor のスタイルを見直し

  - CodeBlock コンポーネントを新規追加。クリップボードコピー機能を内蔵し、シンタックスハイライト済みの React 要素を children で注入可能(shiki 等は非内包)
  - Card の視覚変更: CodeBlock と同じ外観に統一(border を `--color-primary-2` に、padding 1rem を Card 本体に移動し各セクションの間隔は gap で管理)し、box-shadow を削除
  - Anchor `variant="button"` の視覚変更: Button と統一(角丸を `calc(var(--size-radius) * 0.5)` に、フォーカスリングを outline 方式に、disabled 表現と transition を Button と同一に)

  AlertDialog / Drawer / Popover / Alert / Badge / Toast コンポーネントを追加

  - variables.css にセマンティックカラー変数(`--color-info` / `--color-success` / `--color-warning` / `--color-danger` とそれぞれの `-light` / `-dark`)を追加
  - Alert: タイトルと説明文を持つ静的表示コンポーネント。info / success / warning / danger の 4 バリアント
  - Badge: primary / secondary と状態色 4 種の計 6 バリアントを持つバッジ
  - AlertDialog: `role="alertdialog"` 固定のダイアログ。既存の Modal / DialogTrigger と組み合わせて使用
  - Drawer: placement で 4 方向(left / right / top / bottom)のスライドインに対応。dismissable prop で外側クリック時の挙動を制御
  - Popover: react-aria の Popover をラップし、非モーダル Dialog と矢印(OverlayArrow)を内蔵。placement / showArrow でカスタマイズ可能
  - Toast: react-aria の UNSTABLE\_ Toast API をラップ。`toast.show` / `info` / `success` / `warning` / `danger` / `close` の関数 API と、4 隅に配置可能な ToastRegion を提供

  stylelint で `font-weight` を 400 / 700、長さの rem を 0.125rem 刻みに制限し、違反箇所を修正

  ThemeClient のプロバイダー指定方法を変更し、デフォルトモデルを更新。破壊的変更を含む

  - `new ThemeClient({ model })` → `new ThemeClient({ provider, model? })` に変更。`provider` は `"openai"` / `"google"` / `"anthropic"` の必須指定
  - モデル名のプレフィックス `gpt-` / `o1` / `claude-` / `gemini-` によるプロバイダー自動判定を廃止。`gpt-5.6-*` や `o3` などの新世代モデルが `Unsupported model` になる問題を解消
  - `model` を省略した場合のデフォルトモデルを更新: openai は `gpt-5.6-luna`、google は `gemini-3.7-flash`、anthropic は `claude-haiku-4-5`
  - `ThemeProvider` 型と `DEFAULT_MODELS` / `PROVIDERS` を新たにエクスポート
  - ドキュメントサイト・README・Storybook のモデル例リストを最新世代に更新
  - AI SDK を同世代の最新版に更新。`ai` 7.0.58 / `@ai-sdk/openai` 4.0.36 / `@ai-sdk/google` 4.0.39 / `@ai-sdk/anthropic` 4.0.36

  ThemeClient に Gemini Nano を使う `provider: "browser"` を追加

## 0.13.2

### Patch Changes

- 60bf83d: ビルドツールを tsup から tsdown（Rolldown ベース）へ移行しました。公開している exports（`.`、`./index.css`、`./variables.css`）は変更ありません。CSS は `@tsdown/css` により `dist/index.css` へ一括バンドルされます。

## 0.13.1

### Patch Changes

- 52adcd6: fix deploy workflow

## 0.13.0

### Minor Changes

- 69b40d6: change package schemas

## 0.12.0

### Minor Changes

- ec9d767: change the usage of ai feature

### Patch Changes

- 3c2a565: upgrade dependencies and setup oxlint, oxfmt

## 0.11.2

### Patch Changes

- 4d7f452: remove css modules

## 0.11.1

### Patch Changes

- 577c307: improve: property name

## 0.11.0

### Minor Changes

- c95a983: feat: add anthropic client

## 0.10.0

### Minor Changes

- 091e6cd: fix: export config

## 0.9.9

### Patch Changes

- e66ad5d: fix: tsup config

## 0.9.8

### Patch Changes

- ae49196: fix: file ext on exports field

## 0.9.7

### Patch Changes

- 0f0fc0f: fix: change entry points

## 0.9.6

### Patch Changes

- 58e00e3: fix: export dist fir

## 0.9.5

### Patch Changes

- f762b56: fix: publish config

## 0.9.4

### Patch Changes

- c8b2ee2: update dependencies

## 0.9.3

### Patch Changes

- 767f955: change filename case

## 0.9.2

### Patch Changes

- 96cb780: remove group components

## 0.9.1

### Minor Changes

- 1235000: change: Introducing monorepo and splitting the package

### Patch Changes

- 1df2470: fix: workflow config
