"use client";

import { useState } from "react";

import {
  Paragraph,
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ginga-ui/core";

export function BasicExample() {
  const questions = [
    {
      name: "feature",
      title: "次に作る機能はどれですか？",
      choices: [
        {
          value: "timeline",
          label: "ツール呼び出しのタイムライン",
          description: "実行した内容と結果を時系列で表示します。",
        },
        {
          value: "approval",
          label: "承認ステップ",
          description: "取り消せない操作の前に確認を挟みます。",
        },
      ],
    },
    {
      name: "audience",
      title: "主な利用者は誰ですか？",
      choices: [
        {
          value: "developer",
          label: "開発者",
          description: "コンポーネントを組み込んで実装します。",
        },
        {
          value: "designer",
          label: "デザイナー",
          description: "テーマや見た目を調整します。",
        },
      ],
    },
  ];
  const [result, setResult] = useState("");

  return (
    <Questionnaire
      items={questions}
      onSubmit={(event) => {
        event.preventDefault();
        const answers = new FormData(event.currentTarget);
        setResult(
          questions
            .map(({ name }) => `${name}: ${answers.get(name)}`)
            .join(", ")
        );
      }}
    >
      {questions.map((question) => (
        <QuestionnaireItem key={question.name} name={question.name} required>
          <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
          <QuestionnaireChoices>
            {question.choices.map((choice) => (
              <QuestionnaireChoice
                key={choice.value}
                value={choice.value}
                description={choice.description}
              >
                {choice.label}
              </QuestionnaireChoice>
            ))}
            <QuestionnaireInput
              aria-label="その他の回答"
              placeholder="その他（自由入力）"
            />
          </QuestionnaireChoices>
        </QuestionnaireItem>
      ))}
      <QuestionnaireActions>
        <QuestionnairePrevious size="sm">前へ</QuestionnairePrevious>
        <QuestionnaireProgress>
          {({ current, total }) => `${total}問中${current}問目`}
        </QuestionnaireProgress>
        <QuestionnaireNext size="sm">次へ</QuestionnaireNext>
        <QuestionnaireSubmit size="sm">送信</QuestionnaireSubmit>
      </QuestionnaireActions>
      {result && <Paragraph>{result}</Paragraph>}
    </Questionnaire>
  );
}

export function MultipleExample() {
  const platforms = [
    { value: "web", label: "Web" },
    { value: "ios", label: "iOS" },
    { value: "android", label: "Android" },
  ];

  return (
    <Questionnaire
      items={[{ name: "platforms" }]}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(new FormData(event.currentTarget).getAll("platforms"));
      }}
    >
      <QuestionnaireItem name="platforms" required multiple>
        <QuestionnaireTitle>対応するプラットフォームは？</QuestionnaireTitle>
        <QuestionnaireChoices>
          {platforms.map((platform) => (
            <QuestionnaireChoice key={platform.value} value={platform.value}>
              {platform.label}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit size="sm">送信</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}

export function SkipExample() {
  return (
    <Questionnaire
      items={[{ name: "deadline" }, { name: "budget" }]}
      onSubmit={(event) => event.preventDefault()}
    >
      <QuestionnaireItem name="deadline">
        <QuestionnaireTitle>希望する納期はありますか？</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="week">今週中</QuestionnaireChoice>
          <QuestionnaireChoice value="month">今月中</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="budget">
        <QuestionnaireTitle>予算の上限はありますか？</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireInput
            aria-label="予算の上限"
            placeholder="例: 10万円"
          />
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious size="sm">前へ</QuestionnairePrevious>
        <QuestionnaireProgress>
          {({ current, total }) => `${total}問中${current}問目`}
        </QuestionnaireProgress>
        <QuestionnaireSkip size="sm">スキップ</QuestionnaireSkip>
        <QuestionnaireNext size="sm">次へ</QuestionnaireNext>
        <QuestionnaireSubmit size="sm">送信</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}

export function ShortcutsExample() {
  return (
    <Questionnaire
      items={[{ name: "tone" }]}
      shortcuts="letters"
      onSubmit={(event) => event.preventDefault()}
    >
      <QuestionnaireItem name="tone" required>
        <QuestionnaireTitle>返答のトーンを選んでください</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="formal">丁寧</QuestionnaireChoice>
          <QuestionnaireChoice value="casual">カジュアル</QuestionnaireChoice>
          <QuestionnaireChoice value="concise">簡潔</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit size="sm">送信</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
