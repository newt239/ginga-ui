import type { Locale } from "#/i18n/locales";

export type ChangeKind = "breaking" | "added" | "changed" | "fixed";

export const CHANGE_KINDS: ChangeKind[] = [
  "breaking",
  "added",
  "changed",
  "fixed",
];

export const CHANGE_KIND_LABELS: Record<ChangeKind, Record<Locale, string>> = {
  breaking: { ja: "破壊的変更", en: "Breaking changes" },
  added: { ja: "追加", en: "Added" },
  changed: { ja: "変更", en: "Changed" },
  fixed: { ja: "修正", en: "Fixed" },
};

type Change = { kind: ChangeKind } & Record<Locale, string>;

export type ChangelogEntry = {
  version: string;
  date?: string;
  changes: Change[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.17.0",
    date: "2026-11-24",
    changes: [
      {
        kind: "breaking",
        ja: "配布形式を ESM のみにしました。CommonJS 版は CSS の読み込みで失敗しており、動いていませんでした",
        en: "Packages are now ESM only. The CommonJS build failed to load CSS and did not work.",
      },
      {
        kind: "breaking",
        ja: "`react` と `react-dom` の peerDependencies を 19 以上にしました。ref は props として渡します",
        en: "The `react` and `react-dom` peer dependencies now require 19 or later. Pass `ref` as a regular prop.",
      },
      {
        kind: "breaking",
        ja: "状態を表す props を `isDisabled` などから `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable` に変えました",
        en: "State props were renamed from `isDisabled` and similar to `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable`.",
      },
      {
        kind: "breaking",
        ja: "`Modal` の背景を `ModalOverlay` に分けました。背景の装飾は `overlayClassName` で指定し、`dismissable` を付けると外側のクリックで閉じます",
        en: "The `Modal` backdrop is now a separate `ModalOverlay`. Style it with `overlayClassName`, and set `dismissable` to close on an outside click.",
      },
      {
        kind: "breaking",
        ja: "`Drawer` の `dismissable={false}` は、モーダルのまま外側のクリックと Esc で閉じない動作になりました",
        en: "`Drawer` with `dismissable={false}` now stays modal and ignores outside clicks and Esc.",
      },
      {
        kind: "breaking",
        ja: "`FormControl` の `title` を `label` に変えました。ラベルとフィールドは自動で関連付けられます",
        en: "`FormControl` now takes `label` instead of `title`, and links the label to its field automatically.",
      },
      {
        kind: "breaking",
        ja: '`Heading` の `level` を `"h1"` などの文字列から `1` などの数値に変えました',
        en: '`Heading` `level` is now a number such as `1` instead of a string such as `"h1"`.',
      },
      {
        kind: "breaking",
        ja: "`Image` の `alt` を必須にしました",
        en: "`alt` is now required on `Image`.",
      },
      {
        kind: "breaking",
        ja: "`Table` の選択キーを行の番号から行の `id`（または `getRowKey` の戻り値）に変えました",
        en: "`Table` selection keys are now each row's `id` (or the value returned by `getRowKey`) instead of the row index.",
      },
      {
        kind: "breaking",
        ja: "`CardDescription` を削除しました。説明文は `CardHeader` の中に任意の要素で置いてください",
        en: "`CardDescription` was removed. Put any element inside `CardHeader` instead.",
      },
      {
        kind: "breaking",
        ja: '`generateTheme` が失敗したときの戻り値を `{ type: "error", message }` にしました。リトライと `maxRetries` は廃止しました',
        en: '`generateTheme` now returns `{ type: "error", message }` on failure. Retries and the `maxRetries` option were removed.',
      },
      {
        kind: "breaking",
        ja: "使われていなかった `generateColors` / `generateColorsMap` / `generateIntermediateColors` を削除しました",
        en: "Removed the unused `generateColors` / `generateColorsMap` / `generateIntermediateColors`.",
      },
      {
        kind: "added",
        ja: "`Tooltip`・`Menu`・`ComboBox`・`NumberField`・`SearchField` を追加しました",
        en: "Added `Tooltip`, `Menu`, `ComboBox`, `NumberField`, and `SearchField`.",
      },
      {
        kind: "added",
        ja: "すべてのコンポーネントで `render` を受け取り、`next/link` などの別のコンポーネントでルート要素を描画できるようにしました",
        en: "Every component accepts `render`, so the root element can be rendered by another component such as `next/link`.",
      },
      {
        kind: "added",
        ja: '`Select` に `description` と `errorMessage`、`Slider` に `SliderLabel`、`SegmentedControl` に `size="lg"` を追加しました',
        en: 'Added `description` and `errorMessage` to `Select`, `SliderLabel` to `Slider`, and `size="lg"` to `SegmentedControl`.',
      },
      {
        kind: "changed",
        ja: "テーマ生成で、生成された値の形式と範囲を確かめてから CSS に出力するようにしました。コントラストが足りない色は必ず補正されます",
        en: "Theme generation now validates the format and range of each generated value before writing CSS, and always corrects colors with too little contrast.",
      },
      {
        kind: "changed",
        ja: "`SegmentedControl` は選択中の項目をアクセント色で塗り、切り替え時に背景がスライドする見た目になりました",
        en: "`SegmentedControl` now fills the selected item with the accent color and slides the highlight when the selection changes.",
      },
      {
        kind: "changed",
        ja: "`Tabs` は選択中のタブにアクセント色の下線を引く見た目になりました",
        en: "`Tabs` now underline the selected tab with the accent color.",
      },
      {
        kind: "changed",
        ja: "`Table` を外枠で囲み、行の間に区切り線を引く見た目にしました",
        en: "`Table` now has an outer border and dividers between rows.",
      },
      {
        kind: "changed",
        ja: "`Card` をリンクとして描画したとき、タイトルに下線とフォーカスリングが付くようにしました",
        en: "A `Card` rendered as a link now underlines its title and shows a focus ring.",
      },
      {
        kind: "changed",
        ja: "`Input` と `Select` の高さを `Button` にそろえ、フォーム部品の枠線を無彩色にしました",
        en: "`Input` and `Select` now match the height of `Button`, and form control borders are neutral gray.",
      },
      {
        kind: "fixed",
        ja: "`Popover` からフォーカスが外へ抜ける不具合と、矢印がずれて小さく見える不具合を修正しました",
        en: "Fixed focus escaping from `Popover` and its arrow appearing offset and too small.",
      },
      {
        kind: "fixed",
        ja: "`Table` で `showHeader={false}` を指定したときや `isRowHeader` を省略したときに例外が出る不具合を修正しました",
        en: "Fixed `Table` throwing when `showHeader={false}` was set or `isRowHeader` was omitted.",
      },
      {
        kind: "fixed",
        ja: "関数形式の `className` を渡すと例外が出る不具合を修正しました",
        en: "Fixed an error when passing a function as `className`.",
      },
      {
        kind: "fixed",
        ja: "`Toast` の閉じるボタンと `Trace` の状態ラベルが、ページの言語で読み上げられるようにしました",
        en: "The `Toast` close button and `Trace` status labels are now announced in the page language.",
      },
    ],
  },
  {
    version: "0.16.0",
    date: "2026-11-05",
    changes: [
      {
        kind: "breaking",
        ja: "`QuestionnaireError` を削除しました。必須の質問が未回答のあいだは、次へ・送信ボタンが押せなくなります",
        en: "Removed `QuestionnaireError`. The next and submit buttons are now disabled until required questions are answered.",
      },
      {
        kind: "added",
        ja: "`Questionnaire`・`Trace`・`SegmentedControl` を追加しました",
        en: "Added `Questionnaire`, `Trace`, and `SegmentedControl`.",
      },
      {
        kind: "added",
        ja: "`CodeBlock` のファイル名にアイコンを付ける `filenameIcon` / `files[].icon` を追加しました",
        en: "Added `filenameIcon` / `files[].icon` to show an icon next to `CodeBlock` file names.",
      },
      {
        kind: "added",
        ja: "`Tabs` に `fullWidth`、`Table` に空のときの表示を指定する `emptyMessage` を追加しました",
        en: "Added `fullWidth` to `Tabs` and `emptyMessage` to `Table` for the empty state.",
      },
      {
        kind: "changed",
        ja: "`CodeBlock` の見た目を新しくし、コピーボタンをアイコンにしました",
        en: "Refreshed the `CodeBlock` design and turned the copy button into an icon.",
      },
      {
        kind: "changed",
        ja: "`Accordion` の開閉時に高さがアニメーションするようにしました",
        en: "`Accordion` now animates its height when opening and closing.",
      },
      {
        kind: "changed",
        ja: "`CardFooter` のボタンを右揃えにし、`Toast` と `SegmentedControl` の影を枠線に置き換えました",
        en: "Buttons in `CardFooter` are now right-aligned, and `Toast` and `SegmentedControl` use a border instead of a shadow.",
      },
      {
        kind: "fixed",
        ja: "`CodeBlock` でファイル名がないとき、コードがコピーボタンの下に回り込む不具合を修正しました",
        en: "Fixed `CodeBlock` code wrapping under the copy button when there is no file name.",
      },
    ],
  },
  {
    version: "0.15.0",
    date: "2026-10-22",
    changes: [
      {
        kind: "breaking",
        ja: "コンポーネントに内蔵していたアイコンをなくしました。`Accordion`・`Select`・`Alert`・`AlertDialog`・`Toast`・`CodeBlock` のアイコンは `icon` などの props で渡してください",
        en: "Built-in icons were removed. Pass icons for `Accordion`, `Select`, `Alert`, `AlertDialog`, `Toast`, and `CodeBlock` through props such as `icon`.",
      },
      {
        kind: "breaking",
        ja: "`List`・`Table`・`Select` のクラス名を `ginga-list-item`・`ginga-table-row`・`ginga-select-label` などに変えました",
        en: "Class names for `List`, `Table`, and `Select` changed to `ginga-list-item`, `ginga-table-row`, `ginga-select-label`, and so on.",
      },
      {
        kind: "breaking",
        ja: "`AccordionTrigger` を見出し要素（既定は `h3`）で包むようにしました",
        en: "`AccordionTrigger` is now wrapped in a heading element (`h3` by default).",
      },
      {
        kind: "breaking",
        ja: "`Popover` の props を `placement`・`offset`・`crossOffset`・`shouldFlip`・`showArrow` などに絞りました",
        en: "`Popover` props were narrowed down to `placement`, `offset`, `crossOffset`, `shouldFlip`, `showArrow`, and a few others.",
      },
      {
        kind: "added",
        ja: 'ダークモードに対応しました。OS の設定に従い、`<html data-theme="light">` / `"dark"` で固定もできます。生成したテーマはダークモードより優先されます',
        en: 'Added dark mode. It follows the OS setting and can be fixed with `<html data-theme="light">` / `"dark"`. A generated theme takes precedence over dark mode.',
      },
      {
        kind: "added",
        ja: "`ThemeClient` のコンストラクタで `apiKey` を渡せるようにしました。省略すると環境変数を使います",
        en: "`ThemeClient` accepts `apiKey` in its constructor. Environment variables are used when it is omitted.",
      },
      {
        kind: "added",
        ja: "`Button` に `ghost` バリアントと `size`（`sm` / `md` / `lg`）、`startIcon` / `endIcon` を追加しました",
        en: "Added the `ghost` variant, `size` (`sm` / `md` / `lg`), and `startIcon` / `endIcon` to `Button`.",
      },
      {
        kind: "added",
        ja: "`CodeBlock` に複数ファイルをタブで切り替える `files`、`Table` に `striped`、`Slider` に範囲選択を追加しました",
        en: "Added `files` to `CodeBlock` for switching between files in tabs, `striped` to `Table`, and range selection to `Slider`.",
      },
      {
        kind: "added",
        ja: "`variables.css` に `--color-text`・`--color-surface`・`--radius-*`・`--focus-ring-*` などの派生トークンを追加し、`SelectItem` を export しました",
        en: "Added derived tokens such as `--color-text`, `--color-surface`, `--radius-*`, and `--focus-ring-*` to `variables.css`, and exported `SelectItem`.",
      },
      {
        kind: "changed",
        ja: "全コンポーネントのデザインを新しくしました。フォーカスリングとコントラストは WCAG 2.2 AA を満たします",
        en: "Redesigned every component. Focus rings and contrast meet WCAG 2.2 AA.",
      },
      {
        kind: "changed",
        ja: "`ThemeClient` の既定モデルを、OpenAI は `gpt-6-luna`、Google は `gemini-3.8-flash`、Anthropic は `claude-haiku-5-5` にしました",
        en: "Default `ThemeClient` models are now `gpt-6-luna` for OpenAI, `gemini-3.8-flash` for Google, and `claude-haiku-5-5` for Anthropic.",
      },
      {
        kind: "changed",
        ja: "`Drawer` の `dismissable={false}` は背景を暗くせず、開いたままページを操作できるようにしました",
        en: "`Drawer` with `dismissable={false}` no longer dims the page, so the page stays usable while it is open.",
      },
      {
        kind: "changed",
        ja: "`Popover` を開いている間もページをスクロールでき、位置がトリガーに追従するようにしました",
        en: "The page can scroll while a `Popover` is open, and the popover follows its trigger.",
      },
      {
        kind: "changed",
        ja: "狭い画面では `Tabs` のタブ列と `CodeBlock` のファイル名を横にスクロールさせ、`Table` をスクロールできる枠で包むようにしました",
        en: "On narrow screens, `Tabs` and `CodeBlock` file names scroll horizontally, and `Table` is wrapped in a scrollable container.",
      },
      {
        kind: "changed",
        ja: "生成したテーマの CSS に、背景色の明るさに合った `color-scheme` を含めるようにしました",
        en: "Generated theme CSS now includes a `color-scheme` that matches the background brightness.",
      },
      {
        kind: "fixed",
        ja: "`Heading` のサイズ指定が効かない不具合、`Slider` のつまみがずれる不具合、`Table` の行選択とチェックボックスの状態がずれる不具合を修正しました",
        en: "Fixed `Heading` ignoring its size, the `Slider` thumb being off center, and `Table` row selection getting out of sync with its checkboxes.",
      },
    ],
  },
  {
    version: "0.14.0",
    date: "2026-08-18",
    changes: [
      {
        kind: "added",
        ja: "`AlertDialog`・`Drawer`・`Popover`・`Alert`・`Badge`・`Toast`・`CodeBlock` を追加しました",
        en: "Added `AlertDialog`, `Drawer`, `Popover`, `Alert`, `Badge`, `Toast`, and `CodeBlock`.",
      },
      {
        kind: "added",
        ja: "状態を表す色 `--color-info` / `--color-success` / `--color-warning` / `--color-danger` を追加しました",
        en: "Added the status colors `--color-info` / `--color-success` / `--color-warning` / `--color-danger`.",
      },
      {
        kind: "changed",
        ja: '`Card` と `Anchor` の `variant="button"` の見た目を `CodeBlock` と `Button` にそろえました',
        en: '`Card` and `Anchor` with `variant="button"` now look consistent with `CodeBlock` and `Button`.',
      },
    ],
  },
  {
    version: "0.13.3",
    date: "2026-06-16",
    changes: [
      {
        kind: "changed",
        ja: "`@ginga-ui/core` と `@ginga-ui/utils` を常に同じバージョンで公開するようにしました",
        en: "`@ginga-ui/core` and `@ginga-ui/utils` are now always released with the same version.",
      },
      {
        kind: "fixed",
        ja: '各コンポーネントの CSS が自動で読み込まれるようにし、Next.js の App Router で `"use client"` が失われる不具合を修正しました',
        en: 'Each component now loads its own CSS automatically, and the `"use client"` directive is no longer lost in the Next.js App Router.',
      },
    ],
  },
  {
    version: "0.12.2",
    date: "2026-06-16",
    changes: [
      {
        kind: "changed",
        ja: "ビルドの仕組みを入れ替えました。読み込み方に変更はありません",
        en: "Replaced the build tooling. Imports work the same as before.",
      },
    ],
  },
  {
    version: "0.12.1",
    date: "2026-03-09",
    changes: [
      {
        kind: "fixed",
        ja: "公開手順の不具合を修正しました。利用者向けの変更はありません",
        en: "Fixed the release process. There are no user-facing changes.",
      },
    ],
  },
  {
    version: "0.12.0",
    date: "2026-03-09",
    changes: [
      {
        kind: "breaking",
        ja: "コンポーネントごとのパッケージ（`@ginga-ui/button` など）を `@ginga-ui/core` にまとめました。`@ginga-ui/core` から import してください",
        en: "Per-component packages such as `@ginga-ui/button` were merged into `@ginga-ui/core`. Import from `@ginga-ui/core` instead.",
      },
    ],
  },
  {
    version: "0.11.0",
    date: "2025-12-23",
    changes: [
      {
        kind: "breaking",
        ja: "テーマ生成を Vercel AI SDK で作り直しました。`ThemeClient` には `provider` を指定します",
        en: "Rebuilt theme generation on the Vercel AI SDK. `ThemeClient` now takes a `provider`.",
      },
      {
        kind: "added",
        ja: "ドキュメントサイトを公開しました",
        en: "Launched the documentation site.",
      },
    ],
  },
  {
    version: "0.10.3",
    date: "2025-03-08",
    changes: [
      {
        kind: "breaking",
        ja: "CSS Modules をやめ、`ginga-*` という固定のクラス名にしました。利用側の CSS から上書きできます",
        en: "Dropped CSS Modules in favor of fixed `ginga-*` class names, so styles can be overridden from your own CSS.",
      },
    ],
  },
  {
    version: "0.10.0",
    date: "2025-02-28",
    changes: [
      {
        kind: "added",
        ja: "`ThemeClient` で Anthropic のモデルを使えるようにし、使うモデルを選べるようにしました",
        en: "`ThemeClient` now supports Anthropic models and lets you choose the model.",
      },
    ],
  },
  {
    version: "0.9.0",
    changes: [
      {
        kind: "breaking",
        ja: "パッケージ名を `@ginga-ui` スコープに変え、コンポーネントごとのパッケージに分けました",
        en: "Packages moved to the `@ginga-ui` scope and were split into one package per component.",
      },
    ],
  },
  {
    version: "0.8.1",
    date: "2025-01-30",
    changes: [
      {
        kind: "breaking",
        ja: "状態を表す props の名前を `isDisabled`・`isSelected`・`isRequired` などにそろえました",
        en: "State props were unified as `isDisabled`, `isSelected`, `isRequired`, and so on.",
      },
      {
        kind: "added",
        ja: "`Button` に `reverse` バリアントを追加し、`ListItem` を export しました",
        en: "Added the `reverse` variant to `Button` and exported `ListItem`.",
      },
      {
        kind: "fixed",
        ja: "`Paragraph` が `p` 要素で描画されるようにしました",
        en: "`Paragraph` now renders a `p` element.",
      },
    ],
  },
  {
    version: "0.8.0",
    date: "2025-01-22",
    changes: [
      {
        kind: "added",
        ja: "MIT ライセンスを明記しました",
        en: "Added the MIT license.",
      },
      {
        kind: "fixed",
        ja: "`Heading` と `Paragraph` の文字色を修正しました",
        en: "Fixed the text color of `Heading` and `Paragraph`.",
      },
    ],
  },
  {
    version: "0.7.11",
    date: "2025-01-14",
    changes: [
      {
        kind: "breaking",
        ja: "`Container` と `Flex` を削除しました。代わりに `Box` を使ってください",
        en: "Removed `Container` and `Flex`. Use `Box` instead.",
      },
      {
        kind: "added",
        ja: "`Box` を追加しました",
        en: "Added `Box`.",
      },
    ],
  },
  {
    version: "0.7.10",
    date: "2025-01-13",
    changes: [
      {
        kind: "changed",
        ja: "`Button` の props を見直しました",
        en: "Revised the `Button` props.",
      },
      {
        kind: "fixed",
        ja: "CSS ファイルの名前を修正しました",
        en: "Fixed the CSS file name.",
      },
    ],
  },
  {
    version: "0.7.9",
    date: "2025-01-09",
    changes: [
      {
        kind: "added",
        ja: "CommonJS 形式でも配布し、コンポーネントを `ginga-ui/core` から import できるようにしました",
        en: "Added a CommonJS build and made components importable from `ginga-ui/core`.",
      },
      {
        kind: "fixed",
        ja: "Next.js で `ThemeClient` を import できない不具合を修正しました",
        en: "Fixed `ThemeClient` failing to import in Next.js.",
      },
    ],
  },
  {
    version: "0.7.8",
    date: "2025-01-08",
    changes: [
      {
        kind: "fixed",
        ja: "ビルド設定を修正しました",
        en: "Fixed the build configuration.",
      },
    ],
  },
  {
    version: "0.7.7",
    date: "2025-01-07",
    changes: [
      {
        kind: "added",
        ja: "SSR 向けのオプションを追加しました",
        en: "Added an option for server-side rendering.",
      },
    ],
  },
  {
    version: "0.7.6",
    date: "2025-01-07",
    changes: [
      {
        kind: "added",
        ja: "`List` を追加しました",
        en: "Added `List`.",
      },
      {
        kind: "fixed",
        ja: "peerDependencies を修正しました",
        en: "Fixed the peer dependencies.",
      },
    ],
  },
  {
    version: "0.7.5",
    date: "2025-01-06",
    changes: [
      {
        kind: "fixed",
        ja: "React に起因するエラーを修正しました",
        en: "Fixed an error caused by React.",
      },
    ],
  },
  {
    version: "0.7.4",
    date: "2025-01-06",
    changes: [
      {
        kind: "added",
        ja: "コンポーネントを個別のファイルから import できるようにしました",
        en: "Components can be imported from their own files.",
      },
    ],
  },
  {
    version: "0.7.3",
    date: "2025-01-06",
    changes: [
      {
        kind: "changed",
        ja: "全コンポーネントで `React.forwardRef` をやめ、文字色を見直しました",
        en: "Removed `React.forwardRef` from every component and adjusted the text color.",
      },
    ],
  },
  {
    version: "0.7.2",
    date: "2025-01-06",
    changes: [
      {
        kind: "added",
        ja: '全コンポーネントに `"use client"` を付け、Server Components から使えるようにしました',
        en: 'Added `"use client"` to every component so they can be used from Server Components.',
      },
      {
        kind: "fixed",
        ja: "`ButtonGroup` の不具合を修正しました",
        en: "Fixed a bug in `ButtonGroup`.",
      },
    ],
  },
  {
    version: "0.7.1",
    date: "2025-01-06",
    changes: [
      {
        kind: "added",
        ja: "`Table` を追加しました",
        en: "Added `Table`.",
      },
      {
        kind: "fixed",
        ja: "生成したテーマのコントラスト比の判定を改善しました",
        en: "Improved the contrast ratio check for generated themes.",
      },
    ],
  },
  {
    version: "0.7.0",
    date: "2025-01-03",
    changes: [
      {
        kind: "added",
        ja: "`Dialog` と `Select` を追加しました",
        en: "Added `Dialog` and `Select`.",
      },
      {
        kind: "changed",
        ja: "生成したテーマのコントラスト比が 3.0 以上になるようにしました",
        en: "Generated themes now keep a contrast ratio of at least 3.0.",
      },
    ],
  },
  {
    version: "0.6.0",
    date: "2025-01-03",
    changes: [
      {
        kind: "added",
        ja: "テーマ生成で Gemini を使えるようにしました",
        en: "Theme generation now supports Gemini.",
      },
      {
        kind: "breaking",
        ja: "テーマ生成を `ThemeClient` クラスから呼ぶ形にしました",
        en: "Theme generation is now called through the `ThemeClient` class.",
      },
    ],
  },
  {
    version: "0.5.0",
    changes: [
      {
        kind: "added",
        ja: "コントラスト比が 3.0 を下回るとテーマを作り直し、OpenAI の応答を検証するようにしました",
        en: "Themes are regenerated when the contrast ratio falls below 3.0, and OpenAI responses are validated.",
      },
      {
        kind: "added",
        ja: "Storybook を Chromatic で公開しました",
        en: "Published Storybook on Chromatic.",
      },
    ],
  },
  {
    version: "0.4.2",
    date: "2024-12-09",
    changes: [
      {
        kind: "changed",
        ja: "コンポーネントごとに別の CSS 変数を使うようにしました",
        en: "Each component now uses its own CSS variables.",
      },
      {
        kind: "fixed",
        ja: "`Accordion` のアクセシビリティを改善しました",
        en: "Improved the accessibility of `Accordion`.",
      },
    ],
  },
  {
    version: "0.4.1",
    changes: [
      {
        kind: "added",
        ja: "`Paragraph` と `Image` を追加し、全コンポーネントのデザインを見直しました",
        en: "Added `Paragraph` and `Image`, and revised the design of every component.",
      },
      {
        kind: "fixed",
        ja: "CSS 変数が正しく設定されない不具合を修正しました",
        en: "Fixed CSS variables not being set correctly.",
      },
    ],
  },
  {
    version: "0.4.0",
    changes: [
      {
        kind: "added",
        ja: "`Container` と `Flex` を追加し、テーマ生成で OpenAI クライアントのオプションを渡せるようにしました",
        en: "Added `Container` and `Flex`, and theme generation accepts OpenAI client options.",
      },
    ],
  },
  {
    version: "0.3.0",
    date: "2024-11-12",
    changes: [
      {
        kind: "added",
        ja: "生成したプライマリ色とセカンダリ色から中間色のスケールを作るようにし、全コンポーネントのデザインを見直しました",
        en: "Color scales are now built from the generated primary and secondary colors, and every component was redesigned.",
      },
    ],
  },
  {
    version: "0.2.2",
    date: "2024-11-06",
    changes: [
      {
        kind: "added",
        ja: "`Slider`・`Accordion` と、色のスケールを作る `generateColorMap` を追加しました",
        en: "Added `Slider`, `Accordion`, and `generateColorMap` for building color scales.",
      },
    ],
  },
  {
    version: "0.2.0",
    date: "2024-10-24",
    changes: [
      {
        kind: "added",
        ja: "`ButtonGroup` を追加しました",
        en: "Added `ButtonGroup`.",
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2024-10-22",
    changes: [
      {
        kind: "added",
        ja: "`Card`・`Link`・`FormControl`・`RadioGroup`・`CheckboxGroup` を追加しました",
        en: "Added `Card`, `Link`, `FormControl`, `RadioGroup`, and `CheckboxGroup`.",
      },
      {
        kind: "added",
        ja: "OpenAI API で CSS 変数を生成できるようにしました",
        en: "CSS variables can be generated with the OpenAI API.",
      },
    ],
  },
  {
    version: "0.0.0",
    changes: [
      {
        kind: "added",
        ja: "最初のリリースです。`Button`・`Switch`・`Checkbox`・`Input`・`Heading` を含みます",
        en: "Initial release with `Button`, `Switch`, `Checkbox`, `Input`, and `Heading`.",
      },
    ],
  },
];
