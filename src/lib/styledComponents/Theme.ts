import { type DefaultTheme } from "styled-components";

const colors = {
  transparent: "transparent",
  white: "#fff",
  black: "#222",
  gray: "#aaa",
  primary: "#f87c56",
  purple: "#5666f8",
} as const;

const font = {
  title: {
    54: "font-size: 5.4rem; font-weight: 300; line-height: 100%;",
    48: "font-size: 4.8rem; font-weight: normal; line-height: 130%;",
    24: "font-size: 2.4rem; font-weight: 700; line-height: 130%;",
    20: "font-size: 2.0rem; font-weight: 700; line-height: 130%;",
  },
  big: "font-size: 1.6rem; font-weight: normal; line-height: 130%;",
  main: "font-size: 1.4rem; font-weight: normal; line-height: 130%;",
  small: "font-size: 1.2rem; font-weight: normal; line-height: 130%;",
  link: "font-size: 1.4rem; font-weight: normal; line-height: 130%;",
} as const;

const shadow = {
  modal: "0px 4px 16px rgba(31, 33, 42, 0.06)",
  tooltip: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)",
};

const breakPoint = {
  small: "max-width: 640px",
  medium: "max-width: 768px",
  large: "max-width: 1024px",
  xLarge: "max-width: 1280px",
} as const;

const Theme: DefaultTheme = {
  colors,
  font,
  breakPoint,
  shadow,
};

type ColorsType = typeof colors;
type FontType = typeof font;
type BreakPointType = typeof breakPoint;
type ShadowType = typeof shadow;

export type { ColorsType, FontType, BreakPointType, ShadowType };

export default Theme;
