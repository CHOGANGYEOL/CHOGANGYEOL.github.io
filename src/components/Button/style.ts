import { css } from "styled-components";
import { ButtonColorStyle, ButtonSizeStyle } from "./types";

export const buttonColorStyles: ButtonColorStyle = {
  FILLED: {
    PRIMARY: {
      color: "white",
      backgroundColor: "primary",
      disabled: {
        backgroundColor: "gray",
      },
      hover: {
        backgroundColor: "primary",
      },
      active: {
        backgroundColor: "primary",
      },
    },
    TERTIARY: {
      color: "white",
      backgroundColor: "gray",
      disabled: {
        backgroundColor: "white",
        color: "gray",
      },
      hover: {
        backgroundColor: "gray",
      },
      active: {
        backgroundColor: "gray",
      },
    },
  },
  LINE: {
    PRIMARY: {
      color: "primary",
      backgroundColor: "white",
      border: {
        width: "0.1rem",
        style: "solid",
        color: "primary",
      },
      disabled: {
        color: "gray",
        border: {
          color: "gray",
        },
      },
      hover: {
        backgroundColor: "primary",
      },
      active: {
        backgroundColor: "primary",
      },
    },
    TERTIARY: {
      color: "gray",
      backgroundColor: "white",
      border: {
        width: "0.1rem",
        style: "solid",
        color: "gray",
      },
    },
  },
  NONE: {
    PRIMARY: {
      backgroundColor: "transparent",
      color: "black",
    },
    TERTIARY: {
      backgroundColor: "transparent",
      color: "black",
    },
  },
} as const;

export const buttonAreaStyles: ButtonSizeStyle = {
  XS: css`
    height: 3.6rem;
    padding: 0 1.2rem;
    border-radius: 4px;
  `,
  S: css`
    height: 3.6rem;
    padding: 0 2.4rem;
    border-radius: 4px;
  `,
  M: css`
    height: 4rem;
    padding: 0 1.2rem;
    border-radius: 4px;
  `,
  L: css`
    height: 4rem;
    padding: 0 2.4rem;
    border-radius: 4px;
  `,
  XL: css`
    height: 5.2rem;
    padding: 0 1.6rem;
    border-radius: 8px;
  `,
} as const;
