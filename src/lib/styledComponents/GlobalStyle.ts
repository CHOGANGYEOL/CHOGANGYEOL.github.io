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
  font-family: 'Montserrat', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  color:${({ theme }) => theme.colors.white};
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
