import { useState } from "react";

const initial_Board = () => Array(9).fill(null);

function fun() {
  const [board, setBoard] = useState(initial_Board());
  const [isXNext, setIsXNext] = useState(true);

  const Win_Pattern = [
    [0, 4, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const calculateWinner = (curr_board) => {
    for (let i = 0; i < Win_Pattern.length; i++) {
      const [a, b, c] = Win_Pattern[i];
      if (
        curr_board[a] &&
        curr_board[a] === curr_board[b] &&
        curr_board[a] == curr_board[c]
      ) {
        return curr_board[a];
      }
    }
    return null;
  };

  const handleclick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const StateMsg = () => {
    const win = calculateWinner(board);
    if (win) return `${win} is the winner`;
    if (!board.includes(null)) return "The match is draw";
    return `It's ${isXNext ? "X" : "O"}'s Turn`;
  };

  const Reset = () => {
    setBoard(initial_Board());
    setIsXNext(true);
  };

  return { board, handleclick, StateMsg, Reset };
}

export default fun;
