import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  > nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    a.active {
      color: var(--point-color);
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrap>
      <h1>CGYBlog</h1>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </HeaderWrap>
  );
};

export default Header;
