import type { Locale } from "#/i18n/locales";

type Text = Record<Locale, string>;

type PropDoc = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: Text;
};

export type PropsInheritance =
  | { kind: "aria"; name: string; page: string }
  | { kind: "html"; elements: string[] }
  | { kind: "ginga"; name: string; id: string };

export type ComponentPropsDoc = {
  name: string;
  inherits?: PropsInheritance;
  note?: Text;
  props: PropDoc[];
};

const STATUS_VARIANT = `"info" | "success" | "warning" | "danger"`;
const BUTTON_VARIANT = `"filled" | "light" | "outline" | "ghost" | "reverse"`;
const SIZE = `"sm" | "md" | "lg"`;

const aria = (name: string, page = name): PropsInheritance => ({
  kind: "aria",
  name,
  page,
});

const html = (...elements: string[]): PropsInheritance => ({
  kind: "html",
  elements,
});

const render: PropDoc = {
  name: "render",
  type: "(props) => ReactElement",
  description: {
    en: "Replaces the root element. Return an element that receives the given props, such as next/link.",
    ja: "ルート要素を差し替える関数。受け取った props を渡した要素（next/link など）を返します。",
  },
};

const disabled = (en: string, ja: string): PropDoc => ({
  name: "disabled",
  type: "boolean",
  defaultValue: "false",
  description: { en, ja },
});

const required = (en: string, ja: string): PropDoc => ({
  name: "required",
  type: "boolean",
  defaultValue: "false",
  description: { en, ja },
});

const readOnly = (en: string, ja: string): PropDoc => ({
  name: "readOnly",
  type: "boolean",
  defaultValue: "false",
  description: { en, ja },
});

const invalid = (en: string, ja: string): PropDoc => ({
  name: "invalid",
  type: "boolean",
  defaultValue: "false",
  description: { en, ja },
});

const icon = (en: string, ja: string, name = "icon"): PropDoc => ({
  name,
  type: "ReactNode",
  description: { en, ja },
});

const htmlOnly = (
  name: string,
  element: string,
  props: PropDoc[] = []
): ComponentPropsDoc => ({
  name,
  inherits: html(element),
  props: [...props, render],
});

export const COMPONENT_PROPS: Record<string, ComponentPropsDoc[]> = {
  accordion: [
    {
      name: "Accordion",
      inherits: aria("DisclosureGroup"),
      props: [
        disabled(
          "Disables every item in the accordion.",
          "アコーディオン内のすべてのアイテムを無効にします。"
        ),
      ],
    },
    {
      name: "AccordionItem",
      inherits: aria("Disclosure"),
      props: [
        disabled("Disables the item.", "アイテムを無効にします。"),
        {
          name: "expanded",
          type: "boolean",
          description: {
            en: "Whether the item is expanded (controlled). Use it with onExpandedChange.",
            ja: "展開状態を外部から制御します。onExpandedChange と組み合わせて使います。",
          },
        },
      ],
    },
    {
      name: "AccordionTrigger",
      inherits: aria("Button"),
      props: [
        disabled("Disables the trigger.", "トリガーを無効にします。"),
        {
          name: "level",
          type: "2 | 3 | 4 | 5 | 6",
          defaultValue: "3",
          description: {
            en: "Level of the heading element that wraps the trigger.",
            ja: "トリガーを囲む見出し要素のレベル。",
          },
        },
        icon(
          "Icon shown at the end of the trigger. It rotates when expanded.",
          "トリガーの末尾に表示するアイコン。展開時に回転します。"
        ),
      ],
    },
    {
      name: "AccordionContent",
      inherits: aria("DisclosurePanel", "Disclosure"),
      props: [],
    },
  ],
  alert: [
    {
      name: "Alert",
      inherits: html("div"),
      props: [
        {
          name: "variant",
          type: STATUS_VARIANT,
          defaultValue: `"info"`,
          description: {
            en: "Color variant that represents the kind of message.",
            ja: "メッセージの種類を表す配色。",
          },
        },
        icon("Icon shown before the content.", "内容の前に表示するアイコン。"),
        render,
      ],
    },
    htmlOnly("AlertTitle", "div"),
    htmlOnly("AlertDescription", "p"),
  ],
  "alert-dialog": [
    {
      name: "AlertDialog",
      inherits: aria("Dialog", "Modal"),
      note: {
        en: 'role is fixed to "alertdialog". Place it inside DialogTrigger and Modal.',
        ja: 'role は "alertdialog" に固定されます。DialogTrigger と Modal の中に置きます。',
      },
      props: [
        {
          name: "variant",
          type: STATUS_VARIANT,
          description: {
            en: "Color variant. When omitted, the dialog uses the default colors.",
            ja: "配色。省略すると通常の配色で表示されます。",
          },
        },
      ],
    },
    {
      name: "AlertDialogTitle",
      inherits: aria("Heading", "Modal"),
      props: [
        icon(
          "Icon shown before the title.",
          "タイトルの前に表示するアイコン。"
        ),
      ],
    },
  ],
  anchor: [
    {
      name: "Anchor",
      inherits: aria("Link"),
      props: [
        {
          name: "variant",
          type: `"default" | "button"`,
          defaultValue: `"default"`,
          description: {
            en: 'Appearance of the link. "button" makes it look like a Button.',
            ja: 'リンクの見た目。"button" を指定すると Button と同じ見た目になります。',
          },
        },
        {
          name: "buttonVariant",
          type: BUTTON_VARIANT,
          defaultValue: `"filled"`,
          description: {
            en: 'Button variant used when variant is "button".',
            ja: 'variant が "button" のときのボタンのバリアント。',
          },
        },
        {
          name: "size",
          type: SIZE,
          defaultValue: `"md"`,
          description: {
            en: 'Button size used when variant is "button".',
            ja: 'variant が "button" のときのボタンのサイズ。',
          },
        },
        disabled("Disables the link.", "リンクを無効にします。"),
        icon(
          'Icon shown before the label when variant is "button".',
          'variant が "button" のときにラベルの前に表示するアイコン。',
          "startIcon"
        ),
        icon(
          'Icon shown after the label when variant is "button".',
          'variant が "button" のときにラベルの後に表示するアイコン。',
          "endIcon"
        ),
        {
          name: "render",
          type: "(props, renderProps) => ReactElement",
          description: {
            en: "Replaces the root element, such as with next/link. It is used only when href is set.",
            ja: "ルート要素を next/link などに差し替える関数。href があるときだけ使われます。",
          },
        },
      ],
    },
  ],
  badge: [
    {
      name: "Badge",
      inherits: html("span"),
      props: [
        {
          name: "variant",
          type: `"primary" | "secondary" | ${STATUS_VARIANT}`,
          defaultValue: `"primary"`,
          description: {
            en: "Color variant of the badge.",
            ja: "バッジの配色。",
          },
        },
        render,
      ],
    },
  ],
  box: [htmlOnly("Box", "div")],
  button: [
    {
      name: "Button",
      inherits: aria("Button"),
      props: [
        {
          name: "variant",
          type: BUTTON_VARIANT,
          defaultValue: `"filled"`,
          description: {
            en: "Visual style of the button.",
            ja: "ボタンの見た目。",
          },
        },
        {
          name: "size",
          type: SIZE,
          defaultValue: `"md"`,
          description: { en: "Size of the button.", ja: "ボタンのサイズ。" },
        },
        disabled("Disables the button.", "ボタンを無効にします。"),
        icon(
          "Icon shown before the label.",
          "ラベルの前に表示するアイコン。",
          "startIcon"
        ),
        icon(
          "Icon shown after the label.",
          "ラベルの後に表示するアイコン。",
          "endIcon"
        ),
      ],
    },
    {
      name: "ButtonGroup",
      inherits: aria("Group"),
      props: [],
    },
  ],
  card: [
    htmlOnly("Card", "div"),
    htmlOnly("CardHeader", "div"),
    htmlOnly("CardTitle", "div"),
    htmlOnly("CardContent", "div"),
    htmlOnly("CardFooter", "div"),
  ],
  checkbox: [
    {
      name: "Checkbox",
      inherits: aria("Checkbox"),
      props: [
        {
          name: "label",
          type: "ReactNode",
          description: {
            en: "Label of the checkbox. children takes precedence when given.",
            ja: "チェックボックスのラベル。children を渡した場合はそちらが優先されます。",
          },
        },
        {
          name: "selected",
          type: "boolean",
          description: {
            en: "Whether the checkbox is checked (controlled). Use it with onChange.",
            ja: "チェック状態を外部から制御します。onChange と組み合わせて使います。",
          },
        },
        {
          name: "indeterminate",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Shows the indeterminate state, used when only some of the children are checked.",
            ja: "一部の子だけが選択されているときなどの中間状態で表示します。",
          },
        },
        disabled("Disables the checkbox.", "チェックボックスを無効にします。"),
        required(
          "Requires the checkbox to be checked.",
          "チェックを必須にします。"
        ),
        readOnly(
          "Prevents the user from changing the value.",
          "値を変更できないようにします。"
        ),
        invalid(
          "Shows the checkbox as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
        icon("Icon shown when checked.", "チェック時に表示するアイコン。"),
        icon(
          "Icon shown in the indeterminate state.",
          "中間状態で表示するアイコン。",
          "indeterminateIcon"
        ),
      ],
    },
    {
      name: "CheckboxGroup",
      inherits: aria("CheckboxGroup"),
      props: [
        disabled(
          "Disables every checkbox in the group.",
          "グループ内のすべてのチェックボックスを無効にします。"
        ),
        required(
          "Requires at least one checkbox to be checked.",
          "1つ以上の選択を必須にします。"
        ),
        readOnly(
          "Prevents the user from changing the selection.",
          "選択を変更できないようにします。"
        ),
        invalid(
          "Shows the group as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
      ],
    },
  ],
  "combo-box": [
    {
      name: "ComboBox",
      inherits: aria("ComboBox"),
      props: [
        {
          name: "label",
          type: "string",
          description: {
            en: "Label shown above the combo box.",
            ja: "コンボボックスの上に表示するラベル。",
          },
        },
        {
          name: "placeholder",
          type: "string",
          description: {
            en: "Placeholder text of the input.",
            ja: "入力欄のプレースホルダー。",
          },
        },
        {
          name: "description",
          type: "ReactNode",
          description: {
            en: "Help text shown below the combo box.",
            ja: "コンボボックスの下に表示する補足説明。",
          },
        },
        {
          name: "errorMessage",
          type: "ReactNode | ((validation: ValidationResult) => ReactNode)",
          description: {
            en: "Error message shown when the value is invalid.",
            ja: "値が不正なときに表示するエラーメッセージ。",
          },
        },
        disabled("Disables the combo box.", "コンボボックスを無効にします。"),
        required("Requires a value.", "入力を必須にします。"),
        readOnly(
          "Makes the combo box read-only.",
          "コンボボックスを読み取り専用にします。"
        ),
        invalid(
          "Shows the combo box as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "ComboBoxItem elements.",
            ja: "ComboBoxItem を並べます。",
          },
        },
        icon(
          "Icon shown in the button that opens the list. A chevron is drawn when omitted.",
          "候補を開くボタンのアイコン。省略すると山形の記号を表示します。"
        ),
        icon(
          "Icon shown next to the selected item.",
          "選択中の項目の横に表示するアイコン。",
          "checkIcon"
        ),
      ],
    },
    {
      name: "ComboBoxItem",
      inherits: aria("ListBoxItem", "ListBox"),
      props: [
        disabled("Disables the item.", "項目を無効にします。"),
        {
          name: "textValue",
          type: "string",
          defaultValue: `children (string only)`,
          description: {
            en: "Text used for filtering and screen readers. Required when children is not a string.",
            ja: "絞り込みやスクリーンリーダーに使うテキスト。children が文字列でない場合は指定します。",
          },
        },
      ],
    },
  ],
  "code-block": [
    {
      name: "CodeBlock",
      inherits: html("div"),
      props: [
        {
          name: "code",
          type: "string",
          defaultValue: `""`,
          description: {
            en: "Code to display and copy.",
            ja: "表示してコピーするコード。",
          },
        },
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "Content shown instead of code, such as syntax-highlighted elements. Its text is copied when code is empty.",
            ja: "code の代わりに表示する内容（シンタックスハイライト済みの要素など）。code が空のときはこのテキストをコピーします。",
          },
        },
        {
          name: "filename",
          type: "string",
          description: {
            en: "File name shown in the header. The header is hidden when omitted.",
            ja: "ヘッダーに表示するファイル名。省略するとヘッダーを表示しません。",
          },
        },
        icon(
          "Icon shown before the file name.",
          "ファイル名の前に表示するアイコン。",
          "filenameIcon"
        ),
        {
          name: "files",
          type: "{ filename: string; code: string; icon?: ReactNode; content?: ReactNode }[]",
          description: {
            en: "Multiple files switched with tabs. When given, code, filename, and children are ignored.",
            ja: "タブで切り替える複数のファイル。指定すると code・filename・children は使われません。",
          },
        },
        {
          name: "filesLabel",
          type: "string",
          defaultValue: `"Files"`,
          description: {
            en: "Accessible name of the file tab list.",
            ja: "ファイルのタブリストのアクセシブルな名前。",
          },
        },
        {
          name: "copyLabel",
          type: "string",
          defaultValue: `"Copy"`,
          description: {
            en: "Label of the copy button.",
            ja: "コピーボタンのラベル。",
          },
        },
        {
          name: "copiedLabel",
          type: "string",
          defaultValue: `"Copied!"`,
          description: {
            en: "Label shown for two seconds after copying.",
            ja: "コピー後 2 秒間表示するラベル。",
          },
        },
        icon(
          "Icon of the copy button.",
          "コピーボタンのアイコン。",
          "copyIcon"
        ),
        icon(
          "Icon shown after copying.",
          "コピー後に表示するアイコン。",
          "copiedIcon"
        ),
        render,
      ],
    },
  ],
  dialog: [
    {
      name: "DialogTrigger",
      inherits: aria("DialogTrigger", "Modal"),
      props: [],
    },
    {
      name: "Modal",
      inherits: aria("ModalOverlay", "Modal"),
      props: [
        {
          name: "dismissable",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Closes the modal when the user clicks outside it.",
            ja: "外側をクリックしたときにモーダルを閉じます。",
          },
        },
        {
          name: "overlayClassName",
          type: "string",
          description: {
            en: "Class name added to the overlay behind the modal.",
            ja: "モーダルの背景（オーバーレイ）に付けるクラス名。",
          },
        },
        {
          name: "className",
          type: "string | ((renderProps) => string)",
          description: {
            en: "Class name added to the modal element, not the overlay.",
            ja: "オーバーレイではなくモーダル本体に付けるクラス名。",
          },
        },
        {
          name: "render",
          type: "(props, renderProps) => ReactElement",
          description: {
            en: "Replaces the modal element. Like className, it applies to the modal, not the overlay.",
            ja: "モーダル本体の要素を差し替える関数。className と同じくオーバーレイではなくモーダル本体に適用されます。",
          },
        },
      ],
    },
    {
      name: "Dialog",
      inherits: aria("Dialog", "Modal"),
      props: [],
    },
    {
      name: "DialogTitle",
      inherits: aria("Heading", "Modal"),
      props: [],
    },
  ],
  drawer: [
    {
      name: "Drawer",
      inherits: aria("ModalOverlay", "Modal"),
      props: [
        {
          name: "placement",
          type: `"left" | "right" | "top" | "bottom"`,
          defaultValue: `"right"`,
          description: {
            en: "Edge of the screen the drawer slides in from.",
            ja: "ドロワーがスライドインする画面の端。",
          },
        },
        {
          name: "dismissable",
          type: "boolean",
          defaultValue: "true",
          description: {
            en: "Closes the drawer when the user clicks outside it or presses Esc.",
            ja: "外側のクリックや Esc キーでドロワーを閉じます。",
          },
        },
        {
          name: "isKeyboardDismissDisabled",
          type: "boolean",
          defaultValue: "!dismissable",
          description: {
            en: "Prevents closing the drawer with Esc.",
            ja: "Esc キーでドロワーを閉じないようにします。",
          },
        },
      ],
    },
    {
      name: "DrawerContent",
      inherits: aria("Dialog", "Modal"),
      props: [],
    },
    {
      name: "DrawerTitle",
      inherits: aria("Heading", "Modal"),
      props: [],
    },
  ],
  "form-control": [
    {
      name: "FormControl",
      inherits: html("div"),
      props: [
        {
          name: "label",
          type: "ReactNode",
          required: true,
          description: {
            en: "Label associated with the field.",
            ja: "フィールドに関連付けるラベル。",
          },
        },
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: {
            en: "Form field such as Input or Select.",
            ja: "Input や Select などのフォームフィールド。",
          },
        },
        {
          name: "htmlFor",
          type: "string",
          description: {
            en: "id of the field. When omitted, an id is generated and passed to Input automatically.",
            ja: "フィールドの id。省略すると id を生成して Input に自動で渡します。",
          },
        },
        render,
      ],
    },
  ],
  heading: [
    {
      name: "Heading",
      inherits: html("h1-h6"),
      props: [
        {
          name: "level",
          type: "1 | 2 | 3 | 4 | 5 | 6",
          required: true,
          description: {
            en: "Heading level. Renders the h1 to h6 element.",
            ja: "見出しのレベル。h1〜h6 要素で描画されます。",
          },
        },
        render,
      ],
    },
  ],
  image: [
    {
      name: "Image",
      inherits: html("img"),
      props: [
        {
          name: "alt",
          type: "string",
          required: true,
          description: {
            en: 'Alternative text. Pass "" for decorative images.',
            ja: '代替テキスト。装飾目的の画像には "" を渡します。',
          },
        },
        {
          name: "variant",
          type: `"default" | "avatar"`,
          defaultValue: `"default"`,
          description: {
            en: '"avatar" crops the image into a circle.',
            ja: '"avatar" を指定すると円形に切り抜いて表示します。',
          },
        },
        render,
      ],
    },
  ],
  input: [
    {
      name: "Input",
      inherits: aria("Input", "TextField"),
      props: [],
    },
  ],
  list: [
    {
      name: "List",
      inherits: html("ul", "ol"),
      props: [
        {
          name: "type",
          type: `"ordered" | "unordered"`,
          defaultValue: `"unordered"`,
          description: {
            en: '"ordered" renders an ol element and "unordered" renders a ul element.',
            ja: '"ordered" は ol 要素、"unordered" は ul 要素で描画されます。',
          },
        },
        render,
      ],
    },
    htmlOnly("ListItem", "li"),
  ],
  menu: [
    {
      name: "MenuTrigger",
      inherits: aria("MenuTrigger", "Menu"),
      props: [],
    },
    {
      name: "Menu",
      inherits: aria("Menu"),
      props: [
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "MenuItem, MenuSection, MenuSeparator, and SubmenuTrigger elements.",
            ja: "MenuItem・MenuSection・MenuSeparator・SubmenuTrigger を並べます。",
          },
        },
        {
          name: "placement",
          type: "Placement",
          defaultValue: `"bottom start"`,
          description: {
            en: "Position of the menu relative to the trigger.",
            ja: "トリガーに対するメニューの表示位置。",
          },
        },
        {
          name: "offset",
          type: "number",
          description: {
            en: "Distance from the trigger in pixels.",
            ja: "トリガーからの距離（px）。",
          },
        },
        icon(
          "Icon shown next to selected items. A check mark is drawn when omitted. Inherited by submenus.",
          "選択中の項目の横に表示するアイコン。省略するとチェックの記号を表示します。サブメニューにも引き継がれます。",
          "checkIcon"
        ),
        icon(
          "Icon shown at the end of items that open a submenu. A chevron is drawn when omitted. Inherited by submenus.",
          "サブメニューを開く項目の末尾に表示するアイコン。省略すると山形の記号を表示します。サブメニューにも引き継がれます。",
          "submenuIcon"
        ),
      ],
    },
    {
      name: "MenuItem",
      inherits: aria("MenuItem", "Menu"),
      props: [
        disabled("Disables the item.", "項目を無効にします。"),
        icon(
          "Icon shown before the label.",
          "ラベルの前に表示するアイコン。",
          "startIcon"
        ),
        {
          name: "shortcut",
          type: "string",
          description: {
            en: "Keyboard shortcut shown at the end of the item. It is only displayed, not registered.",
            ja: "項目の末尾に表示するキーボードショートカット。表示のみで、キー操作は登録されません。",
          },
        },
        {
          name: "textValue",
          type: "string",
          defaultValue: `children (string only)`,
          description: {
            en: "Text used for type-to-select and screen readers. Required when children is not a string.",
            ja: "文字入力による選択やスクリーンリーダーに使うテキスト。children が文字列でない場合は指定します。",
          },
        },
      ],
    },
    {
      name: "MenuSection",
      inherits: aria("MenuSection", "Menu"),
      props: [
        {
          name: "title",
          type: "ReactNode",
          description: {
            en: "Heading shown at the top of the section.",
            ja: "セクションの先頭に表示する見出し。",
          },
        },
      ],
    },
    {
      name: "MenuSeparator",
      inherits: aria("Separator", "Menu"),
      props: [],
    },
    {
      name: "SubmenuTrigger",
      inherits: aria("SubmenuTrigger", "Menu"),
      props: [],
    },
  ],
  "number-field": [
    {
      name: "NumberField",
      inherits: aria("NumberField"),
      props: [
        {
          name: "label",
          type: "string",
          description: {
            en: "Label shown above the field.",
            ja: "入力欄の上に表示するラベル。",
          },
        },
        {
          name: "placeholder",
          type: "string",
          description: {
            en: "Placeholder text of the input.",
            ja: "入力欄のプレースホルダー。",
          },
        },
        {
          name: "description",
          type: "ReactNode",
          description: {
            en: "Help text shown below the field.",
            ja: "入力欄の下に表示する補足説明。",
          },
        },
        {
          name: "errorMessage",
          type: "ReactNode | ((validation: ValidationResult) => ReactNode)",
          description: {
            en: "Error message shown when the value is invalid.",
            ja: "値が不正なときに表示するエラーメッセージ。",
          },
        },
        disabled("Disables the field.", "入力欄を無効にします。"),
        required("Requires a value.", "入力を必須にします。"),
        readOnly(
          "Makes the field read-only.",
          "入力欄を読み取り専用にします。"
        ),
        invalid(
          "Shows the field as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
        icon(
          "Icon of the decrement button. A minus sign is drawn when omitted.",
          "減らすボタンのアイコン。省略するとマイナス記号を表示します。",
          "decrementIcon"
        ),
        icon(
          "Icon of the increment button. A plus sign is drawn when omitted.",
          "増やすボタンのアイコン。省略するとプラス記号を表示します。",
          "incrementIcon"
        ),
      ],
    },
  ],
  paragraph: [htmlOnly("Paragraph", "p")],
  popover: [
    {
      name: "PopoverTrigger",
      inherits: aria("DialogTrigger", "Popover"),
      props: [],
    },
    {
      name: "Popover",
      inherits: aria("Popover"),
      props: [
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "Content of the popover. It is wrapped in a dialog.",
            ja: "ポップオーバーの内容。ダイアログで囲んで表示されます。",
          },
        },
        {
          name: "showArrow",
          type: "boolean",
          defaultValue: "true",
          description: {
            en: "Shows an arrow pointing at the trigger. The offset grows by half the arrow size.",
            ja: "トリガーを指す矢印を表示します。表示すると offset に矢印の半分の大きさが加わります。",
          },
        },
        {
          name: "placement",
          type: "Placement",
          defaultValue: `"bottom"`,
          description: {
            en: "Position of the popover relative to the trigger.",
            ja: "トリガーに対するポップオーバーの表示位置。",
          },
        },
        {
          name: "offset",
          type: "number",
          defaultValue: "8",
          description: {
            en: "Distance from the trigger in pixels.",
            ja: "トリガーからの距離（px）。",
          },
        },
      ],
    },
  ],
  questionnaire: [
    {
      name: "Questionnaire",
      inherits: html("form"),
      props: [
        {
          name: "items",
          type: "readonly { name: string; required?: boolean }[]",
          required: true,
          description: {
            en: "Questions in display order. name must match QuestionnaireItem.",
            ja: "表示順に並べた質問。name は QuestionnaireItem と一致させます。",
          },
        },
        {
          name: "shortcuts",
          type: `"letters" | "numbers"`,
          description: {
            en: "Lets the user pick choices with A, B, C… or 1, 2, 3…. Disabled when omitted.",
            ja: "A, B, C… または 1, 2, 3… のキーで選択肢を選べるようにします。省略すると無効です。",
          },
        },
        {
          name: "onSubmit",
          type: "(event: SubmitEvent) => void",
          description: {
            en: "Called on submit. It is not called while a required question is unanswered.",
            ja: "送信時に呼ばれます。必須の質問が未回答の間は呼ばれません。",
          },
        },
        render,
      ],
    },
    {
      name: "QuestionnaireProgress",
      inherits: html("output"),
      props: [
        {
          name: "children",
          type: "(progress: { current: number; total: number }) => ReactNode",
          required: true,
          description: {
            en: "Function that returns the progress text.",
            ja: "進捗の表示内容を返す関数。",
          },
        },
        render,
      ],
    },
    {
      name: "QuestionnaireItem",
      inherits: html("fieldset"),
      props: [
        {
          name: "name",
          type: "string",
          required: true,
          description: {
            en: "Name of the question. It becomes the field name in the submitted form data.",
            ja: "質問の名前。送信されるフォームデータのフィールド名になります。",
          },
        },
        {
          name: "required",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Requires an answer. The skip button is hidden.",
            ja: "回答を必須にします。スキップボタンは表示されません。",
          },
        },
        {
          name: "multiple",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Allows choosing multiple choices.",
            ja: "複数の選択肢を選べるようにします。",
          },
        },
        render,
      ],
    },
    htmlOnly("QuestionnaireTitle", "legend"),
    {
      name: "QuestionnaireChoices",
      props: [
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "QuestionnaireChoice elements.",
            ja: "QuestionnaireChoice を並べます。",
          },
        },
        {
          name: "className",
          type: "string",
          description: { en: "Class name.", ja: "クラス名。" },
        },
        {
          name: "render",
          type: "(props, renderProps) => ReactElement",
          description: {
            en: "Replaces the root div element.",
            ja: "ルートの div 要素を差し替える関数。",
          },
        },
      ],
    },
    {
      name: "QuestionnaireChoice",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: {
            en: "Value submitted when chosen.",
            ja: "選択時に送信される値。",
          },
        },
        {
          name: "children",
          type: "ReactNode",
          description: { en: "Label of the choice.", ja: "選択肢のラベル。" },
        },
        {
          name: "description",
          type: "ReactNode",
          description: {
            en: "Supplementary text shown below the label.",
            ja: "ラベルの下に表示する補足説明。",
          },
        },
        disabled("Disables the choice.", "選択肢を無効にします。"),
        {
          name: "className",
          type: "string",
          description: { en: "Class name.", ja: "クラス名。" },
        },
        {
          name: "render",
          type: "(props, renderProps) => ReactElement",
          description: {
            en: "Replaces the root label element.",
            ja: "ルートの label 要素を差し替える関数。",
          },
        },
      ],
    },
    {
      name: "QuestionnaireInput",
      inherits: { kind: "ginga", name: "Input", id: "input" },
      note: {
        en: "name, value, and defaultValue are managed by the questionnaire and cannot be passed.",
        ja: "name・value・defaultValue はアンケート側で管理するため渡せません。",
      },
      props: [],
    },
    htmlOnly("QuestionnaireActions", "div"),
    {
      name: "QuestionnairePrevious",
      inherits: { kind: "ginga", name: "Button", id: "button" },
      note: {
        en: "Hidden on the first question. type cannot be passed.",
        ja: "最初の質問では表示されません。type は渡せません。",
      },
      props: [
        {
          name: "variant",
          type: BUTTON_VARIANT,
          defaultValue: `"ghost"`,
          description: {
            en: "Visual style of the button.",
            ja: "ボタンの見た目。",
          },
        },
      ],
    },
    {
      name: "QuestionnaireSkip",
      inherits: { kind: "ginga", name: "Button", id: "button" },
      note: {
        en: "Hidden on required questions. On the last question, it submits the form. type cannot be passed.",
        ja: "必須の質問では表示されません。最後の質問では送信します。type は渡せません。",
      },
      props: [
        {
          name: "variant",
          type: BUTTON_VARIANT,
          defaultValue: `"ghost"`,
          description: {
            en: "Visual style of the button.",
            ja: "ボタンの見た目。",
          },
        },
      ],
    },
    {
      name: "QuestionnaireNext",
      inherits: { kind: "ginga", name: "Button", id: "button" },
      note: {
        en: "Hidden on the last question and disabled while a required question is unanswered. type cannot be passed.",
        ja: "最後の質問では表示されず、必須の質問が未回答の間は無効になります。type は渡せません。",
      },
      props: [],
    },
    {
      name: "QuestionnaireSubmit",
      inherits: { kind: "ginga", name: "Button", id: "button" },
      note: {
        en: "Shown only on the last question and disabled while a required question is unanswered. type cannot be passed.",
        ja: "最後の質問でだけ表示され、必須の質問が未回答の間は無効になります。type は渡せません。",
      },
      props: [],
    },
  ],
  radio: [
    {
      name: "RadioGroup",
      inherits: aria("RadioGroup"),
      props: [
        disabled(
          "Disables every radio button in the group.",
          "グループ内のすべてのラジオボタンを無効にします。"
        ),
        required("Requires a selection.", "選択を必須にします。"),
        readOnly(
          "Prevents the user from changing the selection.",
          "選択を変更できないようにします。"
        ),
        invalid(
          "Shows the group as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
      ],
    },
    {
      name: "Radio",
      inherits: aria("Radio", "RadioGroup"),
      props: [
        disabled("Disables the radio button.", "ラジオボタンを無効にします。"),
      ],
    },
  ],
  "search-field": [
    {
      name: "SearchField",
      inherits: aria("SearchField"),
      props: [
        {
          name: "label",
          type: "string",
          description: {
            en: "Label shown above the field.",
            ja: "入力欄の上に表示するラベル。",
          },
        },
        {
          name: "placeholder",
          type: "string",
          description: {
            en: "Placeholder text of the input.",
            ja: "入力欄のプレースホルダー。",
          },
        },
        {
          name: "description",
          type: "ReactNode",
          description: {
            en: "Help text shown below the field.",
            ja: "入力欄の下に表示する補足説明。",
          },
        },
        {
          name: "errorMessage",
          type: "ReactNode | ((validation: ValidationResult) => ReactNode)",
          description: {
            en: "Error message shown when the value is invalid.",
            ja: "値が不正なときに表示するエラーメッセージ。",
          },
        },
        disabled("Disables the field.", "入力欄を無効にします。"),
        required("Requires a value.", "入力を必須にします。"),
        readOnly(
          "Makes the field read-only.",
          "入力欄を読み取り専用にします。"
        ),
        invalid(
          "Shows the field as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
        icon("Icon shown before the input.", "入力欄の前に表示するアイコン。"),
        icon(
          "Icon of the clear button. A cross is drawn when omitted.",
          "クリアボタンのアイコン。省略するとバツ印を表示します。",
          "clearIcon"
        ),
      ],
    },
  ],
  "segmented-control": [
    {
      name: "SegmentedControl",
      inherits: aria("ToggleButtonGroup"),
      note: {
        en: "selectionMode, disallowEmptySelection, selectedKeys, defaultSelectedKeys, and onSelectionChange cannot be passed. Use value and onChange instead.",
        ja: "selectionMode・disallowEmptySelection・selectedKeys・defaultSelectedKeys・onSelectionChange は渡せません。代わりに value と onChange を使います。",
      },
      props: [
        {
          name: "value",
          type: "string",
          description: {
            en: "id of the selected item (controlled).",
            ja: "選択中の項目の id（制御）。",
          },
        },
        {
          name: "defaultValue",
          type: "string",
          description: {
            en: "id of the item selected initially (uncontrolled).",
            ja: "初期状態で選択する項目の id（非制御）。",
          },
        },
        {
          name: "onChange",
          type: "(value: string) => void",
          description: {
            en: "Called with the id of the newly selected item.",
            ja: "選択が変わったときに、新しく選択された項目の id を受け取って呼ばれます。",
          },
        },
        {
          name: "size",
          type: SIZE,
          defaultValue: `"md"`,
          description: {
            en: "Size of the control.",
            ja: "コントロールのサイズ。",
          },
        },
        disabled("Disables every item.", "すべての項目を無効にします。"),
      ],
    },
    {
      name: "SegmentedControlItem",
      inherits: aria("ToggleButton"),
      props: [
        {
          name: "id",
          type: "string",
          required: true,
          description: {
            en: "Value of the item, used by value and onChange.",
            ja: "項目の値。value や onChange で使われます。",
          },
        },
        disabled("Disables the item.", "項目を無効にします。"),
      ],
    },
  ],
  select: [
    {
      name: "Select",
      inherits: aria("Select"),
      props: [
        {
          name: "label",
          type: "string",
          required: true,
          description: {
            en: "Label shown above the select.",
            ja: "セレクトボックスの上に表示するラベル。",
          },
        },
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "SelectItem elements.",
            ja: "SelectItem を並べます。",
          },
        },
        {
          name: "description",
          type: "ReactNode",
          description: {
            en: "Help text shown below the select.",
            ja: "セレクトボックスの下に表示する補足説明。",
          },
        },
        {
          name: "errorMessage",
          type: "ReactNode | ((validation: ValidationResult) => ReactNode)",
          description: {
            en: "Error message shown when the value is invalid.",
            ja: "値が不正なときに表示するエラーメッセージ。",
          },
        },
        disabled("Disables the select.", "セレクトボックスを無効にします。"),
        required("Requires a selection.", "選択を必須にします。"),
        invalid(
          "Shows the select as invalid.",
          "入力内容が不正な状態として表示します。"
        ),
        icon(
          "Icon shown at the end of the button.",
          "ボタンの末尾に表示するアイコン。"
        ),
        icon(
          "Icon shown next to the selected item.",
          "選択中の項目の横に表示するアイコン。",
          "checkIcon"
        ),
      ],
    },
    {
      name: "SelectItem",
      inherits: aria("ListBoxItem", "ListBox"),
      props: [
        disabled("Disables the item.", "項目を無効にします。"),
        {
          name: "textValue",
          type: "string",
          defaultValue: "children (string only)",
          description: {
            en: "Text used for type-to-select and screen readers. Required when children is not a string.",
            ja: "文字入力による選択やスクリーンリーダーに使うテキスト。children が文字列でない場合は指定します。",
          },
        },
      ],
    },
  ],
  slider: [
    {
      name: "Slider",
      inherits: aria("Slider"),
      props: [disabled("Disables the slider.", "スライダーを無効にします。")],
    },
    { name: "SliderLabel", inherits: aria("Label", "Slider"), props: [] },
    {
      name: "SliderOutput",
      inherits: aria("SliderOutput", "Slider"),
      props: [],
    },
    { name: "SliderTrack", inherits: aria("SliderTrack", "Slider"), props: [] },
    { name: "SliderThumb", inherits: aria("SliderThumb", "Slider"), props: [] },
  ],
  switch: [
    {
      name: "Switch",
      inherits: aria("Switch"),
      props: [
        {
          name: "children",
          type: "ReactNode",
          required: true,
          description: { en: "Label of the switch.", ja: "スイッチのラベル。" },
        },
        {
          name: "selected",
          type: "boolean",
          description: {
            en: "Whether the switch is on (controlled). Use it with onChange.",
            ja: "オン/オフの状態を外部から制御します。onChange と組み合わせて使います。",
          },
        },
        disabled("Disables the switch.", "スイッチを無効にします。"),
        readOnly(
          "Prevents the user from changing the value.",
          "値を変更できないようにします。"
        ),
      ],
    },
  ],
  tab: [
    {
      name: "Tabs",
      inherits: aria("Tabs"),
      props: [
        {
          name: "orientation",
          type: `"horizontal" | "vertical"`,
          defaultValue: `"horizontal"`,
          description: {
            en: "Direction in which the tabs are laid out.",
            ja: "タブを並べる方向。",
          },
        },
        {
          name: "fullWidth",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Stretches the tabs to fill the width of the tab list.",
            ja: "タブをタブリストの幅いっぱいに広げます。",
          },
        },
        disabled("Disables every tab.", "すべてのタブを無効にします。"),
      ],
    },
    {
      name: "Tab",
      inherits: aria("Tab", "Tabs"),
      props: [disabled("Disables the tab.", "タブを無効にします。")],
    },
    { name: "TabList", inherits: aria("TabList", "Tabs"), props: [] },
    { name: "TabPanel", inherits: aria("TabPanel", "Tabs"), props: [] },
  ],
  table: [
    {
      name: "Table",
      inherits: aria("Table"),
      note: {
        en: "children cannot be passed. Pass rows with data and columns with columns.",
        ja: "children は渡せません。行は data、列は columns で渡します。",
      },
      props: [
        {
          name: "data",
          type: "T[]",
          required: true,
          description: {
            en: "Rows to display.",
            ja: "表示する行のデータ。",
          },
        },
        {
          name: "columns",
          type: "TableColumn<T>[]",
          required: true,
          description: {
            en: "Column definitions. See TableColumn below.",
            ja: "列の定義。下記の TableColumn を参照してください。",
          },
        },
        {
          name: "aria-label",
          type: "string",
          required: true,
          description: {
            en: "Accessible name of the table.",
            ja: "表のアクセシブルな名前。",
          },
        },
        {
          name: "getRowKey",
          type: "(row: T, index: number) => Key",
          description: {
            en: "Returns the key of a row. When omitted, the row's id is used, or the index if there is no id.",
            ja: "行のキーを返す関数。省略すると行の id、id がなければ index を使います。",
          },
        },
        {
          name: "selectionMode",
          type: `"none" | "single" | "multiple"`,
          defaultValue: `"none"`,
          description: {
            en: "Row selection mode. A checkbox column is added when rows can be selected.",
            ja: "行の選択方式。選択できる場合はチェックボックスの列が追加されます。",
          },
        },
        {
          name: "onSelectionChange",
          type: "(selectedRows: T[], keys: Selection) => void",
          description: {
            en: "Called with the selected rows and their keys when the selection changes.",
            ja: "選択が変わったときに、選択中の行とキーを受け取って呼ばれます。",
          },
        },
        {
          name: "showHeader",
          type: "boolean",
          defaultValue: "true",
          description: {
            en: "Shows the header row. When false, it is hidden visually but still read by screen readers.",
            ja: "ヘッダー行を表示します。false にすると見た目上は隠れますが、スクリーンリーダーには読み上げられます。",
          },
        },
        {
          name: "striped",
          type: "boolean",
          defaultValue: "false",
          description: {
            en: "Alternates the background color of rows.",
            ja: "行の背景色を交互に変えます。",
          },
        },
        {
          name: "emptyMessage",
          type: "ReactNode",
          description: {
            en: "Content shown when data is empty.",
            ja: "data が空のときに表示する内容。",
          },
        },
      ],
    },
    {
      name: "TableColumn<T>",
      props: [
        {
          name: "key",
          type: "string",
          required: true,
          description: {
            en: "Unique key of the column.",
            ja: "列を一意に識別するキー。",
          },
        },
        {
          name: "header",
          type: "ReactNode",
          required: true,
          description: { en: "Header content.", ja: "ヘッダーの内容。" },
        },
        {
          name: "accessor",
          type: "keyof T | ((row: T) => ReactNode)",
          required: true,
          description: {
            en: "Property name of the row to show, or a function that returns the cell content.",
            ja: "表示する行のプロパティ名、またはセルの内容を返す関数。",
          },
        },
        {
          name: "isRowHeader",
          type: "boolean",
          description: {
            en: "Uses this column as the row header. When no column sets it, the first column is used.",
            ja: "この列を行見出しにします。どの列にも指定しない場合は最初の列が行見出しになります。",
          },
        },
        {
          name: "allowsSorting",
          type: "boolean",
          description: {
            en: "Makes the column sortable. Handle sorting with sortDescriptor and onSortChange.",
            ja: "列を並べ替え可能にします。並べ替えは sortDescriptor と onSortChange で扱います。",
          },
        },
      ],
    },
  ],
  toast: [
    {
      name: "ToastRegion",
      inherits: aria("ToastRegion", "Toast"),
      props: [
        {
          name: "placement",
          type: `"top-left" | "top-right" | "bottom-left" | "bottom-right"`,
          defaultValue: `"bottom-right"`,
          description: {
            en: "Corner of the screen where toasts appear.",
            ja: "トーストを表示する画面の隅。",
          },
        },
        {
          name: "queue",
          type: "ToastQueue<ToastContentValue>",
          defaultValue: "toast's queue",
          description: {
            en: "Queue of toasts to display. By default, it shows toasts added with toast.",
            ja: "表示するトーストのキュー。既定では toast で追加したトーストを表示します。",
          },
        },
        icon(
          "Icon of the close button.",
          "閉じるボタンのアイコン。",
          "closeIcon"
        ),
        {
          name: "closeLabel",
          type: "string",
          description: {
            en: "Accessible name of the close button.",
            ja: "閉じるボタンのアクセシブルな名前。",
          },
        },
      ],
    },
    {
      name: "toast",
      note: {
        en: "Functions that add a toast. Each returns the key of the toast.",
        ja: "トーストを追加する関数。いずれもトーストのキーを返します。",
      },
      props: [
        {
          name: "show",
          type: "(title: string, options?: ToastOptions & { variant?: ToastVariant }) => string",
          description: {
            en: "Adds a toast with any variant.",
            ja: "任意のバリアントのトーストを追加します。",
          },
        },
        {
          name: "info / success / warning / danger",
          type: "(title: string, options?: ToastOptions) => string",
          description: {
            en: "Adds a toast with the corresponding variant.",
            ja: "それぞれのバリアントのトーストを追加します。",
          },
        },
        {
          name: "close",
          type: "(key: string) => void",
          description: {
            en: "Closes the toast with the given key.",
            ja: "指定したキーのトーストを閉じます。",
          },
        },
      ],
    },
    {
      name: "ToastOptions",
      props: [
        {
          name: "description",
          type: "string",
          description: {
            en: "Text shown below the title.",
            ja: "タイトルの下に表示する説明文。",
          },
        },
        icon(
          "Icon shown before the title.",
          "タイトルの前に表示するアイコン。"
        ),
        {
          name: "timeout",
          type: "number",
          description: {
            en: "Milliseconds until the toast closes automatically. When omitted, it stays until closed.",
            ja: "自動で閉じるまでのミリ秒。省略すると閉じるまで表示し続けます。",
          },
        },
        {
          name: "onClose",
          type: "() => void",
          description: {
            en: "Called when the toast closes.",
            ja: "トーストが閉じたときに呼ばれます。",
          },
        },
      ],
    },
  ],
  tooltip: [
    {
      name: "TooltipTrigger",
      inherits: aria("TooltipTrigger", "Tooltip"),
      props: [
        disabled(
          "Stops the tooltip from opening.",
          "ツールチップを表示しないようにします。"
        ),
      ],
    },
    {
      name: "Tooltip",
      inherits: aria("Tooltip"),
      props: [
        {
          name: "children",
          type: "ReactNode",
          description: {
            en: "Content of the tooltip.",
            ja: "ツールチップの内容。",
          },
        },
        {
          name: "showArrow",
          type: "boolean",
          defaultValue: `true`,
          description: {
            en: "Shows an arrow pointing at the trigger. The offset grows by half the arrow size.",
            ja: "トリガーを指す矢印を表示します。表示すると offset に矢印の半分の大きさが加わります。",
          },
        },
        {
          name: "placement",
          type: "Placement",
          defaultValue: `"top"`,
          description: {
            en: "Position of the tooltip relative to the trigger.",
            ja: "トリガーに対するツールチップの表示位置。",
          },
        },
        {
          name: "offset",
          type: "number",
          defaultValue: `6`,
          description: {
            en: "Distance from the trigger in pixels.",
            ja: "トリガーからの距離（px）。",
          },
        },
      ],
    },
  ],
  trace: [
    htmlOnly("Trace", "div"),
    {
      name: "TraceLine",
      inherits: html("span"),
      props: [
        {
          name: "status",
          type: `"complete" | "running" | "error" | "pending"`,
          description: {
            en: "Status of the step. It is read out to screen readers along with the line.",
            ja: "手順の状態。行と一緒にスクリーンリーダーで読み上げられます。",
          },
        },
        {
          name: "statusLabel",
          type: "string",
          description: {
            en: "Text read out for the status. By default, a label for the current locale is used.",
            ja: "状態として読み上げるテキスト。既定ではロケールに合わせたラベルを使います。",
          },
        },
        render,
      ],
    },
    htmlOnly("TraceIcon", "span"),
    htmlOnly("TraceTitle", "span"),
    htmlOnly("TraceDescription", "span"),
    {
      name: "TraceCollapsible",
      inherits: aria("Disclosure"),
      props: [
        {
          name: "expanded",
          type: "boolean",
          description: {
            en: "Whether the details are expanded (controlled). Use it with onExpandedChange.",
            ja: "詳細の展開状態を外部から制御します。onExpandedChange と組み合わせて使います。",
          },
        },
        disabled("Disables expanding.", "展開できないようにします。"),
      ],
    },
    {
      name: "TraceCollapsibleTrigger",
      inherits: aria("Button"),
      props: [
        icon(
          "Icon shown at the end of the trigger. It rotates when expanded.",
          "トリガーの末尾に表示するアイコン。展開時に回転します。"
        ),
        disabled("Disables the trigger.", "トリガーを無効にします。"),
      ],
    },
    {
      name: "TraceCollapsibleContent",
      inherits: aria("DisclosurePanel", "Disclosure"),
      props: [],
    },
  ],
};
