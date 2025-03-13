/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let row = 0; row < board.length; row++) {
    const rowVal = board[row];
    for (let col = 0; col < rowVal.length; col++) {
      let colVal = rowVal[col];

      if (colVal !== ".") {
        let colCheckI = col + 1;
        while (colCheckI < rowVal.length) {
          if (colVal === rowVal[colCheckI]) {
            console.log(colVal);
            console.log(rowVal[colCheckI]);
            return false;
          }
          colCheckI += 1;
        }
        let rowCheckI = row + 1;
        while (rowCheckI < board.length) {
          if (colVal === board[rowCheckI][col]) {
            console.log(colVal);
            console.log(board[rowCheckI][col]);
            return false;
          }
          rowCheckI += 1;
        }
      }

      let squireRowNumber = Math.floor(row / 3);
      let squireColNumber = Math.floor(col / 3);
    }
  }
  return true;
};
