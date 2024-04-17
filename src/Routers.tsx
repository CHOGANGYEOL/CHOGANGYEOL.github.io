import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/Common';
import { Pages } from './pages';

const Container = styled.main``;

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Pages.Main />} />
					<Route path="/project" element={<Pages.Project />} />
					<Route path="/blog" element={<Pages.Blog />} />
					<Route path="/profile" element={<Pages.Profile />} />
					<Route path="/terminal" element={<Pages.Terminal />} />
					<Route path="*" element={<Pages.NotFound />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default Router;
