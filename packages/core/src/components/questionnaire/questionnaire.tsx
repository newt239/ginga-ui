"use client";

import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@ginga-ui/utils";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
} from "react-aria-components";
import { Button } from "../button";
import { Input } from "../input";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { ButtonProps } from "../button";
import type { InputProps } from "../input";

export type QuestionnaireShortcuts = "letters" | "numbers";

type Answer = { choices: string[]; text: string };

const EMPTY_ANSWER: Answer = { choices: [], text: "" };

const isAnswered = (answer: Answer | undefined) =>
  !!answer && (answer.choices.length > 0 || answer.text.trim() !== "");

type QuestionnaireContextValue = {
  names: string[];
  activeIndex: number;
  answers: Record<string, Answer>;
  shortcuts?: QuestionnaireShortcuts;
  requiredNames: ReadonlySet<string>;
  canGoNext: boolean;
  canSubmit: boolean;
  registerRequired: (name: string, required: boolean) => () => void;
  updateAnswer: (name: string, answer: Partial<Answer>) => void;
  goPrevious: () => void;
  goNext: () => void;
  skip: () => void;
};

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(
  null
);

const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error("Questionnaire の内側で使用してください");
  }
  return context;
};

type QuestionnaireItemContextValue = {
  name: string;
  multiple: boolean;
  isActive: boolean;
  titleId: string;
};

const QuestionnaireItemContext =
  createContext<QuestionnaireItemContextValue | null>(null);

const useQuestionnaireItem = () => {
  const context = useContext(QuestionnaireItemContext);
  if (!context) {
    throw new Error("QuestionnaireItem の内側で使用してください");
  }
  return context;
};

const ChoiceIndexContext = createContext<number>(-1);

const focusAnswerControl = (form: HTMLFormElement | null, name: string) => {
  const item = form?.querySelector<HTMLElement>(
    `[data-questionnaire-item="${CSS.escape(name)}"]`
  );
  const control =
    item?.querySelector<HTMLInputElement>("input:checked") ??
    item?.querySelector<HTMLInputElement>("input");
  control?.focus();
};

const isTextEntry = (target: EventTarget) =>
  target instanceof HTMLTextAreaElement ||
  (target instanceof HTMLInputElement &&
    !["radio", "checkbox"].includes(target.type)) ||
  (target instanceof HTMLElement && target.isContentEditable);

const shortcutIndex = (key: string, shortcuts: QuestionnaireShortcuts) => {
  if (shortcuts === "numbers") {
    return /^[1-9]$/.test(key) ? Number(key) - 1 : -1;
  }
  return /^[a-z]$/i.test(key) ? key.toLowerCase().charCodeAt(0) - 97 : -1;
};

const shortcutLabel = (index: number, shortcuts: QuestionnaireShortcuts) =>
  shortcuts === "numbers" ? String(index + 1) : String.fromCharCode(65 + index);

export type QuestionnaireProps = React.FormHTMLAttributes<HTMLFormElement> & {
  items: readonly { name: string }[];
  shortcuts?: QuestionnaireShortcuts;
};

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  items,
  shortcuts,
  onSubmit,
  className,
  children,
  ...props
}) => {
  const names = useMemo(() => items.map((item) => item.name), [items]);
  const formRef = useRef<HTMLFormElement>(null);
  const [requiredNames, setRequiredNames] = useState<ReadonlySet<string>>(
    () => new Set()
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [focusRequest, setFocusRequest] = useState<{ name: string } | null>(
    null
  );

  const activeName = names[activeIndex];

  useEffect(() => {
    if (focusRequest) focusAnswerControl(formRef.current, focusRequest.name);
  }, [focusRequest]);

  const registerRequired = useCallback((name: string, required: boolean) => {
    if (!required) return () => {};
    setRequiredNames((current) => new Set(current).add(name));
    return () => {
      setRequiredNames((current) => {
        const next = new Set(current);
        next.delete(name);
        return next;
      });
    };
  }, []);

  const isUnansweredRequired = useCallback(
    (name: string) => requiredNames.has(name) && !isAnswered(answers[name]),
    [answers, requiredNames]
  );

  const canGoNext = !!activeName && !isUnansweredRequired(activeName);
  const canSubmit = !names.some(isUnansweredRequired);

  const updateAnswer = useCallback((name: string, answer: Partial<Answer>) => {
    setAnswers((current) => ({
      ...current,
      [name]: { ...EMPTY_ANSWER, ...current[name], ...answer },
    }));
  }, []);

  const moveTo = useCallback(
    (index: number) => {
      const name = names[index];
      if (name === undefined) return;
      setActiveIndex(index);
      setFocusRequest({ name });
    },
    [names]
  );

  const goPrevious = useCallback(() => {
    moveTo(activeIndex - 1);
  }, [activeIndex, moveTo]);

  const goNext = useCallback(() => {
    if (!canGoNext) return;
    moveTo(activeIndex + 1);
  }, [activeIndex, canGoNext, moveTo]);

  const skip = useCallback(() => {
    if (!activeName) return;
    updateAnswer(activeName, EMPTY_ANSWER);
    if (activeIndex >= names.length - 1) {
      formRef.current?.requestSubmit();
      return;
    }
    moveTo(activeIndex + 1);
  }, [activeIndex, activeName, moveTo, names.length, updateAnswer]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    if (!canSubmit) {
      event.preventDefault();
      return;
    }
    onSubmit?.(event);
  };

  useEffect(() => {
    const form = formRef.current;
    if (!form || !shortcuts || !activeName) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        !event.target ||
        isTextEntry(event.target)
      ) {
        return;
      }
      const index = shortcutIndex(event.key, shortcuts);
      if (index === -1) return;
      const control = form
        .querySelector<HTMLElement>(
          `[data-questionnaire-item="${CSS.escape(activeName)}"]`
        )
        ?.querySelectorAll<HTMLInputElement>(
          "input[type='radio'], input[type='checkbox']"
        )[index];
      if (!control || control.disabled) return;
      event.preventDefault();
      control.click();
      control.focus();
    };

    form.addEventListener("keydown", handleKeyDown);
    return () => form.removeEventListener("keydown", handleKeyDown);
  }, [activeName, shortcuts]);

  return (
    <QuestionnaireContext.Provider
      value={{
        names,
        activeIndex,
        answers,
        shortcuts,
        requiredNames,
        canGoNext,
        canSubmit,
        registerRequired,
        updateAnswer,
        goPrevious,
        goNext,
        skip,
      }}
    >
      <form
        ref={formRef}
        noValidate
        className={cn("ginga-questionnaire", className)}
        onSubmit={handleSubmit}
        {...props}
      >
        {children}
      </form>
    </QuestionnaireContext.Provider>
  );
};

export type QuestionnaireProgressProps = OmitStrict<
  React.OutputHTMLAttributes<HTMLOutputElement>,
  "children"
> & {
  children: (progress: { current: number; total: number }) => React.ReactNode;
};

export const QuestionnaireProgress: React.FC<QuestionnaireProgressProps> = ({
  children,
  className,
  ...props
}) => {
  const { names, activeIndex } = useQuestionnaire();
  return (
    <output
      className={cn("ginga-questionnaire-progress", className)}
      {...props}
    >
      {children({ current: activeIndex + 1, total: names.length })}
    </output>
  );
};

export type QuestionnaireItemProps =
  React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
    name: string;
    required?: boolean;
    multiple?: boolean;
  };

export const QuestionnaireItem: React.FC<QuestionnaireItemProps> = ({
  name,
  required = false,
  multiple = false,
  className,
  children,
  ...props
}) => {
  const { names, activeIndex, answers, registerRequired } = useQuestionnaire();
  const id = useId();
  const isActive = names[activeIndex] === name;

  useEffect(
    () => registerRequired(name, required),
    [name, required, registerRequired]
  );

  const itemContext = {
    name,
    multiple,
    isActive,
    titleId: `${id}-title`,
  };

  return (
    <QuestionnaireItemContext.Provider value={itemContext}>
      <fieldset
        hidden={!isActive}
        data-questionnaire-item={name}
        data-active={isActive || undefined}
        data-answered={isAnswered(answers[name]) || undefined}
        className={cn("ginga-questionnaire-item", className)}
        {...props}
      >
        {children}
      </fieldset>
    </QuestionnaireItemContext.Provider>
  );
};

export type QuestionnaireTitleProps = React.HTMLAttributes<HTMLLegendElement>;

export const QuestionnaireTitle: React.FC<QuestionnaireTitleProps> = ({
  className,
  ...props
}) => {
  const { titleId } = useQuestionnaireItem();
  return (
    <legend
      id={titleId}
      className={cn("ginga-questionnaire-title", className)}
      {...props}
    />
  );
};

export type QuestionnaireChoicesProps = {
  className?: string;
  children?: React.ReactNode;
};

export const QuestionnaireChoices: React.FC<QuestionnaireChoicesProps> = ({
  className,
  children,
}) => {
  const { answers, updateAnswer } = useQuestionnaire();
  const { name, multiple, titleId } = useQuestionnaireItem();
  const answer = answers[name] ?? EMPTY_ANSWER;

  let choiceIndex = 0;
  const indexedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== QuestionnaireChoice) {
      return child;
    }
    return (
      <ChoiceIndexContext.Provider value={choiceIndex++}>
        {child}
      </ChoiceIndexContext.Provider>
    );
  });

  const groupClassName = cn("ginga-questionnaire-choices", className);

  if (multiple) {
    return (
      <AriaCheckboxGroup
        name={name}
        aria-labelledby={titleId}
        value={answer.choices}
        onChange={(choices) => updateAnswer(name, { choices })}
        className={groupClassName}
      >
        {indexedChildren}
      </AriaCheckboxGroup>
    );
  }

  return (
    <AriaRadioGroup
      name={name}
      aria-labelledby={titleId}
      value={answer.choices[0] ?? null}
      onChange={(choice) => updateAnswer(name, { choices: [choice], text: "" })}
      className={groupClassName}
    >
      {indexedChildren}
    </AriaRadioGroup>
  );
};

export type QuestionnaireChoiceProps = {
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const QuestionnaireChoice: React.FC<QuestionnaireChoiceProps> = ({
  value,
  description,
  disabled,
  className,
  children,
}) => {
  const { shortcuts } = useQuestionnaire();
  const { multiple } = useQuestionnaireItem();
  const index = useContext(ChoiceIndexContext);
  const Control = multiple ? AriaCheckbox : AriaRadio;

  return (
    <Control
      value={value}
      isDisabled={disabled}
      className={cn("ginga-questionnaire-choice", className)}
    >
      <span
        className="ginga-questionnaire-choice-indicator"
        data-multiple={multiple || undefined}
        aria-hidden="true"
      />
      <span className="ginga-questionnaire-choice-body">
        <span className="ginga-questionnaire-choice-label">{children}</span>
        {description && (
          <span className="ginga-questionnaire-choice-description">
            {description}
          </span>
        )}
      </span>
      {shortcuts && index >= 0 && (
        <kbd className="ginga-questionnaire-choice-shortcut" aria-hidden="true">
          {shortcutLabel(index, shortcuts)}
        </kbd>
      )}
    </Control>
  );
};

export type QuestionnaireInputProps = OmitStrict<
  InputProps,
  "name" | "value" | "defaultValue"
>;

export const QuestionnaireInput: React.FC<QuestionnaireInputProps> = ({
  className,
  onChange,
  onKeyDown,
  ...props
}) => {
  const { names, activeIndex, answers, updateAnswer, goNext } =
    useQuestionnaire();
  const { name, multiple } = useQuestionnaireItem();
  const text = answers[name]?.text ?? "";

  return (
    <Input
      type="text"
      name={text ? name : undefined}
      value={text}
      className={cn("ginga-questionnaire-input", className)}
      onChange={(event) => {
        onChange?.(event);
        updateAnswer(
          name,
          multiple
            ? { text: event.target.value }
            : { text: event.target.value, choices: [] }
        );
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.key !== "Enter" || event.defaultPrevented) return;
        event.preventDefault();
        if (activeIndex < names.length - 1) {
          goNext();
        } else {
          event.currentTarget.form?.requestSubmit();
        }
      }}
      {...props}
    />
  );
};

export type QuestionnaireActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const QuestionnaireActions: React.FC<QuestionnaireActionsProps> = ({
  className,
  ...props
}) => (
  <div className={cn("ginga-questionnaire-actions", className)} {...props} />
);

export type QuestionnaireNavigationProps = OmitStrict<ButtonProps, "type">;

export const QuestionnairePrevious: React.FC<QuestionnaireNavigationProps> = ({
  variant = "ghost",
  className,
  onPress,
  ...props
}) => {
  const { activeIndex, goPrevious } = useQuestionnaire();
  if (activeIndex === 0) return null;
  return (
    <Button
      variant={variant}
      className={cn("ginga-questionnaire-previous", className)}
      onPress={(event) => {
        onPress?.(event);
        goPrevious();
      }}
      {...props}
    />
  );
};

export const QuestionnaireSkip: React.FC<QuestionnaireNavigationProps> = ({
  variant = "ghost",
  onPress,
  ...props
}) => {
  const { names, activeIndex, requiredNames, skip } = useQuestionnaire();
  const activeName = names[activeIndex];
  if (activeName === undefined || requiredNames.has(activeName)) return null;
  return (
    <Button
      variant={variant}
      onPress={(event) => {
        onPress?.(event);
        skip();
      }}
      {...props}
    />
  );
};

export const QuestionnaireNext: React.FC<QuestionnaireNavigationProps> = ({
  disabled,
  onPress,
  ...props
}) => {
  const { names, activeIndex, canGoNext, goNext } = useQuestionnaire();
  if (activeIndex >= names.length - 1) return null;
  return (
    <Button
      disabled={disabled || !canGoNext}
      onPress={(event) => {
        onPress?.(event);
        goNext();
      }}
      {...props}
    />
  );
};

export const QuestionnaireSubmit: React.FC<QuestionnaireNavigationProps> = ({
  disabled,
  ...props
}) => {
  const { names, activeIndex, canSubmit } = useQuestionnaire();
  if (activeIndex < names.length - 1) return null;
  return <Button type="submit" disabled={disabled || !canSubmit} {...props} />;
};
