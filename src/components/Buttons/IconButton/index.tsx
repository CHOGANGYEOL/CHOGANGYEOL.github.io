import React, { ButtonHTMLAttributes } from 'react';

import { Icon } from '../../Display';
import { IconProps } from '../../Display/Icon';

export const IconButton = (props: ButtonHTMLAttributes<HTMLButtonElement> & IconProps) => {
	const {
		type = 'button',
		iconId,
		svgClassName,
		fill,
		stroke,
		$activeColor,
		$defaultColor,
		$disabledColor,
		$isActive,
		$isDisabled,
		$width = '2.4rem',
		...rest
	} = props;

	return (
		<button type={type} style={{ width: $width, height: $width, ...rest.style }} {...rest}>
			<Icon
				{...{
					iconId,
					svgClassName,
					fill,
					stroke,
					$activeColor,
					$defaultColor,
					$disabledColor,
					$isActive,
					$isDisabled,
					$width,
				}}
			/>
		</button>
	);
};
