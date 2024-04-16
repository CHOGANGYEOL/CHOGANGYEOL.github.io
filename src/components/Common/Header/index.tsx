import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderWrap>
			<h1>
				<Link to={'/'}>
					<span>CHO GANGYEOL BLOG</span>
				</Link>
			</h1>
			<nav>
				<NavLink to="/">About</NavLink>
				<NavLink to="/portfolio">Portfolio</NavLink>
			</nav>
		</HeaderWrap>
	);
};

const HeaderWrap = styled.header`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px;
	h1 {
		a {
			display: block;
			width: 50px;
			height: 50px;
			background-image: url("");
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			span {
				overflow: hidden;
				line-height: 0;
				text-indent: -9999px;
				position: absolute;
				width: 0;
				height: 0;
			}
		}
	}
	> nav {
		display: flex;
		gap: 24px;
		a {
			font-size: ${({ theme }) => theme.fontSize.title.bigTitle};
			font-weight: bold;
			transition: 0.15s color;
		}
		a.active,
		a:hover {
			color: ${({ theme }) => theme.colors.point};
		}
	}
`;
