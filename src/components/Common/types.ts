import { ColorKeys, FontKeys } from "../../lib/styledComponents/function";

type Direction =
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

type Wrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

type JustifyContent =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "left"
  | "normal"
  | "right"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

type AlignItems =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "normal"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

type AlignSelf = AlignItems | "auto";

export interface FlexProps {
  $gap?: string;
  $direction?: Direction;
  $wrap?: Wrap;
  $flex?: string;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $alignSelf?: AlignSelf;
}

export interface GridProps {
  $columns?: number;
  $gap?: string;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
}

export interface ParagraphProps {
  $font?: FontKeys;
  $color?: ColorKeys;
  $fontWeight?: number;
  $ellipsis?: number;
  $textAlign?: "left" | "right" | "center";
}
