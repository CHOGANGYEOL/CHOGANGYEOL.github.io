import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding:0;
  margin:0;
}
html {font-size:62.5%}
body {
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-size: 1.6rem;
  color:${({ theme }) => theme.colors.black};
  overflow: hidden;
}
#root {
  background-color: ${({ theme }) => theme.colors.white};
}
h1, h2, p, ul, li, ol {margin: 0; padding: 0}
ul, ol {
  list-style: none;
}
button {
  border:0;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
}
img {
  max-width: 100%;
}
`;

export default GlobalStyle;
