import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  max-width: 90rem;
  transform: translateX(-50%);
  left: 50%;
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    a.active {
      color:var(--point-color);
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrap>
      <h1>logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
      </ul>
    </HeaderWrap>
  );
};

export default Header;
