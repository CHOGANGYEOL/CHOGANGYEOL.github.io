import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './lib/styledComponents/GlobalStyle';
import Theme from './lib/styledComponents/Theme';
import Routers from './Routers';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Routers />
		</ThemeProvider>
	);
}

export default App;
