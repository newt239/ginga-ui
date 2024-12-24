import { ClientOptions } from "openai";
import * as v from "valibot";
import { requiredVariables } from "./const";

export const Variables = v.record(
  v.union(requiredVariables.map((variable) => v.string(variable.name))),
  v.string()
);

export type Props = {
  apiKey: string;
  prompt: string;
  options?: Omit<ClientOptions, "apiKey">;
  maxRetries?: number;
};

export type Response =
  | {
      type: "error";
      retry: number;
    }
  | {
      type: "success";
      variables: { [key: string]: string };
      retry: number;
    };
