/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let memo = new Map();
  const recursive = (m) => {
    let max = 0;
    if (m === 1) {
      return 1;
    }
    if (memo.has(m)) {
      return memo.get(m);
    }
    for (let i = m - 1; i > 0; i--) {
      max = Math.max(recursive(m - i) * i, (m - i) * i, max);
    }
    memo.set(m, max);

    return max;
  };
  return recursive(n);
};
