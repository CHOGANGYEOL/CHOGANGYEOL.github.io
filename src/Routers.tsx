import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Pages from './pages';
import { Header } from './components/Common';

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

const Container = styled.main``;

export default Router;
