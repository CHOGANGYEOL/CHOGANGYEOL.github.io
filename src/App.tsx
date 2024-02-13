import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import GlobalStyle from './lib/styledComponents/GlobalStyle';
import Theme from './lib/styledComponents/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
