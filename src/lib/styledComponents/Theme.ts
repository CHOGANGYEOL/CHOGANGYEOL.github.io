import { DefaultTheme } from 'styled-components';

const colors = {
  gray: '#a2a2a2',
  notion: '#ff5400',
  point: '#eb4a4c',
  white: '#fff',
};

const fontSize = {
  title: '3rem',
  big: '1.8rem',
  main: '1.6rem',
  small: '1.4rem',
  caption: '1.2rem',
};

const breakPoint = {
  small: 'max-width: 640px',
  medium: 'max-width: 768px',
  large: 'max-width: 1024px',
  xLarge: 'max-width: 1280px',
};

const Theme: DefaultTheme = {
  colors,
  fontSize,
  breakPoint,
};

type ColorsType = typeof colors;
type FontSizeType = typeof fontSize;
type BreakPointType = typeof breakPoint;

export type { ColorsType, FontSizeType, BreakPointType };

export default Theme;
