import type { Locale } from "#/i18n/locales";

export type ComponentCategory =
  | "forms"
  | "display"
  | "typography"
  | "navigation"
  | "layout";

export type ComponentMetadata = {
  id: string;
  name: string;
  category: ComponentCategory;
  description: Record<Locale, string>;
};

export const CATEGORIES: Record<
  ComponentCategory,
  { label: Record<Locale, string>; order: number }
> = {
  forms: { label: { en: "Forms", ja: "フォーム" }, order: 1 },
  display: { label: { en: "Display", ja: "表示" }, order: 2 },
  typography: { label: { en: "Typography", ja: "タイポグラフィ" }, order: 3 },
  navigation: { label: { en: "Navigation", ja: "ナビゲーション" }, order: 4 },
  layout: { label: { en: "Layout", ja: "レイアウト" }, order: 5 },
};

export const COMPONENTS: ComponentMetadata[] = [
  // Forms
  {
    id: "button",
    name: "Button",
    category: "forms",
    description: {
      en: "A button that triggers user actions. Supports five variants (filled, light, outline, ghost, reverse), three sizes (sm, md, lg), and icons before or after the label.",
      ja: "ユーザーアクションをトリガーするボタンコンポーネント。5種類のバリアント(filled、light、outline、ghost、reverse)と3種類のサイズ(sm、md、lg)、ラベル前後のアイコン指定をサポート。",
    },
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "forms",
    description: {
      en: "A checkbox that represents a selected state. Supports both single checkboxes and checkbox groups.",
      ja: "選択状態を表すチェックボックス。単一チェックボックスとチェックボックスグループに対応。",
    },
  },
  {
    id: "input",
    name: "Input",
    category: "forms",
    description: {
      en: "A text input field. Supports various types (text, email, password, etc.).",
      ja: "テキスト入力フィールド。様々なタイプ(text、email、password等)に対応。",
    },
  },
  {
    id: "radio",
    name: "Radio",
    category: "forms",
    description: {
      en: "A radio button for choosing one option from several. Used within a radio group.",
      ja: "複数の選択肢から1つを選ぶラジオボタン。ラジオグループで使用。",
    },
  },
  {
    id: "questionnaire",
    name: "Questionnaire",
    category: "forms",
    description: {
      en: "A multi-step form that asks one question at a time. Supports single choice, multiple choice, free text, skipping, and keyboard shortcuts.",
      ja: "質問を1つずつ表示して回答を集める複数ステップのフォーム。単一選択・複数選択・自由入力・スキップ・キーボードショートカットに対応。",
    },
  },
  {
    id: "segmented-control",
    name: "SegmentedControl",
    category: "forms",
    description: {
      en: "A row of buttons for choosing one option from a few. Suited to switching views or settings with two to five choices.",
      ja: "少数の選択肢から1つを選ぶボタンの並び。2〜5個程度の表示切り替えや設定の選択に向く。",
    },
  },
  {
    id: "select",
    name: "Select",
    category: "forms",
    description: {
      en: "A select box for choosing an item from a dropdown list.",
      ja: "ドロップダウンリストから項目を選択するセレクトボックス。",
    },
  },
  {
    id: "slider",
    name: "Slider",
    category: "forms",
    description: {
      en: "A slider for selecting a number within a range. Also supports range selection with start and end points.",
      ja: "数値を範囲内で選択するスライダーコンポーネント。開始点と終了点を指定する範囲選択にも対応。",
    },
  },
  {
    id: "switch",
    name: "Switch",
    category: "forms",
    description: {
      en: "A toggle switch for turning something on or off.",
      ja: "オン/オフを切り替えるトグルスイッチ。",
    },
  },
  {
    id: "form-control",
    name: "FormControl",
    category: "forms",
    description: {
      en: "A container that wraps a form element together with its label.",
      ja: "フォーム要素をラベルと共にラップするコンテナ。",
    },
  },

  // Display
  {
    id: "accordion",
    name: "Accordion",
    category: "display",
    description: {
      en: "Content sections that can be expanded and collapsed.",
      ja: "展開/折りたたみ可能なコンテンツセクション。",
    },
  },
  {
    id: "alert",
    name: "Alert",
    category: "display",
    description: {
      en: "An alert that conveys important information to the user. Supports four variants (info, success, warning, danger).",
      ja: "重要な情報をユーザーに伝えるアラート。4種類のバリアント(info、success、warning、danger)をサポート。",
    },
  },
  {
    id: "alert-dialog",
    name: "AlertDialog",
    category: "display",
    description: {
      en: 'A modal dialog with role="alertdialog". Screen readers announce it immediately, and it does not close when clicking outside. Use it only when you must interrupt the user for an urgent answer, such as confirming a destructive action or a session timeout. For forms and regular information, use Dialog.',
      ja: 'role="alertdialog" のモーダルダイアログ。スクリーンリーダーが即座に読み上げ、外側をクリックしても閉じない。破壊的な操作の確認やセッション切れなど、作業を中断させてでも応答を求める場面に限って使用。フォームや通常の情報表示には Dialog を使う。',
    },
  },
  {
    id: "badge",
    name: "Badge",
    category: "display",
    description: {
      en: "A small badge that displays a status or label.",
      ja: "ステータスやラベルを表示する小さなバッジ。",
    },
  },
  {
    id: "code-block",
    name: "CodeBlock",
    category: "display",
    description: {
      en: "A block that displays code with a copy button. Supports showing a filename and switching between multiple files with tabs.",
      ja: "コードを表示しコピーボタンを備えたブロック。ファイル名の表示と、複数ファイルのタブ切り替えに対応。",
    },
  },
  {
    id: "card",
    name: "Card",
    category: "display",
    description: {
      en: "A card container that groups related information.",
      ja: "関連する情報をグループ化するカードコンテナ。",
    },
  },
  {
    id: "dialog",
    name: "Dialog",
    category: "display",
    description: {
      en: 'A modal dialog with role="dialog". Use it for content the user works with at their own pace, such as forms, details, and notices. For confirmations that interrupt the user and require an immediate answer, use AlertDialog.',
      ja: 'role="dialog" のモーダルダイアログ。フォームや詳細表示、お知らせなど、ユーザーが自分のペースで扱う内容に使用。作業を中断させて即座の応答を求める確認には AlertDialog を使う。',
    },
  },
  {
    id: "drawer",
    name: "Drawer",
    category: "display",
    description: {
      en: "A drawer that slides in from the edge of the screen. Supports four placements (left, right, top, bottom) and a non-modal mode that stays open while the page remains interactive.",
      ja: "画面の端からスライドインするドロワー。4方向(left、right、top、bottom)に対応し、ページを操作したまま開いておける非モーダル表示もサポート。",
    },
  },
  {
    id: "image",
    name: "Image",
    category: "display",
    description: {
      en: "A component for displaying images.",
      ja: "画像を表示するコンポーネント。",
    },
  },
  {
    id: "list",
    name: "List",
    category: "display",
    description: {
      en: "Displays ordered and unordered lists.",
      ja: "順序付きリストと順序なしリストを表示。",
    },
  },
  {
    id: "popover",
    name: "Popover",
    category: "display",
    description: {
      en: "A popover anchored to a trigger element. Placement and arrow display are customizable.",
      ja: "トリガー要素に紐づけて表示されるポップオーバー。配置方向と矢印表示をカスタマイズ可能。",
    },
  },
  {
    id: "table",
    name: "Table",
    category: "display",
    description: {
      en: "Displays tabular data. Supports row selection and striped rows.",
      ja: "表形式のデータを表示。行選択と縞模様の表示をサポート。",
    },
  },
  {
    id: "tab",
    name: "Tab",
    category: "display",
    description: {
      en: "Content panels switched with tabs. Supports horizontal and vertical layouts.",
      ja: "タブで切り替え可能なコンテンツパネル。水平・垂直レイアウトに対応。",
    },
  },
  {
    id: "toast",
    name: "Toast",
    category: "display",
    description: {
      en: "A toast that shows temporary notifications. Can be triggered with a programmatic API (toast.success, etc.).",
      ja: "一時的な通知を表示するトースト。プログラマティックなAPI(toast.success等)で呼び出し可能。",
    },
  },

  // Typography
  {
    id: "trace",
    name: "Trace",
    category: "display",
    description: {
      en: "A list of lines showing the steps an AI agent took, such as reasoning, tool calls, and sources. Lines can show a status and expand to reveal details.",
      ja: "AI エージェントの思考・ツール呼び出し・参照元などの手順を1行ずつ並べるリスト。行ごとにステータスを示し、展開して詳細を表示できる。",
    },
  },
  {
    id: "heading",
    name: "Heading",
    category: "typography",
    description: {
      en: "A heading component. Supports levels h1 through h6.",
      ja: "見出しコンポーネント。h1からh6までのレベルをサポート。",
    },
  },
  {
    id: "paragraph",
    name: "Paragraph",
    category: "typography",
    description: {
      en: "A component for displaying paragraph text.",
      ja: "段落テキストを表示するコンポーネント。",
    },
  },

  // Navigation
  {
    id: "anchor",
    name: "Anchor",
    category: "navigation",
    description: {
      en: "An anchor component for creating links.",
      ja: "リンクを作成するアンカーコンポーネント。",
    },
  },

  // Layout
  {
    id: "box",
    name: "Box",
    category: "layout",
    description: {
      en: "A general-purpose container component. The basic building block for layouts.",
      ja: "汎用的なコンテナコンポーネント。レイアウト構築の基本要素。",
    },
  },
];

export function getComponentById(id: string): ComponentMetadata | undefined {
  return COMPONENTS.find((c) => c.id === id);
}

export function getComponentsByCategory(
  category: ComponentCategory
): ComponentMetadata[] {
  return COMPONENTS.filter((c) => c.category === category);
}

export const SORTED_CATEGORIES = (
  Object.entries(CATEGORIES) as [
    ComponentCategory,
    (typeof CATEGORIES)[ComponentCategory],
  ][]
).sort(([, a], [, b]) => a.order - b.order);
