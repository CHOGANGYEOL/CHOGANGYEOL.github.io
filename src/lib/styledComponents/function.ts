import Theme, { ColorsType, FontType } from "./Theme";

export const SEPARATOR = "_" as const;

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${Extract<K, string>}${typeof SEPARATOR}${Extract<keyof T[K], number>}`
    : K;
}[keyof T];

export type ColorKeys = NestedKeys<ColorsType>;

export type FontKeys = NestedKeys<FontType>;

export const getFontStyle = (key?: FontKeys) => {
  if (!key) return undefined;
  const keys = key.split(SEPARATOR);
  let current: any = Theme.font;
  keys.forEach((k: string | number) => {
    current = current[k];
  });
  return current;
};

export const getColorStyle = (key?: ColorKeys) => {
  if (!key) return undefined;
  const keys = key.split(SEPARATOR);
  let current: any = Theme.colors;
  keys.forEach((k: string | number) => {
    current = current[k];
  });
  return current;
};
