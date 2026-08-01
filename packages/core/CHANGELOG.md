# @ginga-ui/core

## 0.14.0

### Minor Changes

- 938f85a: CodeBlock コンポーネントを追加し、Card と Anchor のスタイルを見直し

  - CodeBlock コンポーネントを新規追加。クリップボードコピー機能を内蔵し、シンタックスハイライト済みの React 要素を children で注入可能(shiki 等は非内包)
  - Card の視覚変更: CodeBlock と同じ外観に統一(border を `--color-primary-2` に、padding 1rem を Card 本体に移動し各セクションの間隔は gap で管理)し、box-shadow を削除
  - Anchor `variant="button"` の視覚変更: Button と統一(角丸を `calc(var(--size-radius) * 0.5)` に、フォーカスリングを outline 方式に、disabled 表現と transition を Button と同一に)

  AlertDialog / Drawer / Popover / Alert / Badge / Toast コンポーネントを追加

  - variables.css にセマンティックカラー変数(`--color-info` / `--color-success` / `--color-warning` / `--color-danger` とそれぞれの `-light` / `-dark`)を追加
  - Alert: タイトルと説明文を持つ静的表示コンポーネント。info / success / warning / danger の 4 バリアント
  - Badge: primary / secondary と状態色 4 種の計 6 バリアントを持つバッジ
  - AlertDialog: `role="alertdialog"` 固定のダイアログ。既存の Modal / DialogTrigger と組み合わせて使用
  - Drawer: placement で 4 方向(left / right / top / bottom)のスライドインに対応。dismissable prop で外側クリック時の挙動を制御
  - Popover: react-aria の Popover をラップし、非モーダル Dialog と矢印(OverlayArrow)を内蔵。placement / showArrow でカスタマイズ可能
  - Toast: react-aria の UNSTABLE\_ Toast API をラップ。`toast.show` / `info` / `success` / `warning` / `danger` / `close` の関数 API と、4 隅に配置可能な ToastRegion を提供

### Patch Changes

- @ginga-ui/utils@0.14.0

## 0.12.2

### Patch Changes

- 60bf83d: ビルドツールを tsup から tsdown（Rolldown ベース）へ移行しました。公開している exports（`.`、`./index.css`、`./variables.css`）は変更ありません。CSS は `@tsdown/css` により `dist/index.css` へ一括バンドルされます。
- Updated dependencies [60bf83d]
  - @ginga-ui/utils@0.13.2

## 0.12.1

### Patch Changes

- 52adcd6: fix deploy workflow
- Updated dependencies [52adcd6]
  - @ginga-ui/utils@0.13.1

## 0.12.0

### Minor Changes

- 69b40d6: change package schemas

### Patch Changes

- Updated dependencies [69b40d6]
  - @ginga-ui/utils@0.13.0

## 0.11.0

### Minor Changes

- ec9d767: change the usage of ai feature

### Patch Changes

- 3c2a565: upgrade dependencies and setup oxlint, oxfmt
- Updated dependencies [3c2a565]
- Updated dependencies [ec9d767]
  - @ginga-ui/form-control@0.11.0
  - @ginga-ui/accordion@0.11.0
  - @ginga-ui/paragraph@0.11.0
  - @ginga-ui/checkbox@0.11.0
  - @ginga-ui/heading@0.11.0
  - @ginga-ui/anchor@0.11.0
  - @ginga-ui/button@0.11.0
  - @ginga-ui/dialog@0.11.0
  - @ginga-ui/select@0.11.0
  - @ginga-ui/slider@0.11.0
  - @ginga-ui/switch@0.11.0
  - @ginga-ui/image@0.11.0
  - @ginga-ui/input@0.11.0
  - @ginga-ui/radio@0.11.0
  - @ginga-ui/table@0.11.0
  - @ginga-ui/card@0.11.0
  - @ginga-ui/list@0.11.0
  - @ginga-ui/box@0.11.0
  - @ginga-ui/tab@0.11.0
  - @ginga-ui/utils@0.12.0

## 0.10.3

### Patch Changes

- 4d7f452: remove css modules
- Updated dependencies [4d7f452]
  - @ginga-ui/form-control@0.10.3
  - @ginga-ui/accordion@0.10.3
  - @ginga-ui/paragraph@0.10.3
  - @ginga-ui/checkbox@0.10.3
  - @ginga-ui/heading@0.10.3
  - @ginga-ui/anchor@0.10.3
  - @ginga-ui/button@0.10.3
  - @ginga-ui/dialog@0.10.3
  - @ginga-ui/select@0.10.3
  - @ginga-ui/slider@0.10.3
  - @ginga-ui/switch@0.10.3
  - @ginga-ui/image@0.10.3
  - @ginga-ui/input@0.10.3
  - @ginga-ui/radio@0.10.3
  - @ginga-ui/table@0.10.3
  - @ginga-ui/card@0.10.3
  - @ginga-ui/list@0.10.3
  - @ginga-ui/box@0.10.3
  - @ginga-ui/tab@0.10.3
  - @ginga-ui/utils@0.11.2

## 0.10.2

### Patch Changes

- Updated dependencies [577c307]
  - @ginga-ui/utils@0.11.1
  - @ginga-ui/accordion@0.10.2
  - @ginga-ui/anchor@0.10.2
  - @ginga-ui/box@0.10.2
  - @ginga-ui/button@0.10.2
  - @ginga-ui/card@0.10.2
  - @ginga-ui/checkbox@0.10.2
  - @ginga-ui/dialog@0.10.2
  - @ginga-ui/form-control@0.10.2
  - @ginga-ui/heading@0.10.2
  - @ginga-ui/image@0.10.2
  - @ginga-ui/input@0.10.2
  - @ginga-ui/list@0.10.2
  - @ginga-ui/paragraph@0.10.2
  - @ginga-ui/radio@0.10.2
  - @ginga-ui/select@0.10.2
  - @ginga-ui/slider@0.10.2
  - @ginga-ui/switch@0.10.2
  - @ginga-ui/tab@0.10.2
  - @ginga-ui/table@0.10.2

## 0.10.1

### Patch Changes

- Updated dependencies [c95a983]
  - @ginga-ui/utils@0.11.0
  - @ginga-ui/accordion@0.10.1
  - @ginga-ui/anchor@0.10.1
  - @ginga-ui/box@0.10.1
  - @ginga-ui/button@0.10.1
  - @ginga-ui/card@0.10.1
  - @ginga-ui/checkbox@0.10.1
  - @ginga-ui/dialog@0.10.1
  - @ginga-ui/form-control@0.10.1
  - @ginga-ui/heading@0.10.1
  - @ginga-ui/image@0.10.1
  - @ginga-ui/input@0.10.1
  - @ginga-ui/list@0.10.1
  - @ginga-ui/paragraph@0.10.1
  - @ginga-ui/radio@0.10.1
  - @ginga-ui/select@0.10.1
  - @ginga-ui/slider@0.10.1
  - @ginga-ui/switch@0.10.1
  - @ginga-ui/tab@0.10.1
  - @ginga-ui/table@0.10.1

## 0.10.0

### Minor Changes

- 091e6cd: fix: export config

### Patch Changes

- Updated dependencies [091e6cd]
  - @ginga-ui/form-control@0.10.0
  - @ginga-ui/accordion@0.10.0
  - @ginga-ui/paragraph@0.10.0
  - @ginga-ui/checkbox@0.10.0
  - @ginga-ui/heading@0.10.0
  - @ginga-ui/anchor@0.10.0
  - @ginga-ui/button@0.10.0
  - @ginga-ui/dialog@0.10.0
  - @ginga-ui/select@0.10.0
  - @ginga-ui/slider@0.10.0
  - @ginga-ui/switch@0.10.0
  - @ginga-ui/image@0.10.0
  - @ginga-ui/input@0.10.0
  - @ginga-ui/radio@0.10.0
  - @ginga-ui/table@0.10.0
  - @ginga-ui/card@0.10.0
  - @ginga-ui/list@0.10.0
  - @ginga-ui/box@0.10.0
  - @ginga-ui/tab@0.10.0
  - @ginga-ui/utils@0.10.0

## 0.9.9

### Patch Changes

- e66ad5d: fix: tsup config
- Updated dependencies [e66ad5d]
  - @ginga-ui/form-control@0.9.9
  - @ginga-ui/accordion@0.9.9
  - @ginga-ui/paragraph@0.9.9
  - @ginga-ui/checkbox@0.9.9
  - @ginga-ui/heading@0.9.9
  - @ginga-ui/anchor@0.9.9
  - @ginga-ui/button@0.9.9
  - @ginga-ui/dialog@0.9.9
  - @ginga-ui/select@0.9.9
  - @ginga-ui/slider@0.9.9
  - @ginga-ui/switch@0.9.9
  - @ginga-ui/image@0.9.9
  - @ginga-ui/input@0.9.9
  - @ginga-ui/radio@0.9.9
  - @ginga-ui/table@0.9.9
  - @ginga-ui/card@0.9.9
  - @ginga-ui/list@0.9.9
  - @ginga-ui/box@0.9.9
  - @ginga-ui/tab@0.9.9
  - @ginga-ui/utils@0.9.9

## 0.9.8

### Patch Changes

- ae49196: fix: file ext on exports field
- Updated dependencies [ae49196]
  - @ginga-ui/form-control@0.9.8
  - @ginga-ui/accordion@0.9.8
  - @ginga-ui/paragraph@0.9.8
  - @ginga-ui/checkbox@0.9.8
  - @ginga-ui/heading@0.9.8
  - @ginga-ui/anchor@0.9.8
  - @ginga-ui/button@0.9.8
  - @ginga-ui/dialog@0.9.8
  - @ginga-ui/select@0.9.8
  - @ginga-ui/slider@0.9.8
  - @ginga-ui/switch@0.9.8
  - @ginga-ui/image@0.9.8
  - @ginga-ui/input@0.9.8
  - @ginga-ui/radio@0.9.8
  - @ginga-ui/table@0.9.8
  - @ginga-ui/card@0.9.8
  - @ginga-ui/list@0.9.8
  - @ginga-ui/box@0.9.8
  - @ginga-ui/tab@0.9.8
  - @ginga-ui/utils@0.9.8

## 0.9.7

### Patch Changes

- 0f0fc0f: fix: change entry points
- Updated dependencies [0f0fc0f]
  - @ginga-ui/form-control@0.9.7
  - @ginga-ui/accordion@0.9.7
  - @ginga-ui/paragraph@0.9.7
  - @ginga-ui/checkbox@0.9.7
  - @ginga-ui/heading@0.9.7
  - @ginga-ui/anchor@0.9.7
  - @ginga-ui/button@0.9.7
  - @ginga-ui/dialog@0.9.7
  - @ginga-ui/select@0.9.7
  - @ginga-ui/slider@0.9.7
  - @ginga-ui/switch@0.9.7
  - @ginga-ui/image@0.9.7
  - @ginga-ui/input@0.9.7
  - @ginga-ui/radio@0.9.7
  - @ginga-ui/table@0.9.7
  - @ginga-ui/card@0.9.7
  - @ginga-ui/list@0.9.7
  - @ginga-ui/box@0.9.7
  - @ginga-ui/tab@0.9.7
  - @ginga-ui/utils@0.9.7

## 0.9.6

### Patch Changes

- 58e00e3: fix: export dist fir
- Updated dependencies [58e00e3]
  - @ginga-ui/form-control@0.9.6
  - @ginga-ui/accordion@0.9.6
  - @ginga-ui/paragraph@0.9.6
  - @ginga-ui/checkbox@0.9.6
  - @ginga-ui/heading@0.9.6
  - @ginga-ui/anchor@0.9.6
  - @ginga-ui/button@0.9.6
  - @ginga-ui/dialog@0.9.6
  - @ginga-ui/select@0.9.6
  - @ginga-ui/slider@0.9.6
  - @ginga-ui/switch@0.9.6
  - @ginga-ui/image@0.9.6
  - @ginga-ui/input@0.9.6
  - @ginga-ui/radio@0.9.6
  - @ginga-ui/table@0.9.6
  - @ginga-ui/card@0.9.6
  - @ginga-ui/list@0.9.6
  - @ginga-ui/box@0.9.6
  - @ginga-ui/tab@0.9.6
  - @ginga-ui/utils@0.9.6

## 0.9.5

### Patch Changes

- f762b56: fix: publish config
- Updated dependencies [f762b56]
  - @ginga-ui/form-control@0.9.5
  - @ginga-ui/accordion@0.9.5
  - @ginga-ui/paragraph@0.9.5
  - @ginga-ui/checkbox@0.9.5
  - @ginga-ui/heading@0.9.5
  - @ginga-ui/anchor@0.9.5
  - @ginga-ui/button@0.9.5
  - @ginga-ui/dialog@0.9.5
  - @ginga-ui/select@0.9.5
  - @ginga-ui/slider@0.9.5
  - @ginga-ui/switch@0.9.5
  - @ginga-ui/image@0.9.5
  - @ginga-ui/input@0.9.5
  - @ginga-ui/radio@0.9.5
  - @ginga-ui/table@0.9.5
  - @ginga-ui/card@0.9.5
  - @ginga-ui/list@0.9.5
  - @ginga-ui/box@0.9.5
  - @ginga-ui/tab@0.9.5
  - @ginga-ui/utils@0.9.5

## 0.9.4

### Patch Changes

- c8b2ee2: update dependencies
- Updated dependencies [c8b2ee2]
  - @ginga-ui/accordion@0.9.4
  - @ginga-ui/anchor@0.9.4
  - @ginga-ui/box@0.9.4
  - @ginga-ui/button@0.9.4
  - @ginga-ui/card@0.9.4
  - @ginga-ui/checkbox@0.9.4
  - @ginga-ui/dialog@0.9.4
  - @ginga-ui/form-control@0.9.4
  - @ginga-ui/heading@0.9.4
  - @ginga-ui/image@0.9.4
  - @ginga-ui/input@0.9.4
  - @ginga-ui/list@0.9.4
  - @ginga-ui/paragraph@0.9.4
  - @ginga-ui/radio@0.9.4
  - @ginga-ui/select@0.9.4
  - @ginga-ui/slider@0.9.4
  - @ginga-ui/switch@0.9.4
  - @ginga-ui/tab@0.9.4
  - @ginga-ui/table@0.9.4
  - @ginga-ui/utils@0.9.4

## 0.9.3

### Patch Changes

- 767f955: change filename case
- Updated dependencies [767f955]
  - @ginga-ui/form-control@0.9.3
  - @ginga-ui/accordion@0.9.3
  - @ginga-ui/paragraph@0.9.3
  - @ginga-ui/checkbox@0.9.3
  - @ginga-ui/heading@0.9.3
  - @ginga-ui/anchor@0.9.3
  - @ginga-ui/button@0.9.3
  - @ginga-ui/dialog@0.9.3
  - @ginga-ui/select@0.9.3
  - @ginga-ui/slider@0.9.3
  - @ginga-ui/switch@0.9.3
  - @ginga-ui/image@0.9.3
  - @ginga-ui/input@0.9.3
  - @ginga-ui/radio@0.9.3
  - @ginga-ui/table@0.9.3
  - @ginga-ui/card@0.9.3
  - @ginga-ui/list@0.9.3
  - @ginga-ui/box@0.9.3
  - @ginga-ui/tab@0.9.3
  - @ginga-ui/utils@0.9.3

## 0.9.2

### Patch Changes

- 96cb780: remove group components
- Updated dependencies [96cb780]
  - @ginga-ui/form-control@0.9.2
  - @ginga-ui/accordion@0.9.2
  - @ginga-ui/paragraph@0.9.2
  - @ginga-ui/checkbox@0.9.2
  - @ginga-ui/heading@0.9.2
  - @ginga-ui/anchor@0.9.2
  - @ginga-ui/button@0.9.2
  - @ginga-ui/dialog@0.9.2
  - @ginga-ui/select@0.9.2
  - @ginga-ui/slider@0.9.2
  - @ginga-ui/switch@0.9.2
  - @ginga-ui/image@0.9.2
  - @ginga-ui/input@0.9.2
  - @ginga-ui/radio@0.9.2
  - @ginga-ui/table@0.9.2
  - @ginga-ui/card@0.9.2
  - @ginga-ui/list@0.9.2
  - @ginga-ui/box@0.9.2
  - @ginga-ui/tab@0.9.2
  - @ginga-ui/utils@0.9.2

## 0.9.1

### Minor Changes

- 1235000: change: Introducing monorepo and splitting the package

### Patch Changes

- 1df2470: fix: workflow config
- Updated dependencies [1235000]
- Updated dependencies [1df2470]
  - @ginga-ui/checkbox-group@0.9.2
  - @ginga-ui/button-group@0.9.2
  - @ginga-ui/form-control@0.9.2
  - @ginga-ui/radio-group@0.9.2
  - @ginga-ui/accordion@0.9.2
  - @ginga-ui/paragraph@0.9.2
  - @ginga-ui/checkbox@0.9.2
  - @ginga-ui/heading@0.9.2
  - @ginga-ui/anchor@0.9.2
  - @ginga-ui/button@0.9.2
  - @ginga-ui/dialog@0.9.2
  - @ginga-ui/select@0.9.2
  - @ginga-ui/slider@0.9.2
  - @ginga-ui/switch@0.9.2
  - @ginga-ui/image@0.9.2
  - @ginga-ui/input@0.9.2
  - @ginga-ui/radio@0.9.2
  - @ginga-ui/table@0.9.2
  - @ginga-ui/card@0.9.2
  - @ginga-ui/list@0.9.2
  - @ginga-ui/box@0.9.2
  - @ginga-ui/tab@0.9.2
  - @ginga-ui/utils@0.9.2
