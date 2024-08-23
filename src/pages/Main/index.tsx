import styled, { css, keyframes } from "styled-components";
import Theme from "../../lib/styledComponents/Theme";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    message: "PROFILE",
    href: "profile",
  },
  {
    message: "PROJECT",
    href: "project",
  },
  {
    message: "",
    href: null,
  },
  {
    message: "BLOG",
    href: "blog",
  },
  {
    message: "TERMINAL",
    href: "terminal",
  },
  {
    message: "",
    href: null,
  },
] as const;
const Main = () => {
  const popRef = useRef(-1);
  const navigate = useNavigate();

  const [timer, setTimer] = useState<number | null>(null);

  const onInteractive = async () => {
    try {
      for (let i = 0; i <= 6; i++) {
        popRef.current = i;
        await new Promise<void>((resolve) => {
          const t_ = setTimeout(resolve, 160);
          setTimer(t_);
        });
      }
      popRef.current = -1;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const timer_ = window.setTimeout(onInteractive, 1000);
    return () => window.clearTimeout(timer_);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(Number(timer));
  }, [timer]);

  return (
    <Wrapper>
      <div className="inner">
        {DATA.map((el, idx) => (
          <Triangle
            key={"triangle--" + String(idx)}
            pop={popRef.current === idx}
            onClick={() => {
              if (!el.href) onInteractive();
              else navigate(el.href);
            }}
          >
            <Message pop={popRef.current === idx}>{el.message}</Message>
          </Triangle>
        ))}
      </div>
    </Wrapper>
  );
};

const hexagonalSpin = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const zoomIn = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(1, 1); }
`;

const zoomInHexaMobile = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(.8, .8); }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 40rem;
  aspect-ratio: 1/1;
  inset: 0;
  margin: auto;
  animation: 120s ${hexagonalSpin} linear infinite;

  .inner {
    width: 30rem;
    aspect-ratio: 1/1;
    padding: 7rem 0;
    position: relative;
    margin: 0 auto;
    animation: 1.4s ${zoomIn} ease;

    @media screen and (${Theme.breakPoint.small}) {
      animation: 1.4s ${zoomInHexaMobile} ease;
      transform: scale(0.8);
    }

    @media screen and (max-height: 600px) and (orientation: landscape) {
      animation: 1.4s ${zoomInHexaMobile} ease;
      transform: scale(0.8);
    }
  }
`;

const Triangle = styled.button<{ pop: boolean }>`
  display: block;
  position: absolute;
  margin-left: 7.5rem;
  border-style: solid;
  border-width: 13rem 7.5rem 0;
  /* calc(width + margin) */
  transform-origin: 7.5rem calc(13rem + 0.5rem);
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  cursor: pointer;
  outline: none;

  ${({ pop }) => {
    const ANGLE = 60;
    const items = [
      "#a1d0ff",
      "#9be8af",
      "#c1aaf8",
      "#fcf894",
      "#ffc2fd",
      "#ffc8c8",
    ];

    return items.map(
      (item, index) => css`
        &:nth-child(${index + 1}) {
          transform: ${pop
            ? `rotate(${index * ANGLE}deg) translate(0, -20px)`
            : `rotate(${index * ANGLE}deg)`};
          border-color: ${item} transparent;

          &:hover {
            transform: rotate(${index * ANGLE}deg) translate(0, -10px);
          }
        }
      `
    );
  }}

  &:hover {
    opacity: 0.8;
  }

  &:hover span {
    top: -180px;
  }
`;

const Message = styled.span<{ pop: boolean }>`
  display: block;
  position: absolute;
  top: ${({ pop }) => (pop ? "-180px" : "-160px")};
  padding-bottom: 40px;
  transform: translateX(-50%);
  font-weight: 600;
  transition: 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  white-space: nowrap;
  z-index: 0;
`;

export default Main;
