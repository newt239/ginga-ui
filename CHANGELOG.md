# 変更履歴

`@ginga-ui/core` と `@ginga-ui/utils` の利用者向けの変更をまとめています。両パッケージは常に同じバージョンで公開されます。

このファイルは `apps/ginga-ui.com/src/data/changelog.ts` から `pnpm changelog` で生成しています。

## v0.17.0 (2026-11-24)

### 破壊的変更

- 配布形式を ESM のみにしました。CommonJS 版は CSS の読み込みで失敗しており、動いていませんでした
- `react` と `react-dom` の peerDependencies を 19 以上にしました。ref は props として渡します
- 状態を表す props を `isDisabled` などから `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable` に変えました
- `Modal` の背景を `ModalOverlay` に分けました。背景の装飾は `overlayClassName` で指定し、`dismissable` を付けると外側のクリックで閉じます
- `Drawer` の `dismissable={false}` は、モーダルのまま外側のクリックと Esc で閉じない動作になりました
- `FormControl` の `title` を `label` に変えました。ラベルとフィールドは自動で関連付けられます
- `Heading` の `level` を `"h1"` などの文字列から `1` などの数値に変えました
- `Image` の `alt` を必須にしました
- `Table` の選択キーを行の番号から行の `id`（または `getRowKey` の戻り値）に変えました
- `CardDescription` を削除しました。説明文は `CardHeader` の中に任意の要素で置いてください
- `generateTheme` が失敗したときの戻り値を `{ type: "error", message }` にしました。リトライと `maxRetries` は廃止しました
- 使われていなかった `generateColors` / `generateColorsMap` / `generateIntermediateColors` を削除しました

### 追加

- `Tooltip`・`Menu`・`ComboBox`・`NumberField`・`SearchField` を追加しました
- すべてのコンポーネントで `render` を受け取り、`next/link` などの別のコンポーネントでルート要素を描画できるようにしました
- `Select` に `description` と `errorMessage`、`Slider` に `SliderLabel`、`SegmentedControl` に `size="lg"` を追加しました

### 変更

- テーマ生成で、生成された値の形式と範囲を確かめてから CSS に出力するようにしました。コントラストが足りない色は必ず補正されます
- `SegmentedControl` は選択中の項目をアクセント色で塗り、切り替え時に背景がスライドする見た目になりました
- `Tabs` は選択中のタブにアクセント色の下線を引く見た目になりました
- `Table` を外枠で囲み、行の間に区切り線を引く見た目にしました
- `Card` をリンクとして描画したとき、タイトルに下線とフォーカスリングが付くようにしました
- `Input` と `Select` の高さを `Button` にそろえ、フォーム部品の枠線を無彩色にしました

### 修正

- `Popover` からフォーカスが外へ抜ける不具合と、矢印がずれて小さく見える不具合を修正しました
- `Table` で `showHeader={false}` を指定したときや `isRowHeader` を省略したときに例外が出る不具合を修正しました
- 関数形式の `className` を渡すと例外が出る不具合を修正しました
- `Toast` の閉じるボタンと `Trace` の状態ラベルが、ページの言語で読み上げられるようにしました

## v0.16.0 (2026-11-05)

### 破壊的変更

- `QuestionnaireError` を削除しました。必須の質問が未回答のあいだは、次へ・送信ボタンが押せなくなります

### 追加

- `Questionnaire`・`Trace`・`SegmentedControl` を追加しました
- `CodeBlock` のファイル名にアイコンを付ける `filenameIcon` / `files[].icon` を追加しました
- `Tabs` に `fullWidth`、`Table` に空のときの表示を指定する `emptyMessage` を追加しました

### 変更

- `CodeBlock` の見た目を新しくし、コピーボタンをアイコンにしました
- `Accordion` の開閉時に高さがアニメーションするようにしました
- `CardFooter` のボタンを右揃えにし、`Toast` と `SegmentedControl` の影を枠線に置き換えました

### 修正

- `CodeBlock` でファイル名がないとき、コードがコピーボタンの下に回り込む不具合を修正しました

## v0.15.0 (2026-10-22)

### 破壊的変更

- コンポーネントに内蔵していたアイコンをなくしました。`Accordion`・`Select`・`Alert`・`AlertDialog`・`Toast`・`CodeBlock` のアイコンは `icon` などの props で渡してください
- `List`・`Table`・`Select` のクラス名を `ginga-list-item`・`ginga-table-row`・`ginga-select-label` などに変えました
- `AccordionTrigger` を見出し要素（既定は `h3`）で包むようにしました
- `Popover` の props を `placement`・`offset`・`crossOffset`・`shouldFlip`・`showArrow` などに絞りました

### 追加

- ダークモードに対応しました。OS の設定に従い、`<html data-theme="light">` / `"dark"` で固定もできます。生成したテーマはダークモードより優先されます
- `ThemeClient` のコンストラクタで `apiKey` を渡せるようにしました。省略すると環境変数を使います
- `Button` に `ghost` バリアントと `size`（`sm` / `md` / `lg`）、`startIcon` / `endIcon` を追加しました
- `CodeBlock` に複数ファイルをタブで切り替える `files`、`Table` に `striped`、`Slider` に範囲選択を追加しました
- `variables.css` に `--color-text`・`--color-surface`・`--radius-*`・`--focus-ring-*` などの派生トークンを追加し、`SelectItem` を export しました

### 変更

- 全コンポーネントのデザインを新しくしました。フォーカスリングとコントラストは WCAG 2.2 AA を満たします
- `ThemeClient` の既定モデルを、OpenAI は `gpt-6-luna`、Google は `gemini-3.8-flash`、Anthropic は `claude-haiku-5-5` にしました
- `Drawer` の `dismissable={false}` は背景を暗くせず、開いたままページを操作できるようにしました
- `Popover` を開いている間もページをスクロールでき、位置がトリガーに追従するようにしました
- 狭い画面では `Tabs` のタブ列と `CodeBlock` のファイル名を横にスクロールさせ、`Table` をスクロールできる枠で包むようにしました
- 生成したテーマの CSS に、背景色の明るさに合った `color-scheme` を含めるようにしました

### 修正

- `Heading` のサイズ指定が効かない不具合、`Slider` のつまみがずれる不具合、`Table` の行選択とチェックボックスの状態がずれる不具合を修正しました

## v0.14.0 (2026-08-18)

### 追加

- `AlertDialog`・`Drawer`・`Popover`・`Alert`・`Badge`・`Toast`・`CodeBlock` を追加しました
- 状態を表す色 `--color-info` / `--color-success` / `--color-warning` / `--color-danger` を追加しました

### 変更

- `Card` と `Anchor` の `variant="button"` の見た目を `CodeBlock` と `Button` にそろえました

## v0.13.3 (2026-06-16)

### 変更

- `@ginga-ui/core` と `@ginga-ui/utils` を常に同じバージョンで公開するようにしました

### 修正

- 各コンポーネントの CSS が自動で読み込まれるようにし、Next.js の App Router で `"use client"` が失われる不具合を修正しました

## v0.12.2 (2026-06-16)

### 変更

- ビルドの仕組みを入れ替えました。読み込み方に変更はありません

## v0.12.1 (2026-03-09)

### 修正

- 公開手順の不具合を修正しました。利用者向けの変更はありません

## v0.12.0 (2026-03-09)

### 破壊的変更

- コンポーネントごとのパッケージ（`@ginga-ui/button` など）を `@ginga-ui/core` にまとめました。`@ginga-ui/core` から import してください

## v0.11.0 (2025-12-23)

### 破壊的変更

- テーマ生成を Vercel AI SDK で作り直しました。`ThemeClient` には `provider` を指定します

### 追加

- ドキュメントサイトを公開しました

## v0.10.3 (2025-03-08)

### 破壊的変更

- CSS Modules をやめ、`ginga-*` という固定のクラス名にしました。利用側の CSS から上書きできます

## v0.10.0 (2025-02-28)

### 追加

- `ThemeClient` で Anthropic のモデルを使えるようにし、使うモデルを選べるようにしました

## v0.9.0

### 破壊的変更

- パッケージ名を `@ginga-ui` スコープに変え、コンポーネントごとのパッケージに分けました

## v0.8.1 (2025-01-30)

### 破壊的変更

- 状態を表す props の名前を `isDisabled`・`isSelected`・`isRequired` などにそろえました

### 追加

- `Button` に `reverse` バリアントを追加し、`ListItem` を export しました

### 修正

- `Paragraph` が `p` 要素で描画されるようにしました

## v0.8.0 (2025-01-22)

### 追加

- MIT ライセンスを明記しました

### 修正

- `Heading` と `Paragraph` の文字色を修正しました

## v0.7.11 (2025-01-14)

### 破壊的変更

- `Container` と `Flex` を削除しました。代わりに `Box` を使ってください

### 追加

- `Box` を追加しました

## v0.7.10 (2025-01-13)

### 変更

- `Button` の props を見直しました

### 修正

- CSS ファイルの名前を修正しました

## v0.7.9 (2025-01-09)

### 追加

- CommonJS 形式でも配布し、コンポーネントを `ginga-ui/core` から import できるようにしました

### 修正

- Next.js で `ThemeClient` を import できない不具合を修正しました

## v0.7.8 (2025-01-08)

### 修正

- ビルド設定を修正しました

## v0.7.7 (2025-01-07)

### 追加

- SSR 向けのオプションを追加しました

## v0.7.6 (2025-01-07)

### 追加

- `List` を追加しました

### 修正

- peerDependencies を修正しました

## v0.7.5 (2025-01-06)

### 修正

- React に起因するエラーを修正しました

## v0.7.4 (2025-01-06)

### 追加

- コンポーネントを個別のファイルから import できるようにしました

## v0.7.3 (2025-01-06)

### 変更

- 全コンポーネントで `React.forwardRef` をやめ、文字色を見直しました

## v0.7.2 (2025-01-06)

### 追加

- 全コンポーネントに `"use client"` を付け、Server Components から使えるようにしました

### 修正

- `ButtonGroup` の不具合を修正しました

## v0.7.1 (2025-01-06)

### 追加

- `Table` を追加しました

### 修正

- 生成したテーマのコントラスト比の判定を改善しました

## v0.7.0 (2025-01-03)

### 追加

- `Dialog` と `Select` を追加しました

### 変更

- 生成したテーマのコントラスト比が 3.0 以上になるようにしました

## v0.6.0 (2025-01-03)

### 破壊的変更

- テーマ生成を `ThemeClient` クラスから呼ぶ形にしました

### 追加

- テーマ生成で Gemini を使えるようにしました

## v0.5.0

### 追加

- コントラスト比が 3.0 を下回るとテーマを作り直し、OpenAI の応答を検証するようにしました
- Storybook を Chromatic で公開しました

## v0.4.2 (2024-12-09)

### 変更

- コンポーネントごとに別の CSS 変数を使うようにしました

### 修正

- `Accordion` のアクセシビリティを改善しました

## v0.4.1

### 追加

- `Paragraph` と `Image` を追加し、全コンポーネントのデザインを見直しました

### 修正

- CSS 変数が正しく設定されない不具合を修正しました

## v0.4.0

### 追加

- `Container` と `Flex` を追加し、テーマ生成で OpenAI クライアントのオプションを渡せるようにしました

## v0.3.0 (2024-11-12)

### 追加

- 生成したプライマリ色とセカンダリ色から中間色のスケールを作るようにし、全コンポーネントのデザインを見直しました

## v0.2.2 (2024-11-06)

### 追加

- `Slider`・`Accordion` と、色のスケールを作る `generateColorMap` を追加しました

## v0.2.0 (2024-10-24)

### 追加

- `ButtonGroup` を追加しました

## v0.1.0 (2024-10-22)

### 追加

- `Card`・`Link`・`FormControl`・`RadioGroup`・`CheckboxGroup` を追加しました
- OpenAI API で CSS 変数を生成できるようにしました

## v0.0.0

### 追加

- 最初のリリースです。`Button`・`Switch`・`Checkbox`・`Input`・`Heading` を含みます
