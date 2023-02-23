import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./component/common/Header";
import NotFound from "./component/common/NotFound";
import Home from "./page/Home";

const Container = styled.section`
  width: 100%;
  max-width: 90rem;
  padding-top: 8rem;
`;
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;
