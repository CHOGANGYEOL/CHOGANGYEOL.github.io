import 'styled-components';
import { BreakPointType, ColorsType, FontSizeType } from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSize: FontSizeType;
    breakPoint: BreakPointType;
  }
}
