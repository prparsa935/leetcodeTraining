/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const iBs = (matrix, n, start, end, target) => {
  let middle = Math.floor((end - start) / 2) + start;
  if (start > end) {
    return false;
  }
  if (matrix[middle][0] <= target && target <= matrix[middle][n - 1]) {
    return middle;
  }
  if (matrix[middle][n - 1] < target) {
    return iBs(matrix, n, middle + 1, end, target);
  }
  if (matrix[middle][0] > target) {
    return iBs(matrix, n, start, middle - 1, target);
  }
};
const jBs = (list, start, end, target) => {
  let middle = Math.floor((end - start) / 2) + start;
  if (start > end) {
    return false;
  }
  if (list[middle] === target) {
    return true;
  }
  if (list[middle] < target) {
    return jBs(list, middle + 1, end, target);
  } else {
    return jBs(list, start, middle - 1, target);
  }
};
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  const iIndex = iBs(matrix, n, 0, m - 1, target);

  if (iIndex === false) {
    return false;
  }

  return jBs(matrix[iIndex], 0, n - 1, target);
};
