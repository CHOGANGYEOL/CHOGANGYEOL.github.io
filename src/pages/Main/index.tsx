import React from 'react';

import { css } from 'styled-components';

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

const Main = () => {
	return (
		<section>
			<article>
				<Typing text={'Frontend Developer'} css={TypingCSS} />
				<p>I design and code beautifully simple things, and I love what I do.</p>
				<img src="" alt="" />
			</article>
			<img src="" alt="" />
		</section>
	);
};

export default Main;
