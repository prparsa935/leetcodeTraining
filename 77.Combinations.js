/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const dfs = (k, n, curr, result, state) => {
  if (k === 0) {
    result.push([...state]);
  }

  for (let i = curr; i <= n; i++) {
    state.push(i);
    dfs(k - 1, n, i + 1, result, state);
    state.pop();
  }
};
var combine = function (n, k) {
  let result = [];
  dfs(k, n, 1, result, []);
  return result;
};
