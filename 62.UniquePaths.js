/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const dfs = (visited, aPos, m, n, result) => {
  if (aPos[0] === m - 1 && aPos[1] === n - 1) {
    result[0] += 1;
    return;
  }
  aPos[0] = aPos[0] + 1;
  if (aPos[0] <= m - 1) {
    dfs(visited, aPos, m, n, result);
  }
  aPos[0] = aPos[0] - 1;
  aPos[1] = aPos[1] + 1;
  if (aPos[1] <= n - 1) {
    dfs(visited, aPos, m, n, result);
  }
  aPos[0] = aPos[0] + 1;
};
var uniquePaths = function (m, n) {
  let result = [0];
  dfs(new Set(), [0, 0], m, n, result);
  return result[0];
};
