import { ColorKeys } from "../lib/styledComponents/function";

type BorderStyleType =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export interface BorderStyle {
  style?: BorderStyleType;
  width?: string;
  color: ColorKeys;
}
export interface ActionType {
  backgroundColor?: ColorKeys;
  color?: ColorKeys;
  border?: BorderStyle;
}
export interface StyleType {
  color: ColorKeys;
  backgroundColor: ColorKeys;
  border?: BorderStyle;
  disabled?: ActionType;
  hover?: ActionType;
  active?: ActionType;
}
