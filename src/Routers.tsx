import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './layout';
import { HEADER_HEIGHT } from './layout/Header';
import { Pages } from './pages';

const Main = styled.main`
	position: relative;
	min-height: calc(100vh - ${HEADER_HEIGHT});
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Main>
				<Routes>
					<Route path="/" element={<Pages.Main />} />
					<Route path="/project" element={<Pages.Project />} />
					<Route path="/blog" element={<Pages.Blog />} />
					<Route path="/profile" element={<Pages.Profile />} />
					<Route path="/terminal" element={<Pages.Terminal />} />
					<Route path="*" element={<Pages.NotFound />} />
				</Routes>
			</Main>
		</BrowserRouter>
	);
};

export default Router;
