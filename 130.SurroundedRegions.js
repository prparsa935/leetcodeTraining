/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (x, y, region) => {
    if (board[x][y] === "X") {
      return region;
    }
    if (x === 0 || y === 0) {
      board[x][y] = "T";
    }
    if (x + 1 < board.length) {
      dfs(x + 1, y, region);
    }
    if (x - 1 >= 0) {
      dfs(x - 1, y, region);
    }
    if (y + 1 < board[0].length) {
      dfs(x, y + 1, region);
    }
    if (y - 1 >= 0) {
      dfs(x, y - 1, region);
    }
  };
};
