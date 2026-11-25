---
name: review-pr
description: Ginga UI の PR をレビューする。PR 番号・ブランチ名を渡すか、引数なしで現在のブランチの変更を対象にする。正しさ、WCAG 2.2 AA への準拠、デザインの一貫性、リポジトリの規約を確認し、重大度順に指摘を返す。「PR をレビューして」「#140 を見て」などと頼まれたときに使う。
---

# PR レビュー

## 1. 対象を集める

- PR 番号があれば `gh pr view <番号> --json title,body,baseRefName,headRefName,files` と `gh pr diff <番号>` で取得する
- ブランチ名なら `git diff main...<ブランチ>`、引数なしなら `gh pr view` で現在のブランチの PR を探し、なければ `git diff main...HEAD` を使う
- 差分だけで判断しない。変更されたファイルの全体、同じ種類の既存コンポーネント、`AGENTS.md`、`packages/core/src/variables.css` を読む
- `pnpm exec tsc --noEmit && pnpm exec oxlint --type-aware && pnpm exec oxfmt --check && pnpm exec stylelint "./**/*.css"` を実行し、失敗があれば指摘に含める。`pnpm run lint` などはファイルを書き換えるので、レビューでは使わない

## 2. 観点

### 正しさ

- 実行時エラー、型の誤り、条件の抜け、状態の不整合
- `"use client"` が必要な箇所、Server Components で使えない API の使用
- API キーがクライアントに渡らないか。`provider: "browser"` 以外のテーマ生成はサーバー側で行う
- テーマ生成で、LLM の生成値を検証せずに CSS へ連結していないか（`packages/utils/src/ai/theme.ts` を通す）

### アクセシビリティ（WCAG 2.2 AA）

ライトモード・ダークモード・生成テーマの 3 つの状態で確認する。React Aria Components (RAC) が提供する挙動を独自実装で上書きして壊していないかも見る。

- 1.3.1 情報及び関係性: 見出しの階層、リスト、表、ラベルとフィールドの関連付けがマークアップで表現されているか
- 1.4.3 コントラスト（最低限）: 文字は背景に対して 4.5:1（18.66px 以上の太字か 24px 以上は 3:1）
- 1.4.10 リフロー: 幅 320 CSS px で横スクロールが要らないか（表やコードなど二次元のものは除く）
- 1.4.11 非テキストのコントラスト: 枠線・アイコン・フォーカスリング・状態表示が隣接色に対して 3:1
- 1.4.12 テキストの間隔: 行間や文字間隔を広げても切れたり重なったりしないか（高さの固定に注意）
- 1.4.13 ホバー又はフォーカスで表示されるコンテンツ: Tooltip などが消せる・ホバーし続けられる・勝手に消えない
- 2.1.1 キーボード / 2.1.2 キーボードトラップなし: すべての操作がキーボードででき、モーダル以外でフォーカスが閉じ込められない
- 2.4.3 フォーカス順序: DOM 順と見た目の順が合っているか、オーバーレイを閉じたあとトリガーに戻るか
- 2.4.7 フォーカスの可視化: `:focus-visible` で `--focus-ring-width` / `--color-focus` のリングが出るか。`outline: none` だけで代替がないものは不可
- 2.4.11 フォーカスが隠されない（最低限）: sticky ヘッダーやオーバーレイでフォーカス中の要素が完全に隠れないか
- 2.5.7 ドラッグ操作: Slider などドラッグする UI にクリックやキー操作の代替があるか
- 2.5.8 ターゲットのサイズ（最低限）: 操作対象が 24×24 CSS px 以上、または周囲に十分な間隔があるか
- 3.2.1 / 3.2.2: フォーカスや入力だけで予期しない遷移や送信が起きないか
- 3.3.1 エラーの特定 / 3.3.2 ラベル又は説明: エラーが文字で示され、入力欄に可視ラベルがあるか
- 4.1.2 名前・役割及び値: アイコンだけのボタンに `aria-label` があるか、独自の役割や状態が支援技術に伝わるか
- 4.1.3 ステータスメッセージ: Toast などの通知がフォーカス移動なしで読み上げられるか
- `prefers-reduced-motion` でアニメーションを抑えているか

### デザインの一貫性

- 色・寸法・角丸・影・動きは `variables.css` のトークンを使い、直値を書かない
  - 色: `--color-text` / `--color-text-muted` / `--color-surface*` / `--color-accent*` / `--color-on-accent` / `--color-control-border` / `--color-info|success|warning|danger(-light|-dark)` / `--color-primary-0`〜`9` など
  - 寸法: `--size-control-sm|md|lg`、`--radius-sm|md|lg|pill`、`--border-width`、`--focus-ring-width` / `--focus-ring-offset`
  - 動き: `--transition` / `--duration` / `--easing`、影は `--shadow-sm` / `--shadow-overlay`
- 長さは rem で 0.125rem 刻み、`font-weight` は 400 か 700、線は `--border-width` 以上（1px の線は使わない）
- 同じ種類の既存コンポーネントと、高さ・余白・角丸・hover / focus / disabled / invalid の表現がそろっているか（例: 新しい入力部品は `Input` と、ボタン状の要素は `Button` と比べる）
- 囲みの中に囲みを作っていないか。区切りは余白で行う
- フォーム・カード・ダイアログ内の単一ボタンは右揃え
- 狭い幅、ダークモード、生成テーマ（極端な色でも）で崩れないか
- docs の文言に「〇〇で、〇〇。」型のキャッチコピーや飾りの見出しがないか

### リポジトリの規約

- RAC の `className` は `composeRenderProps(className, (c) => cn("ginga-xxx", c))` で合成している
- ルート要素を `render` で差し替えられる。HTML 要素のコンポーネントは `src/lib/render-element.ts` の `renderElement` を使う
- 状態の props は `disabled` / `required` / `selected` / `readOnly` / `invalid` / `expanded` / `dismissable`
- `forwardRef` を使わず `ref` を props で受け取る
- コードにコメントを書いていない
- docs のスタイルは CSS Modules で書き、inline style を使っていない
- `@ginga-ui/core` を変えたら、docs（`src/data/props.ts`・`src/examples/{ja,en}/`・使用箇所）と Storybook も更新している
- 公開パッケージを変えたら changeset がある。未リリースの changeset があれば新規作成せず追記している
- 利用者に影響する変更は、リリース時に `apps/ginga-ui.com/src/data/changelog.ts` に日本語と英語で載せる

## 3. 報告

- 指摘は重大度順に並べる
  - **必須**: バグ、WCAG 2.2 AA の不適合、破壊的変更の記載漏れ
  - **推奨**: デザインの不一致、規約違反、テストやドキュメントの不足
  - **軽微**: 命名や書き方の改善
- 各指摘に `ファイル:行`、何が問題か、どういう条件で起きるか、直し方を 1〜3 行で書く
- 確かめられなかったこと（実機での読み上げなど）は推測で断定せず「未確認」と書く
- 問題がなければその旨と、確認した観点を短く書く
- PR へのコメント投稿（`gh pr review`）は、ユーザーに頼まれたときだけ行う
