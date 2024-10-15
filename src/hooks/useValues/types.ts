export type DispatchTypes = "SET" | "DELETE" | "RESET";

export interface Dispatch<T> {
  (type: "SET", payload: Partial<T>): void;
  (type: "DELETE", payload: keyof T): void;
  (type: "RESET"): void;
}

type ChangeType = "DEFAULT" | "CHECKBOX";

export type OnChangeValues = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  type?: ChangeType
) => void;

export interface UseValuesReturn<T> {
  values: T;
  onChangeValues: OnChangeValues;
  dispatch: Dispatch<T>;
}
