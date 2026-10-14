---
"@ginga-ui/utils": minor
"@ginga-ui/core": minor
---

ThemeClient のコンストラクタで apiKey を直接指定できるようにしました。指定しない場合は従来どおり環境変数が使われます。

ThemeClient のデフォルトモデルを各プロバイダーの最新シリーズに更新しました。OpenAI は `gpt-6-luna`、Google は `gemini-3.8-flash`、Anthropic は `claude-haiku-5-5` です。あわせて、非推奨になった AI SDK の `generateObject` を `generateText` と `Output.object` に置き換えました。

全コンポーネントのデザインを刷新しました。区切りの細いボーダーをやめて面で構成し、フォーカスリングとコントラストを WCAG 2.2 AA に合わせて統一しています。

- `variables.css` に派生トークン (`--color-text`、`--color-accent`、`--color-surface`、`--radius-*`、`--focus-ring-*` など) を追加
- Button に `ghost` バリアントと `size` (`sm` / `md` / `lg`) を追加
- Anchor の `variant="button"` で `buttonVariant` と `size` を指定できるように変更し、通常リンクは破線の下線に変更
- Alert / Toast / AlertDialog で `icon` を指定できるように変更
- CodeBlock に `files` を追加し、複数ファイルをタブで切り替えられるように変更
- `SelectItem` を export
- Heading のサイズ指定が効いていなかった不具合を修正
- Button の文字サイズを一段階大きくし、入力欄の枠線色を主色寄りのグレーに変更
- 依存パッケージ (react-aria-components など) を最新版に更新
- 破壊的変更: List のクラス名を `ginga-list-item` などに、Table のクラス名を `ginga-table-row` / `ginga-table-column` / `ginga-table-cell` に、Select のラベルのクラス名を `ginga-select-label` に変更。AccordionTrigger は見出し要素 (既定は h3) で包まれるように変更
- Button と Anchor (`variant="button"`) に、ラベルの前後へアイコンを置く `startIcon` / `endIcon` を追加
- Slider で開始点と終了点を指定する範囲選択に対応し、つまみがトラックの中心からずれていた不具合を修正
- Table に `striped` を追加し、見出し行を背景色で区別できるように変更。行選択とチェックボックスの状態がずれる不具合も修正
- Drawer の `dismissable={false}` を非モーダルに変更。背景を暗くせずにページを操作でき、開いている間はページの幅を保ったままドロワーの幅だけ余白を付ける
- Popover を開いている間もページをスクロールでき、位置がトリガーに追従するように変更。影をやめてボーダーで囲むデザインに変更
- Switch の角丸が `--size-radius` に追従するように変更
- 無効なボタンにホバーしたとき not-allowed カーソルを表示
- Alert・Tabs・Paragraph・Card・Box・List・CodeBlock・FormControl・Input・Select を既定で横幅いっぱいに表示
- 破壊的変更: コンポーネントに内蔵していたアイコンを廃止。Accordion・Select・Alert・AlertDialog・Toast・CodeBlock のアイコンは props (`icon`、`checkIcon`、`closeIcon`、`copyIcon` など) で指定する。Checkbox のチェックマークと Toast の閉じるボタンは、指定しない場合 CSS で描画する
- 破壊的変更: Popover の props を `placement`・`offset`・`crossOffset`・`shouldFlip`・`showArrow` などに絞った
