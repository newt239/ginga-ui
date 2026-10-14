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
- Alert / Toast / AlertDialog に種別アイコンを追加し、Alert に `icon` を追加
- CodeBlock に `files` を追加し、複数ファイルをタブで切り替えられるように変更
- `SelectItem` を export し、Select の矢印・Accordion の開閉アイコンを SVG に変更
- Heading のサイズ指定が効いていなかった不具合を修正
- Button の文字サイズを一段階大きくし、入力欄の枠線色を主色寄りのグレーに変更
- 依存パッケージ (react-aria-components など) を最新版に更新
- 破壊的変更: List のクラス名を `ginga-list-item` などに、Table のクラス名を `ginga-table-row` / `ginga-table-column` / `ginga-table-cell` に、Select のラベルのクラス名を `ginga-select-label` に変更。AccordionTrigger は見出し要素 (既定は h3) で包まれるように変更
