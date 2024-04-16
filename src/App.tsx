
import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import GlobalStyle from './lib/styledComponents/GlobalStyle';
import Theme from './lib/styledComponents/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
