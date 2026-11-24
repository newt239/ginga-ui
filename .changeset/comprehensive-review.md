---
"@ginga-ui/core": minor
"@ginga-ui/utils": minor
---

不具合とアクセシビリティの問題をまとめて修正しました。破壊的変更を含みます。

- CommonJS の配布をやめ、ESM のみにしました。CommonJS 版は CSS の読み込みで失敗しており、動いていませんでした
- `react` と `react-dom` の peerDependencies を 19 以上にしました。ref は props として渡せます
- RAC 由来の props 名を `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable` にそろえました
- `Modal` の背景を `ModalOverlay` に分け、`dismissable` で外側クリックで閉じるようにしました。背景の装飾は `overlayClassName` で指定します
- `Drawer` の `dismissable={false}` は、モーダルのまま外側クリックと Esc で閉じない挙動になりました
- `FormControl` の `title` を `label` に変え、ラベルとフィールドを context で関連付けるようにしました
- `Heading` の `level` を `"h1"` などの文字列から数値に変えました
- `Image` の `alt` を必須にしました
- `Table` の選択キーを行の index から行の `id`（または `getRowKey`）に変え、`showHeader={false}` や `isRowHeader` 省略で例外が出る不具合を修正しました
- `Popover` を RAC の `Popover` で作り直し、フォーカスが外へ抜けないようにしました
- `Select` に `description` と `errorMessage` を追加し、`Slider` に `SliderLabel` を追加しました
- `Toast` の閉じるボタンと `Trace` の状態ラベルをロケールに合わせて読み上げるようにしました
- 関数形式の `className` を渡すと描画時に例外が出る不具合を修正しました
- テーマ生成の検証と補正を作り直しました。生成値は形式と範囲を検証してから CSS に出力し、コントラスト不足は確実に補正します。リトライと `maxRetries` オプションは廃止しました
- `generateTheme` の失敗時の戻り値を `{ type: "error", message }` に変更しました
- 未使用の `generateColors` / `generateColorsMap` / `generateIntermediateColors` を削除しました
- すべてのコンポーネントで `render` を受け取り、`next/link` などの別のコンポーネントでルート要素を描画できるようにしました。`Modal` の `render` は `className` と同じ内側の要素に渡し、`Anchor` の `render` は `href` があるときだけ使います
- `SegmentedControl` のスタイルを作り直しました。薄い背景の外枠の中で選択中の項目をアクセント色で塗る表示になり、切り替え時に選択中の背景が横へスライドします。`size="lg"` を追加しました
- `Tabs` を、選択中のタブにアクセント色の下線を引く表示に変えました。`TabList` は横幅いっぱいに広がり、下端に区切り線を引きます
- `CardDescription` を削除しました。説明文が必要な場合は `CardHeader` 内に任意の要素を置いてください
- `Card` を `render` でリンクとして描画したとき、`CardTitle` に破線の下線を引き、ホバーで実線にするようにしました。カード全体に下線が付く不具合も修正し、フォーカスリングを追加しました
- `Input` と `Select` の高さが `Button` より 4px 高くなっていたのを、`--size-control-md` にそろえました
- フォーム部品の枠線色 `--color-control-border` にプライマリ色を混ぜるのをやめ、文字色と背景色から作る無彩色にしました
- `Questionnaire` の選択肢の枠線を `Input` と同じ色にし、ホバー時と無効時の見た目も `Input` にそろえました
- ネストした `List` の上下のマージンが崩れていたのを修正しました
- `@ginga-ui/utils` が依存する `ai` と `@ai-sdk/anthropic` / `@ai-sdk/google` / `@ai-sdk/openai` を更新しました
- `Tooltip`・`Menu`・`ComboBox`・`NumberField`・`SearchField` を追加しました
- `FormControl` の中に `NumberField` と `SearchField` を置くと、ラベルが関連付けられるようにしました
- `Popover` の矢印が枠線の内側にずれて小さく見えていたのを修正し、内容の先頭と末尾の要素の余白を詰めました
- `Table` を、外枠線で囲み、見出し行と各行の間に区切り線を引く一般的な表示に変えました。見出し行は薄い背景色で区別し、行ごとの角丸をなくしました
- `CodeBlock` のファイル名の行の下線を `--border-width` の太さにしました
