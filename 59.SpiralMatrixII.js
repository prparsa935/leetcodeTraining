/**
 * @param {number} n
 * @return {number[][]}
 */
const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
var generateMatrix = function (n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(1));
  let count = 1;
  let row = 0;
  let col = 0;
  let dirIndex = 0;
  let visited = new Map();
  matrix[0][0] = count;
  visited.set("0,0", true);
  count++;
  while (count < n ** 2) {
    dirIndex = dirIndex % 4;
    let newRow = row + dirs[dirIndex][1];
    let newCol = col + dirs[dirIndex][0];
    console.log(newRow);
    console.log(newCol);

    if (
      newRow >= n ||
      newCol >= n ||
      newCol <= -1 ||
      newRow <= -1 ||
      visited.has(`${newRow},${newCol}`)
    ) {
      dirIndex += 1;
      continue;
    }
    row = newRow;
    col = newCol;
    visited.set(`${row},${col}`, true);
    console.log(visited);
    matrix[row][col] = count;
    count++;
  }
  return matrix;
};
