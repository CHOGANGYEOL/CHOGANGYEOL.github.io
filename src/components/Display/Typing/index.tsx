import React, { HTMLAttributes, useEffect, useState } from 'react';

import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

interface TypingComponentProps {
	css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

interface TypingProps extends HTMLAttributes<HTMLParagraphElement>, TypingComponentProps {
	text: string;
	infinityCount?: number;
	intervalCount?: number;
}

const TypingComponent = styled.p<TypingComponentProps>`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	&::after {
		content: '';
		display: inline-block;
		height: 100%;
		width: 0.3rem;
		background-color: ${({ theme }) => theme.colors.black};

		animation: blink 2s step-end infinite;
		@keyframes blink {
			0%,
			50%,
			100% {
				opacity: 1;
			}
			25%,
			75% {
				opacity: 0;
			}
		}
	}
	${({ css }) => css}
`;

export const Typing = ({ text, infinityCount, intervalCount = 200, css, ...rest }: TypingProps) => {
	// 글자를 추가할 빈문자열 변수 sequence
	const [sequence, setSequence] = useState('');
	// 현재까지 타이핑된 문자열의 index
	const [textCount, setTextCount] = useState(0);
	// 일지정지 여부
	const [isTypingPaused, setTypingPaused] = useState(false);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			if (isTypingPaused && !!infinityCount) {
				clearInterval(typingInterval);
				setTimeout(() => {
					setTypingPaused(false);
					setTextCount(0);
					setSequence('');
				}, infinityCount);
				return;
			}

			if (textCount >= text.length) {
				setTypingPaused(true);
				return;
			}

			const nextChar = text[textCount];
			setSequence((prev) => prev + nextChar);
			if (nextChar === '\n') {
				setTextCount((prev) => prev + 2);
			} else {
				setTextCount((prev) => prev + 1);
			}
		}, intervalCount);
		return () => clearInterval(typingInterval);
	});

	return (
		<TypingComponent css={css} {...rest}>
			{sequence}
		</TypingComponent>
	);
};
