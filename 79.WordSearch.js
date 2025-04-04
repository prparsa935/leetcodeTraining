/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const dfs = (board, word, wordIndex, i, j, m, n, visited) => {
    if (i >= m || i < 0 || j < 0 || j >= n || visited.has(`${i},${j}`)) {
      return false;
    }
  
    let newWordIndex = wordIndex;
    if (word[newWordIndex] !== board[i][j]) {
      return false;
    }
    newWordIndex++;
    if (newWordIndex === word.length) {
      return true;
    }
    visited.add(`${i},${j}`);
    const found =
      dfs(board, word, newWordIndex, i + 1, j, m, n, visited) ||
      dfs(board, word, newWordIndex, i, j + 1, m, n, visited) ||
      dfs(board, word, newWordIndex, i, j - 1, m, n, visited) ||
      dfs(board, word, newWordIndex, i - 1, j, m, n, visited);
    visited.delete(`${i},${j}`);
    if (found) {
      return true;
    } else {
      return false;
    }
  };
  var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let visited = new Set();
        const result = dfs(board, word, 0, i, j, m, n, visited);
        if (result === true) {
          return true;
        }
      }
    }
    return false;
  };
  