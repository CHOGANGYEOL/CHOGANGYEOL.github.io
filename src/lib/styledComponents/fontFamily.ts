import { css } from "styled-components";

const NOTO_SANS_URL = "/assets/font/NotoSans-";

export const notoSans = css`
  @font-face {
    font-family: "Noto_Sans";
    src: url(${NOTO_SANS_URL}Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Noto_Sans";
    src: url(${NOTO_SANS_URL}Light.ttf) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Noto_Sans";
    src: url(${NOTO_SANS_URL}Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
`;
