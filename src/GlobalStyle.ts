import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    /* font size */
    --title-font : 3rem;
    --big-font : 1.8rem;
    --main-font : 1.6rem;
    --small-font : 1.4rem;
    --caption-font : 1.2rem;

    /* color */
    --gray-color: #a2a2a2;
    --notion-color: #FF5400;
    --point-color: #eb4a4c;
    --white-color: #fff;
}
* {
  box-sizing: border-box;
  padding:0;
  margin:0;
}
html {font-size:62.5%}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  color:var(--white-color);
  overflow: hidden;
}

@media screen and (max-width: 640px) {
  body {
    font-size: 1.4rem;
  }
}

h1, h2, p, ul, li, ol {margin: 0; padding: 0}
ul, ol {
  list-style: none;
}
a {
    color: #fff;
    text-decoration: none;
}

`;

export default GlobalStyle;
