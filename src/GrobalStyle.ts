import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    /* font size */
    --big-font : 3.6rem;
    --head-font : 3rem;
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

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;

export default GlobalStyle;
