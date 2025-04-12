/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function (s1, s2, s3) {
  let visited = new Map();
  const backtrack = (i, j, k) => {
    if (visited.has(`${i},${j}`)) {
      return visited.get(`${i},${j}`);
    } else {
      visited.set(`${i},${j}`);
    }
    if (k === s3.length) {
      return true;
    }

    if (j < s2.length && s2[j] === s3[k] && backtrack(i, j + 1, k + 1)) {
      return true;
    } else if (i < s1.length && s1[i] === s3[k] && backtrack(i + 1, j, k + 1)) {
      return true;
    } else {
      return false;
    }
  };
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  return backtrack(0, 0, 0);
};
