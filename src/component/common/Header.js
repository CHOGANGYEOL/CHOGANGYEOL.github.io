import styled from "styled-components"

const HeaderWrap = styled.header`
    position:fixed;
    width:100%;
    max-width:90rem;
    transform:translateX(-50%);
    left:50%;
`
const Header = () => {
    return(
        <HeaderWrap>
        <h1>Logo</h1>
        </HeaderWrap>
    )
}

export default Header