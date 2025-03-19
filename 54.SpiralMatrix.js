/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let dirIndex = 0;

  let x = 0;
  let y = 0;
  const maxX = matrix[0].length - 1;
  const maxY = matrix.length - 1;
  let result = [matrix[0][0]];
  let visited = new Map();
  visited.set("0,0", true);
  while (true) {
    if ((maxX + 1) * (maxY + 1) === visited.size) {
      break;
    }
    dirIndex = dirIndex % 4;
    const dir = dirs[dirIndex];
    let newX = x + dir[0];
    let newY = y + dir[1];

    if (
      newX > maxX ||
      newX < 0 ||
      newY > maxY ||
      newY < 0 ||
      visited.has(`${newX},${newY}`)
    ) {
      dirIndex += 1;
      continue;
    }

    x = newX;
    y = newY;
    result.push(matrix[y][x]);
    visited.set(`${x},${y}`, true);
  }

  return result;
};
