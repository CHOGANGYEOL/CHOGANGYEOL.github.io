import styled, { css } from "styled-components";
import { HStack, VStack } from "../../../components/Common";
import { useMemo } from "react";
import { MARGIN, STONE_SIZE } from "../../../feature/OMok/const";
import { useOMok } from "../../../feature/OMok/hooks";
import { User } from "../../../feature/OMok/types";
import { Button } from "../../../components/Button";

const OMok = () => {
  const canvasSize = useMemo(() => 600 + MARGIN * 2, []);

  const {
    canvasRef,
    onClickCanvas,
    winner,
    handleReset,
    count,
    handleWithdraw,
  } = useOMok();

  return (
    <Wrapper $width={canvasSize} $justifyContent="center" $gap="1.2rem">
      <HStack $gap="1.2rem" $justifyContent="flex-end">
        <Button
          disabled={count <= 0 || !!winner}
          onClick={() => {
            handleWithdraw();
          }}
        >
          무르기
        </Button>
        <Button
          disabled={count <= 0}
          onClick={() => {
            handleReset();
          }}
        >
          재시작
        </Button>
      </HStack>
      <CanvasWrapper>
        {!!winner && (
          <WinnerScreen
            $alignItems="center"
            $justifyContent="center"
            $gap="1.2rem"
            {...{ $winner: winner }}
          >
            {winner} WIN
          </WinnerScreen>
        )}
        <canvas
          width={canvasSize}
          height={canvasSize}
          ref={canvasRef}
          onClick={(e) => {
            onClickCanvas(e);
          }}
        />
      </CanvasWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(VStack)<{ $width: number }>`
  margin: 0 auto;
  width: ${({ $width }) => $width / 10}rem;
  min-height: 100vh;
`;

const WinnerScreen = styled(VStack)<{ $winner: User }>`
  position: absolute;
  inset: 0;
  ${({ $winner, theme }) => {
    switch ($winner) {
      case "BLACK":
        return css`
          background-color: rgba(255, 255, 255, 0.7);
          color: ${theme.colors.black};
          &::before {
            background-color: ${({ theme }) => theme.colors.black};
          }
        `;
      case "WHITE":
        return css`
          background-color: rgba(0, 0, 0, 0.4);
          color: ${theme.colors.white};
          &::before {
            background-color: ${({ theme }) => theme.colors.white};
          }
        `;
    }
  }}
  ${({ theme }) => theme.font.headline[3]};
  font-weight: 600;
  &::before {
    content: "";
    width: ${STONE_SIZE / 4}rem;
    border-radius: 99rem;
    aspect-ratio: 1/1;
  }
`;

const CanvasWrapper = styled.div`
  position: relative;
`;

export default OMok;
