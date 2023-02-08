import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./component/common/Header";
import NotFound from "./component/common/NotFound";
import Main from "./page/Main";

const Background = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #222;
`
function App() {
  return (
    <>
      <BrowserRouter>
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
