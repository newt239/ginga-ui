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
      title: "What should we build next?",
      choices: [
        {
          value: "timeline",
          label: "Tool call timeline",
          description: "Show what ran and what came back.",
        },
        {
          value: "approval",
          label: "Approval checkpoints",
          description: "Ask before irreversible actions.",
        },
      ],
    },
    {
      name: "audience",
      title: "Who will use it most?",
      choices: [
        {
          value: "developer",
          label: "Developers",
          description: "Build features with the components.",
        },
        {
          value: "designer",
          label: "Designers",
          description: "Tune themes and visuals.",
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
              aria-label="Other answer"
              placeholder="Something else..."
            />
          </QuestionnaireChoices>
        </QuestionnaireItem>
      ))}
      <QuestionnaireActions>
        <QuestionnairePrevious size="sm">Previous</QuestionnairePrevious>
        <QuestionnaireProgress>
          {({ current, total }) => `Question ${current} of ${total}`}
        </QuestionnaireProgress>
        <QuestionnaireNext size="sm">Next</QuestionnaireNext>
        <QuestionnaireSubmit size="sm">Submit</QuestionnaireSubmit>
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
        <QuestionnaireTitle>
          Which platforms should it support?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          {platforms.map((platform) => (
            <QuestionnaireChoice key={platform.value} value={platform.value}>
              {platform.label}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit size="sm">Submit</QuestionnaireSubmit>
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
        <QuestionnaireTitle>Do you have a deadline?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="week">This week</QuestionnaireChoice>
          <QuestionnaireChoice value="month">This month</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="budget">
        <QuestionnaireTitle>Is there a budget limit?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireInput
            aria-label="Budget limit"
            placeholder="e.g. $1,000"
          />
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious size="sm">Previous</QuestionnairePrevious>
        <QuestionnaireProgress>
          {({ current, total }) => `Question ${current} of ${total}`}
        </QuestionnaireProgress>
        <QuestionnaireSkip size="sm">Skip</QuestionnaireSkip>
        <QuestionnaireNext size="sm">Next</QuestionnaireNext>
        <QuestionnaireSubmit size="sm">Submit</QuestionnaireSubmit>
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
        <QuestionnaireTitle>Choose a tone for replies</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="formal">Formal</QuestionnaireChoice>
          <QuestionnaireChoice value="casual">Casual</QuestionnaireChoice>
          <QuestionnaireChoice value="concise">Concise</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit size="sm">Submit</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
