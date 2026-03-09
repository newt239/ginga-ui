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
  description: string;
};

export const CATEGORIES: Record<
  ComponentCategory,
  { label: string; order: number }
> = {
  forms: { label: "フォーム", order: 1 },
  display: { label: "表示", order: 2 },
  typography: { label: "タイポグラフィ", order: 3 },
  navigation: { label: "ナビゲーション", order: 4 },
  layout: { label: "レイアウト", order: 5 },
};

export const COMPONENTS: ComponentMetadata[] = [
  // Forms
  {
    id: "button",
    name: "Button",
    category: "forms",
    description:
      "ユーザーアクションをトリガーするボタンコンポーネント。4種類のバリアント(filled、light、outline、reverse)をサポート。",
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "forms",
    description:
      "選択状態を表すチェックボックス。単一チェックボックスとチェックボックスグループに対応。",
  },
  {
    id: "input",
    name: "Input",
    category: "forms",
    description:
      "テキスト入力フィールド。様々なタイプ(text、email、password等)に対応。",
  },
  {
    id: "radio",
    name: "Radio",
    category: "forms",
    description:
      "複数の選択肢から1つを選ぶラジオボタン。ラジオグループで使用。",
  },
  {
    id: "select",
    name: "Select",
    category: "forms",
    description: "ドロップダウンリストから項目を選択するセレクトボックス。",
  },
  {
    id: "slider",
    name: "Slider",
    category: "forms",
    description: "数値を範囲内で選択するスライダーコンポーネント。",
  },
  {
    id: "switch",
    name: "Switch",
    category: "forms",
    description: "オン/オフを切り替えるトグルスイッチ。",
  },
  {
    id: "form-control",
    name: "FormControl",
    category: "forms",
    description: "フォーム要素をラベルと共にラップするコンテナ。",
  },

  // Display
  {
    id: "accordion",
    name: "Accordion",
    category: "display",
    description: "展開/折りたたみ可能なコンテンツセクション。",
  },
  {
    id: "card",
    name: "Card",
    category: "display",
    description: "関連する情報をグループ化するカードコンテナ。",
  },
  {
    id: "dialog",
    name: "Dialog",
    category: "display",
    description:
      "モーダルダイアログ。ユーザーの注意を引く重要な情報や操作を表示。",
  },
  {
    id: "image",
    name: "Image",
    category: "display",
    description: "画像を表示するコンポーネント。",
  },
  {
    id: "list",
    name: "List",
    category: "display",
    description: "順序付きリストと順序なしリストを表示。",
  },
  {
    id: "table",
    name: "Table",
    category: "display",
    description: "表形式のデータを表示。行選択機能をサポート。",
  },
  {
    id: "tab",
    name: "Tab",
    category: "display",
    description:
      "タブで切り替え可能なコンテンツパネル。水平・垂直レイアウトに対応。",
  },

  // Typography
  {
    id: "heading",
    name: "Heading",
    category: "typography",
    description: "見出しコンポーネント。h1からh6までのレベルをサポート。",
  },
  {
    id: "paragraph",
    name: "Paragraph",
    category: "typography",
    description: "段落テキストを表示するコンポーネント。",
  },

  // Navigation
  {
    id: "anchor",
    name: "Anchor",
    category: "navigation",
    description: "リンクを作成するアンカーコンポーネント。",
  },

  // Layout
  {
    id: "box",
    name: "Box",
    category: "layout",
    description: "汎用的なコンテナコンポーネント。レイアウト構築の基本要素。",
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
