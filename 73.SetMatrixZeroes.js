/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let isFirstRowZero = false;
  let isFirstcolZero = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      isFirstcolZero = true;
      break;
    }
  }
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      isFirstRowZero = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let val = matrix[i][j];
      if (val === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (isFirstcolZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (isFirstRowZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  return matrix;
};
