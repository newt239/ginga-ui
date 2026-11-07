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
