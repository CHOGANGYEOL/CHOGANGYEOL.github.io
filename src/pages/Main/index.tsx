import React from 'react';

import styled, { css } from 'styled-components';

import Character from '../../assets/image/Character.svg';
import Devices from '../../assets/image/Devices.svg';
import { Typing } from '../../components/Display';

const TypingCSS = css`
	font-weight: bold;
	font-size: 4.4rem;
	color: ${({ theme }) => theme.colors.point};
	line-height: 6rem;
	height: 6rem;
	&::after {
		height: 4rem;
		background-color: ${({ theme }) => theme.colors.point};
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	flex: 1;
	margin-top: 10rem;
	align-items: center;
	justify-content: space-between;
	> article {
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		.description {
			text-align: center;
			font-size: 2.2rem;
			color: ${({ theme }) => theme.colors.point};
			font-weight: 300;
		}
		.img__wrapper {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 25rem;
			aspect-ratio: 1;
			::before {
				content: '';
				position: absolute;
				width: 19rem;
				aspect-ratio: 1;
				background-color: ${({ theme }) => theme.colors.point};
				border-radius: 21rem;
			}
			img {
				position: relative;
				max-width: 100%;
			}
		}
	}
`;

const Main = () => {
	return (
		<Section>
			<article>
				<Typing text={'Frontend Developer'} css={TypingCSS} />
				<p className="description">I design and code beautifully simple things, and I love what I do.</p>
				<div className="img__wrapper">
					<img src={Character} alt="character" />
				</div>
			</article>
			<img src={Devices} alt="devices" />
		</Section>
	);
};

export default Main;
