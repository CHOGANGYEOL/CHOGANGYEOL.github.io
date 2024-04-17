import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconButton } from '../../components/Buttons';
import { Icon } from '../../components/Display';
import { IconID } from '../../components/Display/Icon/types';

export const HEADER_HEIGHT = '6rem' as const;

const HeaderWrap = styled.header`
	position: sticky;
	inset: 0 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: ${HEADER_HEIGHT};
	align-items: center;
	padding: 0 3.2rem;
	nav {
		display: flex;
		gap: 3.2rem;
	}
`;

export const Header = () => {
	const handleFullScreen = useCallback(() => {
		const root = document.getElementById('root');
		if (!root) return;
		const doc = window.document;

		if (!doc.fullscreenElement) {
			root.requestFullscreen.call(root);
		} else {
			doc.exitFullscreen.call(doc);
		}
	}, []);

	return (
		<HeaderWrap>
			<IconButton
				iconId={IconID.MENU}
				onClick={() => {
					console.log('click');
				}}
			/>
			<nav>
				<Link to={'https://github.com/CHOGANGYEOL'} target="_blank">
					<Icon iconId={IconID.GITHUB} />
				</Link>
				<IconButton
					iconId={IconID.ENLARGE}
					onClick={() => {
						handleFullScreen();
					}}
				/>
			</nav>
		</HeaderWrap>
	);
};
