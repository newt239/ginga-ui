import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const items = [
  {
    name: "feature",
    title: "What should we build next?",
    required: true,
    multiple: false,
    choices: [
      {
        value: "timeline",
        label: "Tool call timeline",
        description: "Show what ran and what came back.",
      },
      {
        value: "approval",
        label: "Approval checkpoints",
        description: "Ask before destructive actions.",
      },
      {
        value: "handoff",
        label: "Sub-agent handoffs",
        description: "Make delegated work easier to follow.",
      },
    ],
  },
  {
    name: "platforms",
    title: "Which platforms should it support?",
    required: true,
    multiple: true,
    choices: [
      { value: "web", label: "Web" },
      { value: "ios", label: "iOS" },
      { value: "android", label: "Android" },
    ],
  },
  {
    name: "deadline",
    title: "When do you need it?",
    required: false,
    multiple: false,
    choices: [
      { value: "week", label: "This week" },
      { value: "month", label: "This month" },
    ],
  },
];

const meta: Meta<typeof Questionnaire> = {
  title: "Forms/Questionnaire",
  component: Questionnaire,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Questionnaire>;

const content = (
  <>
    {items.map((item) => (
      <QuestionnaireItem
        key={item.name}
        name={item.name}
        required={item.required}
        multiple={item.multiple}
      >
        <QuestionnaireTitle>{item.title}</QuestionnaireTitle>
        <QuestionnaireChoices>
          {item.choices.map((choice) => (
            <QuestionnaireChoice
              key={choice.value}
              value={choice.value}
              description={
                "description" in choice ? choice.description : undefined
              }
            >
              {choice.label}
            </QuestionnaireChoice>
          ))}
          {item.name === "feature" && (
            <QuestionnaireInput
              aria-label="Another feature"
              placeholder="Describe another feature..."
            />
          )}
        </QuestionnaireChoices>
        <QuestionnaireError>Please answer this question.</QuestionnaireError>
      </QuestionnaireItem>
    ))}
    <QuestionnaireActions>
      <QuestionnairePrevious size="sm">Previous</QuestionnairePrevious>
      <QuestionnaireProgress>
        {({ current, total }) => `Question ${current} of ${total}`}
      </QuestionnaireProgress>
      <QuestionnaireSkip size="sm">Skip</QuestionnaireSkip>
      <QuestionnaireNext size="sm">Next</QuestionnaireNext>
      <QuestionnaireSubmit size="sm">Submit</QuestionnaireSubmit>
    </QuestionnaireActions>
  </>
);

const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    feature: data.get("feature"),
    platforms: data.getAll("platforms"),
    deadline: data.get("deadline"),
  });
};

export const Default: Story = {
  args: { items, onSubmit: handleSubmit, children: content },
};

export const WithShortcuts: Story = {
  args: {
    items,
    shortcuts: "letters",
    onSubmit: handleSubmit,
    children: content,
  },
};
