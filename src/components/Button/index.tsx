import { ButtonHTMLAttributes } from "react";
import {
  ButtonColorType,
  ButtonCornerType,
  ButtonSizeType,
  ButtonType,
} from "./types";

import styled, { css } from "styled-components";

import { buttonAreaStyles, buttonColorStyles } from "./style";
import {
  FontKeys,
  getColorStyle,
  getFontStyle,
} from "../../lib/styledComponents/function";

interface StyleProps {
  $fontSize?: FontKeys;
  $fontWeight?: number;
  $buttonType?: ButtonType;
  $color?: ButtonColorType;
  $size?: ButtonSizeType;
  $corner?: ButtonCornerType;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleProps;

export const Button = (props: ButtonProps) => {
  const {
    $buttonType = "FILLED",
    $color = "PRIMARY",
    $corner = "ROUNDED",
    $fontSize = "main",
    $fontWeight = 400,
    $size = "M",
    children,
    type = "button",
    disabled = false,
    ...rest
  } = props;

  return (
    <ButtonElement
      {...{
        ...rest,
        type,
        disabled,
        $buttonType,
        $color,
        $corner,
        $fontSize,
        $size,
        $fontWeight,
      }}
    >
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<StyleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  transition: opacity 0s;
  ${({ $buttonType, $color }) => {
    if ($buttonType && $color) {
      const colorStyle = buttonColorStyles[$buttonType][$color];
      return css`
        color: ${getColorStyle(colorStyle?.color)};
        background-color: ${getColorStyle(colorStyle?.backgroundColor)};
        border-width: ${colorStyle?.border?.width};
        border-style: ${colorStyle?.border?.style};
        border-color: ${getColorStyle(colorStyle?.border?.color)};

        &:disabled {
          color: ${getColorStyle(colorStyle?.disabled?.color)};
          background-color: ${getColorStyle(
            colorStyle?.disabled?.backgroundColor
          )};
          border-width: ${colorStyle?.disabled?.border?.width};
          border-style: ${colorStyle?.disabled?.border?.style};
          border-color: ${getColorStyle(colorStyle?.disabled?.border?.color)};
        }

        &:hover {
          color: ${getColorStyle(colorStyle?.hover?.color)};
          background-color: ${getColorStyle(
            colorStyle?.hover?.backgroundColor
          )};
          border-width: ${colorStyle?.hover?.border?.width};
          border-style: ${colorStyle?.hover?.border?.style};
          border-color: ${getColorStyle(colorStyle?.hover?.border?.color)};
        }

        &:active {
          color: ${getColorStyle(colorStyle?.active?.color)};
          background-color: ${getColorStyle(
            colorStyle?.active?.backgroundColor
          )};
          border-width: ${colorStyle?.active?.border?.width};
          border-style: ${colorStyle?.active?.border?.style};
          border-color: ${getColorStyle(colorStyle?.active?.border?.color)};
        }
      `;
    }
  }}
  ${({ $fontSize, $fontWeight }) =>
    $fontSize &&
    css`
      ${getFontStyle($fontSize)};
      font-weight: ${$fontWeight};
    `}
	${({ $size, $buttonType }) =>
    $size && $buttonType !== "NONE" && buttonAreaStyles[$size]};
  ${({ $corner }) =>
    $corner === "RECTANGULAR" &&
    css`
      border-radius: 0px;
    `}
`;
