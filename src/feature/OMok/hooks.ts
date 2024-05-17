import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BOARD_COLOR,
  CHECK_DIRECTION,
  MARGIN,
  RECT_COLOR,
  ROW,
  STONE_SIZE,
  STROKE_COLOR,
} from "./const";
import { indexToXy, xyToIndex } from "./function";
import { User } from "./types";

export const useOMok = () => {
  const initialBoard = useMemo(
    () => new Array(Math.pow(ROW + 1, 2)).fill(-1),
    []
  ); // 144개의 배열을 생성해서 -1로 채움

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rowSize = useMemo(() => 600 / ROW, []);
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState<number[]>(initialBoard);
  const [history, setHistory] = useState<number[][]>([]);
  const [winner, setWinner] = useState<User>(null);

  const handleReset = useCallback(() => {
    setCount(0);
    setBoard(initialBoard);
    setHistory([]);
    setWinner(null);
    onDraw();
  }, []);
  /**
   * 바둑판 그리기 함수
   * @param canvas
   * @returns
   */
  const onDraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.fillStyle = BOARD_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < ROW; x++) {
      for (let y = 0; y < ROW; y++) {
        let w = (canvas.width - MARGIN * 2) / ROW;
        ctx.strokeStyle = STROKE_COLOR;
        ctx.lineWidth = 1;
        ctx.strokeRect(w * x + MARGIN, w * y + MARGIN, w, w);
      }
    }

    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        ctx.fillStyle = STROKE_COLOR;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(
          (3 + a) * rowSize + MARGIN + a * 5 * rowSize,
          (3 + b) * rowSize + MARGIN + b * 5 * rowSize,
          STONE_SIZE / 3,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }, []);

  /**
   * 방금 둔 바둑돌에 사각형 표시
   * @param x
   * @param y
   */
  const onDrawRect = useCallback((x: number, y: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    let w = rowSize / 2;
    ctx.strokeStyle = RECT_COLOR;
    ctx.lineWidth = 3;
    ctx.strokeRect(
      x * rowSize + MARGIN - w,
      y * rowSize + MARGIN - w,
      w + rowSize / 2,
      w + rowSize / 2
    );
  }, []);

  const onDrawStone = useCallback((board: number[]) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    for (let i = 0; i < board.length; i++) {
      // 모든 눈금의 돌의 유무, 색깔 알아내기
      const a = indexToXy(i, board)[0];
      const b = indexToXy(i, board)[1];
      if (board[xyToIndex(a, b)] === 1) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(
          a * rowSize + MARGIN,
          b * rowSize + MARGIN,
          STONE_SIZE,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      if (board[xyToIndex(a, b)] === 2) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(
          a * rowSize + MARGIN,
          b * rowSize + MARGIN,
          STONE_SIZE,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }, []);

  const winnerChecker = useCallback(
    (x: number, y: number, board: number[]) => {
      const thisColor = board[xyToIndex(x, y)];

      for (let k = 0; k < 4; k++) {
        let winBlack = 1;
        let winWhite = 1;
        for (let j = 0; j < 2; j++) {
          for (let i = 1; i < 5; i++) {
            const a = x + CHECK_DIRECTION[k + 4 * j][0] * i;
            const b = y + CHECK_DIRECTION[k + 4 * j][1] * i;
            if (board[xyToIndex(a, b)] === thisColor) {
              switch (thisColor) {
                case 1:
                  winBlack++;
                  break;
                case 2:
                  winWhite++;
                  break;
              }
            } else {
              break;
            }
          }
        }
        if (winBlack === 5) {
          setWinner("BLACK");
        }
        if (winWhite === 5) {
          setWinner("WHITE");
        }
      }
    },
    [board]
  );

  const onClickCanvas = useCallback(
    (e: MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const x = Math.round(Math.abs(offsetX - MARGIN) / rowSize);
      const y = Math.round(Math.abs(offsetY - MARGIN) / rowSize);
      if (offsetX > 10 && offsetX < 640 && offsetY > 10 && offsetY < 640) {
        if (board[xyToIndex(x, y)] != -1) {
          return;
        } else {
          const newBoard = board.slice();
          if (count % 2 == 0) {
            newBoard[xyToIndex(x, y)] = 1;
          } else {
            newBoard[xyToIndex(x, y)] = 2;
          }
          setBoard(newBoard);
          setCount((prev) => prev + 1);

          onDraw();
          onDrawRect(x, y);
          onDrawStone(newBoard);

          winnerChecker(x, y, newBoard); // 돌이 5개 연속 놓였는지 확인
          const boardCopy = Object.assign([], newBoard);
          setHistory((prev) => [...prev, boardCopy]);
        }
      }
    },
    [board, count]
  );

  const handleWithdraw = useCallback(() => {
    const newHistory = history.slice();
    newHistory.pop();
    const lastBoard = newHistory.slice(-1)[0];
    setBoard(lastBoard ?? initialBoard);
    setHistory(newHistory);
    setCount((prev) => prev - 1);

    onDraw();
    onDrawStone(lastBoard ?? initialBoard);
  }, [history]);

  // first render canvas draw
  useEffect(() => {
    onDraw();
  }, []);

  return {
    canvasRef,
    winner,
    onClickCanvas,
    handleReset,
    count,
    handleWithdraw,
  };
};
