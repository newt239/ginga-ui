import { ClientOptions } from "openai";
import * as v from "valibot";
import { requiredVariables } from "./const";

const variableStringRecord = Object.fromEntries(
  requiredVariables.map((variable) => [variable.name, v.string()])
) as Record<
  (typeof requiredVariables)[number]["name"],
  ReturnType<typeof v.string>
>;

export const Variables = v.strictObject(variableStringRecord);

export interface Props {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
  maxRetries?: number;
}

export type Response =
  | {
      type: "error";
      retry: number;
    }
  | {
      type: "success";
      variables: Record<string, string>;
      retry: number;
    };
