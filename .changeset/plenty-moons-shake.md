---
"@ginga-ui/core": minor
---

CodeBlock コンポーネントを追加し、Card と Anchor のスタイルを見直し

- CodeBlock コンポーネントを新規追加。クリップボードコピー機能を内蔵し、シンタックスハイライト済みの React 要素を children で注入可能(shiki 等は非内包)
- Card の視覚変更: CodeBlock と同じ外観に統一(border を `--color-primary-2` に、padding 1rem を Card 本体に移動し各セクションの間隔は gap で管理)し、box-shadow を削除
- Anchor `variant="button"` の視覚変更: Button と統一(角丸を `calc(var(--size-radius) * 0.5)` に、フォーカスリングを outline 方式に、disabled 表現と transition を Button と同一に)
