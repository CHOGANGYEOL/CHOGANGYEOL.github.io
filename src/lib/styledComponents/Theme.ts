import { DefaultTheme } from 'styled-components';

const colors = {
	point: '#f87c56',
	gray: '#aaa',
	black: '#222',
	white: '#fff',
	purple: '#5666f8',
} as const;

const fontSize = {
	title: {
		bigTitle: '5.4rem;',
		mainTitle: '2.4rem;',
		subTitle: '2.0rem;',
		pageTitle: '4.8rem;',
	},
	big: '1.6rem',
	main: '1.4rem',
	small: '1.2rem',
} as const;

const breakPoint = {
	small: 'max-width: 640px',
	medium: 'max-width: 768px',
	large: 'max-width: 1024px',
	xLarge: 'max-width: 1280px',
} as const;

const Theme: DefaultTheme = {
	colors,
	fontSize,
	breakPoint,
} as const;

type ColorsType = typeof colors;
type FontSizeType = typeof fontSize;
type BreakPointType = typeof breakPoint;

export type { ColorsType, FontSizeType, BreakPointType };

export default Theme;
