/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numsMap = new Map();
  while (nums.length) {
    const x = nums.pop();
    if (numsMap.has(x)) {
      numsMap.set(x, numsMap.get(x) + 1);
    } else {
      numsMap.set(x, 1);
    }
  }
  let result = null;
  console.log(numsMap);
  numsMap.forEach((value, key) => {
    if (value === 1) {
      result = key;
    }
  });
  return result;
};
