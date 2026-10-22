export const ja = {
  metadata: {
    title:
      "Ginga UI - LLMを活用したテーマ生成可能なReact UIコンポーネントライブラリ",
    description:
      "Webサイトのコンテンツやプロンプトに基づいて動的にスタイリングされるReactコンポーネント",
  },
  layout: {
    skipToContent: "本文へスキップ",
    loading: "読み込み中",
    toc: "目次",
  },
  nav: {
    label: "ドキュメント",
    gettingStarted: "はじめに",
    overview: "概要",
    quickStart: "クイックスタート",
    themeGeneration: "テーマ生成",
    allComponents: "全コンポーネント",
    resources: "リソース",
    opensInNewTab: "（新しいタブで開く）",
    logoCredit: "ロゴ:",
    openMenu: "メニューを開く",
    menu: "メニュー",
    closeMenu: "メニューを閉じる",
  },
  settings: {
    theme: "カラーテーマ",
    system: "システム設定",
    light: "ライト",
    dark: "ダーク",
    language: "言語",
  },
  codeBlock: {
    copy: "コピーする",
    copied: "コピー済み",
    files: "ファイル",
  },
  home: {
    eyecatchAlt:
      "Ginga UI の紹介画像。UI Component Library for React、20+ Components、Accessible、Simple to Use、TypeScript Based、Support SSR、Free and Opensource、Generate Theme with AI の特徴が並んでいる。",
  },
  components: {
    lead: (count: number) =>
      `Ginga UIが提供する全${count}個のコンポーネントを確認できます。タブでカテゴリを切り替えて、各コンポーネントの詳細ページにアクセスできます。`,
    categoryTabs: "コンポーネントカテゴリ",
    install: "インストール",
  },
  themeGenerator: {
    mode: "実行方法",
    modeFree: "無料枠",
    modeOwnKey: "自分のAPIキー",
    freeTitle: "APIキーなしで試せます",
    freeDescription: (model: string | undefined, limit: number) =>
      `サーバーに登録したAPIキーで${model ?? "OpenAIのモデル"}を呼び出します。利用者全体で直近24時間に${limit}回までです。入力したプロンプトと生成結果はサーバーに記録されます。`,
    freeRemaining: (remaining: number) => `残り${remaining}回。`,
    securityTitle: "セキュリティ上の注意",
    securityDescription:
      "このデモで入力したAPIキーはサーバーサイドのRoute Handlerへ送信され、テーマ生成にのみ使用されます。保存はされません。本番環境ではAPIキーをクライアントから受け取らず、サーバーサイドの環境変数から読み込んでください。",
    provider: "LLMプロバイダー",
    model: "モデル",
    apiKey: "APIキー",
    browserTitle: "ブラウザ内で完結します",
    browserDescription:
      "Gemini Nanoを使うため、APIキーの入力もサーバーへの通信も不要です。生成はすべて端末上で実行されます。",
    availability: {
      unavailable:
        "このブラウザではGemini Nanoを利用できません。デスクトップ版のChromeまたはEdgeでお試しください。",
      downloadable:
        "初回生成時にGemini Nanoのモデルがダウンロードされます。数GBの通信が発生し、完了までに時間がかかります。",
      downloading: "Gemini Nanoのモデルをダウンロード中です。",
      available: "Gemini Nanoが利用可能です。APIキーもサーバー通信も不要です。",
    },
    prompt: "テーマプロンプト",
    promptPlaceholder: "例: 森の中の静けさ、サイバーパンク、ダークモード",
    generate: "テーマを生成",
    generating: "生成中...",
    downloading: (progress: number) => `モデルをダウンロード中... ${progress}%`,
    error: "エラー",
    resultTitle: "生成されたテーマ",
    resultDescription:
      "テーマがサイト全体に適用されました。ページをスクロールして変化を確認してください。",
    errors: {
      missingPrompt: "プロンプトを入力してください",
      missingApiKeyAndPrompt: "APIキーとプロンプトを入力してください",
      generationFailed: "テーマ生成に失敗しました",
      quotaFetchFailed: "無料枠の残り回数を取得できませんでした",
      quotaExceeded: (limit: number) =>
        `無料枠は直近24時間で${limit}回までです。時間をおくか、自分のAPIキーでお試しください。`,
      promptTooLong: (max: number) =>
        `無料枠のプロンプトは${max}文字以内で入力してください`,
      unknownProvider: (provider: string) =>
        `不明なプロバイダーです: ${provider}`,
    },
  },
};

export type Dictionary = typeof ja;
