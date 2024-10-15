import { css } from "styled-components";

export const ellipsis = (clamp: number) =>
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${clamp};
    -webkit-box-orient: vertical;
  `;
