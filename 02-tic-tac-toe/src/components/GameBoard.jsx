const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((playerSymbol, colInd) => (
              <li key={colInd}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
