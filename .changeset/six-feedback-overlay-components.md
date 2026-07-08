---
"@ginga-ui/core": minor
---

AlertDialog / Drawer / Popover / Alert / Badge / Toast コンポーネントを追加

- variables.css にセマンティックカラー変数(`--color-info` / `--color-success` / `--color-warning` / `--color-danger` とそれぞれの `-light` / `-dark`)を追加
- Alert: タイトルと説明文を持つ静的表示コンポーネント。info / success / warning / danger の4バリアント
- Badge: primary / secondary と状態色4種の計6バリアントを持つバッジ
- AlertDialog: `role="alertdialog"` 固定のダイアログ。既存の Modal / DialogTrigger と組み合わせて使用
- Drawer: placement で4方向(left / right / top / bottom)のスライドインに対応。dismissable prop で外側クリック時の挙動を制御
- Popover: react-aria の Popover をラップし、非モーダル Dialog と矢印(OverlayArrow)を内蔵。placement / showArrow でカスタマイズ可能
- Toast: react-aria の UNSTABLE_ Toast API をラップ。`toast.show` / `info` / `success` / `warning` / `danger` / `close` の関数 API と、4隅に配置可能な ToastRegion を提供
