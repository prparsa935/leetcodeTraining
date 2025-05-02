/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let min = +Infinity;

  const dfs = (rowIndex, colIndex, sum) => {
    checked.add(`${rowIndex},${colIndex}`);
    if (rowIndex === triangle.length - 1) {
      if (sum + triangle[rowIndex][colIndex] < min) {
        min = sum + triangle[rowIndex][colIndex];
      }
      return;
    }

    dfs(rowIndex + 1, colIndex, sum + triangle[rowIndex][colIndex]);
    dfs(rowIndex + 1, colIndex + 1, sum + triangle[rowIndex][colIndex]);
  };
  dfs(0, 0, 0);
  return min;
};
