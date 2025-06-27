/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = new Map();
  const recursive = (n) => {
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return 1;
    }
    if (memo.has(n)) {
      return memo.get(n);
    }
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += recursive(n - i) * recursive(i - 1);
    }
    memo.set(n, result);
    return result;
  };
  return recursive(n);
};
