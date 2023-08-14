import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./component/common/Header";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import NotFound from "./page/NotFound";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.main`
`;

export default AppRouter;
