import React from 'react';

import styled, { css } from 'styled-components';

import { IconIDTypes } from './types';
import { ColorKeys } from '../../../lib/styledComponents/Theme';

interface IconStyleProps {
	$width?: string;
	$defaultColor?: ColorKeys;
	$activeColor?: ColorKeys;
	$disabledColor?: ColorKeys;
	$isActive?: boolean;
	$isDisabled?: boolean;
}

export interface IconProps extends IconStyleProps {
	iconId: IconIDTypes;
	svgClassName?: string;
	fill?: string;
	stroke?: string;
}

const Svg = styled.svg<IconStyleProps>`
	transition:
		0.15s opacity,
		0.15s color;
	color: ${({ $defaultColor, theme }) => $defaultColor && theme.colors[$defaultColor]};
	${({ $isActive, $activeColor, theme }) =>
		$isActive &&
		$activeColor &&
		css`
			color: ${theme.colors[$activeColor]};
		`};

	&:hover {
		color: ${({ $activeColor, theme }) => $activeColor && theme.colors[$activeColor]};
	}
	${({ $isDisabled, $disabledColor, theme }) =>
		$isDisabled &&
		$disabledColor &&
		css`
			opacity: 0.8;
			color: ${theme.colors[$disabledColor]};
		`};
	${({ $width }) => css`
		width: ${$width};
		height: ${$width};
	`}
`;

export const Icon = (props: IconProps) => {
	const {
		iconId,
		svgClassName,
		fill = 'none',
		stroke = 'none',
		$width = '2.4rem',
		$defaultColor = 'gray',
		$activeColor = 'black',
		$disabledColor = 'gray',
		$isActive = false,
		$isDisabled = false,
	} = props;
	return (
		<Svg
			className={svgClassName}
			{...{ fill, stroke, $width, $defaultColor, $activeColor, $disabledColor, $isActive, $isDisabled }}
		>
			<use href={`/image/icons.svg#${iconId}`} />
		</Svg>
	);
};
