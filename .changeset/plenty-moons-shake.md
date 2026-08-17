---
"@ginga-ui/core": minor
"@ginga-ui/utils": minor
---

CodeBlock コンポーネントを追加し、Card と Anchor のスタイルを見直し

- CodeBlock コンポーネントを新規追加。クリップボードコピー機能を内蔵し、シンタックスハイライト済みの React 要素を children で注入可能(shiki 等は非内包)
- Card の視覚変更: CodeBlock と同じ外観に統一(border を `--color-primary-2` に、padding 1rem を Card 本体に移動し各セクションの間隔は gap で管理)し、box-shadow を削除
- Anchor `variant="button"` の視覚変更: Button と統一(角丸を `calc(var(--size-radius) * 0.5)` に、フォーカスリングを outline 方式に、disabled 表現と transition を Button と同一に)

AlertDialog / Drawer / Popover / Alert / Badge / Toast コンポーネントを追加

- variables.css にセマンティックカラー変数(`--color-info` / `--color-success` / `--color-warning` / `--color-danger` とそれぞれの `-light` / `-dark`)を追加
- Alert: タイトルと説明文を持つ静的表示コンポーネント。info / success / warning / danger の4バリアント
- Badge: primary / secondary と状態色4種の計6バリアントを持つバッジ
- AlertDialog: `role="alertdialog"` 固定のダイアログ。既存の Modal / DialogTrigger と組み合わせて使用
- Drawer: placement で4方向(left / right / top / bottom)のスライドインに対応。dismissable prop で外側クリック時の挙動を制御
- Popover: react-aria の Popover をラップし、非モーダル Dialog と矢印(OverlayArrow)を内蔵。placement / showArrow でカスタマイズ可能
- Toast: react-aria の UNSTABLE\_ Toast API をラップ。`toast.show` / `info` / `success` / `warning` / `danger` / `close` の関数 API と、4隅に配置可能な ToastRegion を提供

stylelint で `font-weight` を 400 / 700、長さの rem を 0.125rem 刻みに制限し、違反箇所を修正

ThemeClient のプロバイダー指定方法を変更し、デフォルトモデルを更新(破壊的変更)

- `new ThemeClient({ model })` → `new ThemeClient({ provider, model? })` に変更。`provider` は `"openai"` / `"google"` / `"anthropic"` の必須指定
- モデル名のプレフィックス(`gpt-` / `o1` / `claude-` / `gemini-`)によるプロバイダー自動判定を廃止。新世代モデル(`gpt-5.6-*` や `o3` 等)が `Unsupported model` になる問題を解消
- `model` を省略した場合のデフォルトモデルを更新: openai は `gpt-5.6-luna`、google は `gemini-3.7-flash`、anthropic は `claude-haiku-4-5`
- `ThemeProvider` 型と `DEFAULT_MODELS` / `PROVIDERS` を新たにエクスポート
- ドキュメントサイト・README・Storybook のモデル例リストを最新世代に更新
- AI SDK を同世代の最新版に更新(`ai` 7.0.58 / `@ai-sdk/openai` 4.0.36 / `@ai-sdk/google` 4.0.39 / `@ai-sdk/anthropic` 4.0.36)
