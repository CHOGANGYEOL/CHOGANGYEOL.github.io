import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  max-width: 90rem;
  transform: translateX(-50%);
  left: 50%;
`;
const Header = () => {
  return (
    <HeaderWrap>
      <h1>logo</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </ul>
    </HeaderWrap>
  );
};

export default Header;
