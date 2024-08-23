import styled, { css } from "styled-components";
import { FlexProps } from "./types";

import {
  ColorKeys,
  FontKeys,
  getColorStyle,
  getFontStyle,
} from "../../lib/styledComponents/function";

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({
    $gap,
    $direction,
    $alignItems,
    $alignSelf,
    $flex,
    $justifyContent,
    $wrap,
  }) => css`
    gap: ${$gap};
    flex-direction: ${$direction};
    align-items: ${$alignItems};
    align-self: ${$alignSelf};
    flex: ${$flex};
    justify-content: ${$justifyContent};
    flex-wrap: ${$wrap};
  `}
`;

export const VStack = styled(Flex)`
  flex-direction: column;
`;

export const HStack = styled(Flex)`
  flex-direction: row;
`;

export const Paragraph = styled.p<{ $font?: FontKeys; $color?: ColorKeys }>`
  ${({ $font, $color }) => css`
    ${getColorStyle($color)}
    ${getFontStyle($font)}
  `};
`;
