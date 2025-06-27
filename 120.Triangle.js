/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    let row = triangle[i];
    let prevRow = triangle[i + 1];
    for (let j = 0; j < row.length; j++) {
      row[j] = Math.min(prevRow[j], prevRow[j + 1]) + row[j];
    }
  }
  return triangle[0][0];
};
