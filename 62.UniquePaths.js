/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, (row) => Array(n).fill(1));
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row - 1][col]+ dp[row][col - 1];
    }
  }
  return dp[m - 1][n - 1];
};
