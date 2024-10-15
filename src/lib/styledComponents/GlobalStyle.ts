import { createGlobalStyle } from "styled-components";
import { barStyle } from "../../assets/styles/scroll";
import { CustomToastStyle } from "../reactToastify/customStyle";
import { notoSans } from "./fontFamily";

export const GlobalStyle = createGlobalStyle`
${notoSans}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size:62.5%;
}
body {
  margin: 0;
  font-size: 1.6rem;
  font-family: "Noto_Sans";
  ${barStyle()}
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black}
}
a, button, textarea {
  outline:none;
}
${CustomToastStyle}
`;

export const ScrollFix = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;
export default ScrollFix;
