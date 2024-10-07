import { css } from "styled-components";
import { StyleType } from "../types";

type ButtonType = "FILLED" | "LINE" | "NONE";
type ButtonColorType = "PRIMARY" | "TERTIARY";
type ButtonSizeType = "XS" | "S" | "M" | "L" | "XL";
type ButtonCornerType = "ROUNDED" | "RECTANGULAR";

type ButtonSizeStyle = Record<ButtonSizeType, ReturnType<typeof css>>;
type ButtonColorStyle = Record<ButtonType, Record<ButtonColorType, StyleType>>;

export type {
  ButtonType,
  ButtonColorType,
  ButtonSizeType,
  ButtonCornerType,
  ButtonSizeStyle,
  ButtonColorStyle,
};
