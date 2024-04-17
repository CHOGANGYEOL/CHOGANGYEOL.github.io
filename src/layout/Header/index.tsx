import React from 'react';

import styled from 'styled-components';

import { IconButton } from '../../components/Buttons';
import { IconID } from '../../components/Display/Icon/types';

const HeaderWrap = styled.header`
	position: sticky;
	inset: 0 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 6rem;
	align-items: center;
	padding: 0 3.2rem;
`;

export const Header = () => {
	return (
		<HeaderWrap>
			<IconButton
				iconId={IconID.NAV_DASHBOARD}
				onClick={() => {
					console.log('click');
				}}
			/>
			<nav></nav>
		</HeaderWrap>
	);
};
