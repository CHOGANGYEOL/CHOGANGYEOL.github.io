import styled from "styled-components";
import AppRouter from "./AppRouter";
import GlobalStyle from "./GrobalStyle";

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: #000;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <AppRouter />
    </>
  );
}

export default App;
