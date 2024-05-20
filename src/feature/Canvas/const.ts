import { Brush } from "./types";

export const DEFAULT_BRUSH_COLOR = "#000000" as const;
export const DEFAULT_BRUSH_SIZE = 5 as const;
export const DEFAULT_BRUSH_TYPE: Brush = "ROUND" as const;

export const BRUSH_OPTIONS: Record<Brush, string> = {
  ROUND: "ROUND",
  SQUARE: "SQUARE",
} as const;
