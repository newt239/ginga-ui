import type { Locale } from "#/i18n/locales";

type ExampleConfig = {
  name: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const EXAMPLE_CONFIGS: Record<string, ExampleConfig[]> = {
  accordion: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "The simplest accordion example.",
        ja: "最もシンプルなアコーディオンの使用例です。",
      },
    },
    {
      name: "MultipleExpansionExample",
      title: { en: "Multiple expansion", ja: "複数展開" },
      description: {
        en: "Multiple accordion items can be expanded at the same time.",
        ja: "複数のアコーディオンアイテムを同時に展開できます。",
      },
    },
    {
      name: "DefaultClosedExample",
      title: { en: "Closed by default", ja: "デフォルト閉じた状態" },
      description: {
        en: "An accordion with all items closed initially.",
        ja: "初期状態で全て閉じているアコーディオンです。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled accordion", ja: "制御されたアコーディオン" },
      description: {
        en: "An accordion whose state is controlled externally.",
        ja: "状態を外部から制御するアコーディオンです。",
      },
    },
  ],
  alert: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple alert with a title and description.",
        ja: "タイトルと説明文を持つシンプルなアラートです。",
      },
    },
    {
      name: "VariantsExample",
      title: { en: "Variants", ja: "バリアント" },
      description: {
        en: "Four variants are available: info, success, warning, and danger.",
        ja: "info、success、warning、dangerの4種類のバリアントを指定できます。",
      },
    },
    {
      name: "DescriptionOnlyExample",
      title: { en: "Description only", ja: "説明文のみ" },
      description: {
        en: "You can omit the title and show only the description. When inserting it dynamically as a notification, pass alert to the role attribute or consider using Toast.",
        ja: "タイトルを省略して説明文だけを表示できます。動的に挿入して通知する場合はrole属性にalertを渡すか、Toastの利用を検討してください。",
      },
    },
  ],
  "alert-dialog": [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "An alert dialog that asks for confirmation of a destructive action. It does not close when clicking outside and requires an explicit choice.",
        ja: "破壊的な操作の確認を求めるアラートダイアログです。外側をクリックしても閉じず、明示的な選択を求めます。",
      },
    },
    {
      name: "WarningExample",
      title: { en: "Warning variant", ja: "警告バリアント" },
      description: {
        en: "Use the variant prop to change the title color and accent.",
        ja: "variantプロップでタイトル色とアクセントを変更できます。",
      },
    },
    {
      name: "PlainExample",
      title: { en: "No variant", ja: "バリアントなし" },
      description: {
        en: "Without a variant, the dialog uses the default colors.",
        ja: "variantを指定しない場合は通常の配色で表示されます。",
      },
    },
  ],
  anchor: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple link example.",
        ja: "シンプルなリンクの使用例です。",
      },
    },
    {
      name: "ExternalExample",
      title: { en: "External link", ja: "外部リンク" },
      description: {
        en: "Opens a link to an external site in a new tab.",
        ja: "外部サイトへのリンクを新しいタブで開きます。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "Use the disabled prop to disable the link.",
        ja: "disabledプロップでリンクを無効化できます。",
      },
    },
    {
      name: "ButtonVariantExample",
      title: { en: "Button style", ja: "ボタンスタイル" },
      description: {
        en: 'Use variant="button" to make the link look like a button. buttonVariant and size accept the same variants and sizes as Button.',
        ja: 'variant="button"でボタンのような見た目のリンクになります。buttonVariantとsizeでButtonと同じバリアントとサイズを指定できます。',
      },
    },
  ],
  "code-block": [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "Displays the string passed to code, which can be copied to the clipboard with the copy button.",
        ja: "code に渡した文字列を表示し、コピーボタンでクリップボードにコピーできます。",
      },
    },
    {
      name: "FilenameExample",
      title: { en: "Filename", ja: "ファイル名" },
      description: {
        en: "Specify filename to show the file name above the code.",
        ja: "filename を指定すると、コードの上にファイル名を表示します。",
      },
    },
    {
      name: "FilesExample",
      title: { en: "Multiple files", ja: "複数ファイル" },
      description: {
        en: "Pass multiple files to files to switch between them with tabs.",
        ja: "files に複数のファイルを渡すと、タブで切り替えて表示できます。",
      },
    },
    {
      name: "WithIconExample",
      title: { en: "Copy button with icons", ja: "アイコン付きのコピーボタン" },
      description: {
        en: "Use copyIcon and copiedIcon to show icons in the copy button.",
        ja: "copyIcon と copiedIcon で、コピーボタンにアイコンを表示できます。",
      },
    },
  ],
  badge: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple badge example.",
        ja: "シンプルなバッジの使用例です。",
      },
    },
    {
      name: "VariantsExample",
      title: { en: "Variants", ja: "バリアント" },
      description: {
        en: "Six variants are available: primary, secondary, info, success, warning, and danger.",
        ja: "primary、secondary、info、success、warning、dangerの6種類のバリアントを指定できます。",
      },
    },
    {
      name: "WithTextExample",
      title: { en: "With text", ja: "テキストと組み合わせる" },
      description: {
        en: "Show a count or similar value next to text.",
        ja: "テキストの横に件数などを表示できます。",
      },
    },
  ],
  box: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple box example.",
        ja: "シンプルなボックスの使用例です。",
      },
    },
    {
      name: "LayoutExample",
      title: { en: "Layout", ja: "レイアウト" },
      description: {
        en: "A layout example using Flexbox.",
        ja: "Flexboxを使用したレイアウトの例です。",
      },
    },
    {
      name: "CardStyleExample",
      title: { en: "Card style", ja: "カードスタイル" },
      description: {
        en: "An example of card-like styling.",
        ja: "カードのようなスタイリングの例です。",
      },
    },
  ],
  button: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "The simplest button example.",
        ja: "最もシンプルなボタンの使用例です。",
      },
    },
    {
      name: "VariantsExample",
      title: { en: "Variants", ja: "バリエーション" },
      description: {
        en: "Shows the five variants (filled, light, outline, ghost, reverse).",
        ja: "5種類のバリアント(filled、light、outline、ghost、reverse)を表示します。",
      },
    },
    {
      name: "SizesExample",
      title: { en: "Sizes", ja: "サイズ" },
      description: {
        en: "Use the size prop to choose from three sizes: sm, md, and lg.",
        ja: "sizeプロップでsm、md、lgの3種類のサイズを指定できます。",
      },
    },
    {
      name: "WithIconExample",
      title: { en: "With icons", ja: "アイコン付き" },
      description: {
        en: "Use startIcon and endIcon to show icons before and after the label.",
        ja: "startIcon と endIcon で、ラベルの前後にアイコンを表示できます。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "Use the disabled prop to disable the button.",
        ja: "disabledプロップでボタンを無効化できます。",
      },
    },
    {
      name: "FormExample",
      title: { en: "In a form", ja: "フォームでの使用" },
      description: {
        en: "An example of using the button to submit a form.",
        ja: "フォーム送信ボタンとしての使用例です。",
      },
    },
  ],
  card: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A basic card with a header and content.",
        ja: "ヘッダーとコンテンツを持つ基本的なカードです。",
      },
    },
    {
      name: "WithFooterExample",
      title: { en: "With footer", ja: "フッター付き" },
      description: {
        en: "An example of a card with a footer.",
        ja: "フッターを持つカードの例です。",
      },
    },
    {
      name: "MultipleCardsExample",
      title: { en: "Multiple cards", ja: "複数のカード" },
      description: {
        en: "Displays multiple cards in a grid layout.",
        ja: "グリッドレイアウトで複数のカードを表示します。",
      },
    },
    {
      name: "SimpleExample",
      title: { en: "Simple card", ja: "シンプルなカード" },
      description: {
        en: "A simple card without a header.",
        ja: "ヘッダーなしのシンプルなカードです。",
      },
    },
  ],
  checkbox: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "An example of a single checkbox.",
        ja: "単一のチェックボックスの使用例です。",
      },
    },
    {
      name: "SelectedExample",
      title: { en: "Selected", ja: "選択済み" },
      description: {
        en: "A checkbox that is selected initially.",
        ja: "初期状態で選択されているチェックボックスです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "An example of a disabled checkbox.",
        ja: "無効化されたチェックボックスの例です。",
      },
    },
    {
      name: "CheckboxGroupExample",
      title: { en: "Checkbox group", ja: "チェックボックスグループ" },
      description: {
        en: "An example of grouping multiple checkboxes.",
        ja: "複数のチェックボックスをグループ化した例です。",
      },
    },
  ],
  dialog: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple dialog example.",
        ja: "シンプルなダイアログの使用例です。",
      },
    },
    {
      name: "ConfirmationExample",
      title: { en: "Confirmation dialog", ja: "確認ダイアログ" },
      description: {
        en: "A dialog that asks the user for confirmation.",
        ja: "ユーザーの確認を求めるダイアログです。",
      },
    },
    {
      name: "FormExample",
      title: { en: "With a form", ja: "フォーム付き" },
      description: {
        en: "An example of a form inside a dialog.",
        ja: "ダイアログ内にフォームを配置した例です。",
      },
    },
    {
      name: "AlertExample",
      title: { en: "Alert", ja: "アラート" },
      description: {
        en: "A simple alert dialog.",
        ja: "シンプルなアラートダイアログです。",
      },
    },
  ],
  drawer: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A drawer that slides in from the right edge of the screen.",
        ja: "画面の右端からスライドインするドロワーです。",
      },
    },
    {
      name: "PlacementsExample",
      title: { en: "Placement", ja: "表示位置" },
      description: {
        en: "Use the placement prop to choose from four directions: left, right, top, and bottom.",
        ja: "placementプロップでleft、right、top、bottomの4方向を指定できます。",
      },
    },
    {
      name: "NotDismissableExample",
      title: {
        en: "Not dismissed by outside click",
        ja: "外側クリックで閉じない",
      },
      description: {
        en: "Pass false to dismissable to keep the drawer open without dimming the background, so the page stays interactive. It does not close when clicking outside; close it with the close button or the Esc key. While it is open, the page keeps its width and gains padding equal to the drawer's width, so you can scroll to reveal content hidden beneath the drawer.",
        ja: "dismissable に false を渡すと、背景を暗くせずにドロワーを開いたままページを操作できます。外側をクリックしても閉じず、閉じるボタンか Esc キーで閉じます。開いている間はページの幅を保ったままドロワーの幅だけ余白が付くので、スクロールすればドロワーの下に隠れた部分も表示できます。",
      },
    },
  ],
  "form-control": [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "An example of a form control with a label.",
        ja: "ラベル付きフォームコントロールの例です。",
      },
    },
    {
      name: "WithIdExample",
      title: { en: "Custom ID", ja: "ID指定" },
      description: {
        en: "An example with an explicitly specified ID.",
        ja: "明示的にIDを指定した例です。",
      },
    },
    {
      name: "MultipleFieldsExample",
      title: { en: "Multiple fields", ja: "複数のフィールド" },
      description: {
        en: "An example with multiple form controls.",
        ja: "複数のフォームコントロールを配置した例です。",
      },
    },
    {
      name: "FormExample",
      title: { en: "Form", ja: "フォーム" },
      description: {
        en: "A complete form example.",
        ja: "完全なフォームの例です。",
      },
    },
  ],
  heading: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple heading example.",
        ja: "シンプルな見出しの使用例です。",
      },
    },
    {
      name: "AllLevelsExample",
      title: { en: "All levels", ja: "全レベル" },
      description: {
        en: "Shows headings at every level from h1 to h6.",
        ja: "h1からh6までの全レベルの見出しを表示します。",
      },
    },
    {
      name: "PageStructureExample",
      title: { en: "Page structure", ja: "ページ構造" },
      description: {
        en: "An example of a page structure with a proper heading hierarchy.",
        ja: "適切な見出し階層を持つページ構造の例です。",
      },
    },
    {
      name: "CustomStyleExample",
      title: { en: "Custom style", ja: "カスタムスタイル" },
      description: {
        en: "A heading with custom styles applied.",
        ja: "カスタムスタイルを適用した見出しです。",
      },
    },
  ],
  image: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple image example.",
        ja: "シンプルな画像の使用例です。",
      },
    },
    {
      name: "AvatarExample",
      title: { en: "Avatar", ja: "アバター" },
      description: {
        en: "An example of an avatar image.",
        ja: "アバター画像の例です。",
      },
    },
    {
      name: "SizesExample",
      title: { en: "Sizes", ja: "サイズ" },
      description: {
        en: "Displays images in various sizes.",
        ja: "様々なサイズの画像を表示します。",
      },
    },
    {
      name: "RoundedExample",
      title: { en: "Rounded corners", ja: "角丸" },
      description: {
        en: "Displays an image with rounded corners.",
        ja: "角丸の画像を表示します。",
      },
    },
  ],
  input: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple text input field.",
        ja: "シンプルなテキスト入力フィールドです。",
      },
    },
    {
      name: "TypesExample",
      title: { en: "Input types", ja: "様々なタイプ" },
      description: {
        en: "Input fields of various types, such as email, password, and number.",
        ja: "email、password、numberなど様々なタイプの入力フィールドです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "A disabled input field.",
        ja: "無効化された入力フィールドです。",
      },
    },
    {
      name: "WithValueExample",
      title: { en: "With initial value", ja: "初期値あり" },
      description: {
        en: "An input field with an initial value.",
        ja: "初期値を持つ入力フィールドです。",
      },
    },
  ],
  list: [
    {
      name: "UnorderedExample",
      title: { en: "Unordered list", ja: "順序なしリスト" },
      description: {
        en: "An example of an unordered list (ul).",
        ja: "順序なしリスト(ul)の使用例です。",
      },
    },
    {
      name: "OrderedExample",
      title: { en: "Ordered list", ja: "順序付きリスト" },
      description: {
        en: "An example of an ordered list (ol).",
        ja: "順序付きリスト(ol)の使用例です。",
      },
    },
    {
      name: "NestedExample",
      title: { en: "Nested list", ja: "ネストされたリスト" },
      description: {
        en: "Nest lists to create a hierarchy.",
        ja: "リストをネストして階層構造を作成します。",
      },
    },
    {
      name: "MixedExample",
      title: { en: "Mixed list", ja: "混合リスト" },
      description: {
        en: "A list that combines ordered and unordered lists.",
        ja: "順序付きと順序なしを組み合わせたリストです。",
      },
    },
  ],
  paragraph: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple paragraph example.",
        ja: "シンプルな段落の使用例です。",
      },
    },
    {
      name: "MultipleExample",
      title: { en: "Multiple paragraphs", ja: "複数の段落" },
      description: {
        en: "Displays multiple paragraphs.",
        ja: "複数の段落を表示します。",
      },
    },
    {
      name: "LongTextExample",
      title: { en: "Long text", ja: "長文" },
      description: {
        en: "An example of a paragraph containing long text.",
        ja: "長い文章を含む段落の例です。",
      },
    },
    {
      name: "CustomStyleExample",
      title: { en: "Custom style", ja: "カスタムスタイル" },
      description: {
        en: "A paragraph with custom styles applied.",
        ja: "カスタムスタイルを適用した段落です。",
      },
    },
  ],
  popover: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple popover shown below its trigger. Supports focus management and keyboard interaction.",
        ja: "トリガーの下に表示されるシンプルなポップオーバーです。フォーカス管理とキーボード操作に対応しています。",
      },
    },
    {
      name: "PlacementsExample",
      title: { en: "Placement", ja: "表示位置" },
      description: {
        en: "Use the placement prop to set the position, such as top, bottom, left, or right.",
        ja: "placementプロップでtop、bottom、left、rightなどの表示位置を指定できます。",
      },
    },
    {
      name: "WithoutArrowExample",
      title: { en: "Without arrow", ja: "矢印なし" },
      description: {
        en: "Pass false to the showArrow prop to hide the arrow.",
        ja: "showArrowプロップにfalseを渡すと矢印を非表示にできます。",
      },
    },
  ],
  radio: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple radio group example.",
        ja: "シンプルなラジオグループの使用例です。",
      },
    },
    {
      name: "DefaultValueExample",
      title: { en: "Default value", ja: "デフォルト値" },
      description: {
        en: "A radio group with an initially selected value.",
        ja: "初期選択値を持つラジオグループです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "A radio group with some options disabled.",
        ja: "一部のオプションが無効化されたラジオグループです。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled radio group", ja: "制御されたラジオグループ" },
      description: {
        en: "A radio group whose state is controlled externally.",
        ja: "状態を外部から制御するラジオグループです。",
      },
    },
  ],
  questionnaire: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "Pass the list of questions to items and render a QuestionnaireItem for each. Next and Submit stay disabled until required questions are answered. Read the answers from FormData in onSubmit.",
        ja: "質問の配列を items に渡し、各質問を QuestionnaireItem で描画します。required の質問に回答するまで次へ・送信ボタンは押せません。回答は onSubmit で FormData から取り出します。",
      },
    },
    {
      name: "MultipleExample",
      title: { en: "Multiple choice", ja: "複数選択" },
      description: {
        en: "Specify multiple on an item to accept several answers. Use getAll to read them.",
        ja: "QuestionnaireItem に multiple を指定すると複数の回答を選べます。値は getAll で取り出します。",
      },
    },
    {
      name: "SkipExample",
      title: { en: "Skipping", ja: "スキップ" },
      description: {
        en: "QuestionnaireSkip appears on items without required, letting users leave them unanswered.",
        ja: "required を指定しない質問では QuestionnaireSkip が表示され、未回答のまま先へ進めます。",
      },
    },
    {
      name: "ShortcutsExample",
      title: { en: "Keyboard shortcuts", ja: "キーボードショートカット" },
      description: {
        en: "Specify shortcuts to select choices with letter or number keys.",
        ja: "shortcuts を指定すると、英字または数字のキーで選択肢を選べます。",
      },
    },
  ],
  "segmented-control": [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "Place SegmentedControlItem elements inside and give each an id. Specify the initial selection with defaultValue.",
        ja: "SegmentedControlItem を並べ、それぞれに id を指定します。初期値は defaultValue で指定します。",
      },
    },
    {
      name: "IconExample",
      title: { en: "Icons only", ja: "アイコンのみ" },
      description: {
        en: "When an item shows only an icon, give it an aria-label.",
        ja: "アイコンだけを表示する場合は、各項目に aria-label を指定してください。",
      },
    },
    {
      name: "SizeExample",
      title: { en: "Size", ja: "サイズ" },
      description: {
        en: "Two sizes are available: sm and md.",
        ja: "sm と md の2種類のサイズを指定できます。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled", ja: "制御された選択" },
      description: {
        en: "Use value and onChange to manage the selection in state.",
        ja: "value と onChange で選択状態を外部から制御します。",
      },
    },
  ],
  select: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple select box example.",
        ja: "シンプルなセレクトボックスの使用例です。",
      },
    },
    {
      name: "DisabledOptionsExample",
      title: { en: "Disabled options", ja: "無効化されたオプション" },
      description: {
        en: "A select box with some options disabled.",
        ja: "一部のオプションが無効化されたセレクトボックスです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "An example of disabling the entire select box.",
        ja: "セレクトボックス全体を無効化した例です。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled select", ja: "制御されたセレクト" },
      description: {
        en: "A select box whose state is controlled externally.",
        ja: "状態を外部から制御するセレクトボックスです。",
      },
    },
  ],
  slider: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple slider example.",
        ja: "シンプルなスライダーの使用例です。",
      },
    },
    {
      name: "CustomRangeExample",
      title: { en: "Custom range", ja: "カスタム範囲" },
      description: {
        en: "A slider with custom minimum and maximum values.",
        ja: "カスタムの最小値・最大値を持つスライダーです。",
      },
    },
    {
      name: "RangeExample",
      title: { en: "Range selection", ja: "範囲指定" },
      description: {
        en: "Pass an array to defaultValue and place two SliderThumb elements to create a range slider with start and end points.",
        ja: "defaultValue に配列を渡し SliderThumb を 2 つ置くと、開始点と終了点を指定できる範囲スライダーになります。",
      },
    },
    {
      name: "WithStepsExample",
      title: { en: "With steps", ja: "ステップ付き" },
      description: {
        en: "A slider with a specified step.",
        ja: "ステップを指定したスライダーです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "A disabled slider.",
        ja: "無効化されたスライダーです。",
      },
    },
  ],
  switch: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple switch example.",
        ja: "シンプルなスイッチの使用例です。",
      },
    },
    {
      name: "SelectedExample",
      title: { en: "Selected", ja: "選択済み" },
      description: {
        en: "A switch that is on initially.",
        ja: "初期状態でオンになっているスイッチです。",
      },
    },
    {
      name: "DisabledExample",
      title: { en: "Disabled", ja: "無効化" },
      description: {
        en: "An example of a disabled switch.",
        ja: "無効化されたスイッチの例です。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled switch", ja: "制御されたスイッチ" },
      description: {
        en: "A switch whose state is controlled externally.",
        ja: "状態を外部から制御するスイッチです。",
      },
    },
  ],
  tab: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple tab example.",
        ja: "シンプルなタブの使用例です。",
      },
    },
    {
      name: "VerticalExample",
      title: { en: "Vertical tabs", ja: "垂直タブ" },
      description: {
        en: "Tabs arranged vertically.",
        ja: "垂直方向に配置されたタブです。",
      },
    },
    {
      name: "DisabledTabExample",
      title: { en: "Disabled tabs", ja: "無効化されたタブ" },
      description: {
        en: "An example with some tabs disabled.",
        ja: "一部のタブが無効化された例です。",
      },
    },
    {
      name: "ControlledExample",
      title: { en: "Controlled tabs", ja: "制御されたタブ" },
      description: {
        en: "Tabs whose state is controlled externally.",
        ja: "状態を外部から制御するタブです。",
      },
    },
  ],
  toast: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "Place ToastRegion once at the root of your app and show notifications with toast.show. Call the toast functions from client event handlers.",
        ja: "ToastRegionをアプリのルートに1回だけ設置し、toast.showで通知を表示します。toast関数はクライアントのイベントハンドラから呼び出してください。",
      },
    },
    {
      name: "VariantsExample",
      title: { en: "Variants", ja: "バリアント" },
      description: {
        en: "Use toast.info, toast.success, toast.warning, and toast.danger to show notifications that match the situation.",
        ja: "toast.info、toast.success、toast.warning、toast.dangerで状態に応じた通知を表示できます。",
      },
    },
    {
      name: "TimeoutExample",
      title: { en: "Auto close", ja: "自動クローズ" },
      description: {
        en: "Specify the timeout option to close the toast automatically. The timer pauses while it is hovered or focused.",
        ja: "timeoutオプションを指定すると自動的に閉じます。ホバーやフォーカス中はタイマーが一時停止します。",
      },
    },
  ],
  trace: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "Each TraceLine combines an icon and a title.",
        ja: "TraceLine にアイコンとタイトルを組み合わせて1行を作ります。",
      },
    },
    {
      name: "StatusExample",
      title: { en: "Status", ja: "ステータス" },
      description: {
        en: "Specify running, error, or pending with status. Write the state in the title as well, since color alone does not convey it.",
        ja: "status で running・error・pending を指定できます。色だけでは伝わらないため、タイトルの文言でも状態を示してください。",
      },
    },
    {
      name: "CollapsibleExample",
      title: { en: "Expandable lines", ja: "展開できる行" },
      description: {
        en: "Wrap a line in TraceCollapsible to show details such as command output.",
        ja: "TraceCollapsible で包むと、コマンドの出力などの詳細を展開して表示できます。",
      },
    },
    {
      name: "LinkExample",
      title: { en: "Links", ja: "リンク" },
      description: {
        en: "Wrap a TraceLine in a link to make it navigate.",
        ja: "TraceLine をリンクで包むと、行から別のページへ移動できます。",
      },
    },
  ],
  table: [
    {
      name: "BasicExample",
      title: { en: "Basic usage", ja: "基本的な使い方" },
      description: {
        en: "A simple table example.",
        ja: "シンプルなテーブルの使用例です。",
      },
    },
    {
      name: "StripedExample",
      title: { en: "Striped", ja: "縞模様" },
      description: {
        en: "Specify striped to add a background color to even rows, making rows easier to follow.",
        ja: "striped を指定すると、偶数行に背景色が付いて行を目で追いやすくなります。",
      },
    },
    {
      name: "WithSelectionExample",
      title: { en: "Row selection", ja: "行選択" },
      description: {
        en: "A table with selectable rows.",
        ja: "行を選択できるテーブルです。",
      },
    },
    {
      name: "UserTableExample",
      title: { en: "User table", ja: "ユーザーテーブル" },
      description: {
        en: "A practical example of a user data table.",
        ja: "実用的なユーザーデータテーブルの例です。",
      },
    },
    {
      name: "EmptyStateExample",
      title: { en: "Empty state", ja: "空の状態" },
      description: {
        en: "An example of what is shown when there is no data.",
        ja: "データがない場合の表示例です。",
      },
    },
  ],
};
