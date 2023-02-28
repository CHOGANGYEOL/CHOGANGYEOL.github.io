import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    /* font size */
    --big-font : 3.6rem;
    --head-font : 2.2rem;
    --sub-head-font : 1.8rem;
    --main-font : 1.6rem;
    --small-font : 1.4rem;
    --caption-font : 1.2rem;

    /* color */
    --gray-color: #a2a2a2;
    --notion-color: #FF5400;
    --point-color: #eb4a4c;
    --white-color: #fff;
}
html {font-size:62.5%}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  color:var(--white-color);
}
h1, h2, p, ul, li, ol {margin: 0; padding: 0}
ul, ol {
  list-style: none;
}
a {
    color: #fff;
    text-decoration: none;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
#root {
  display: flex;
  justify-content: center;
}
`;

export default GlobalStyle;
