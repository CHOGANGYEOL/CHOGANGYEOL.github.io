import styled, { css } from "styled-components";
import { FlexProps, GridProps, ParagraphProps } from "./types";

import {
  getColorStyle,
  getFontStyle,
} from "../../lib/styledComponents/function";
import { ellipsis } from "../../assets/styles/ellipsis";

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

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ $columns = 1 }) => $columns}, 1fr);
  ${({ $gap, $alignItems, $justifyContent }) => css`
    gap: ${$gap};
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
  `}
`;

export const Paragraph = styled.p<ParagraphProps>`
  ${({ $font, $color, $fontWeight, $ellipsis, $textAlign = "left" }) => css`
    ${$ellipsis && ellipsis($ellipsis)};
    color: ${getColorStyle($color)};
    ${getFontStyle($font)};
    font-weight: ${$fontWeight};
    text-align: ${$textAlign};
  `};
`;
