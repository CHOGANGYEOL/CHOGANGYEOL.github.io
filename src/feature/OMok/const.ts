export const MARGIN = 30 as const;
export const ROW = 18 as const; // 바둑판 선 개수
export const STONE_SIZE = 13 as const; // 바둑돌 크기
export const BOARD_COLOR = "#e38d00" as const; // background 컬러
export const STROKE_COLOR = "#000" as const;
export const RECT_COLOR = "red" as const; // 마지막 클릭자 color;

export const CHECK_DIRECTION = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
] as const;
