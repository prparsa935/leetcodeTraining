/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let nextVal = num + 1;
    let next = set.has(nextVal);
    let len = 1;
    while (next) {
      len += 1;

      nextVal = nextVal + 1;
      next = set.has(nextVal);
    }
    max = Math.max(len, max);
  }
  return max;
};
