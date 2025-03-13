/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const iIndexValue = nums[i];
    for (let j = nums.length - 1; j > i; j--) {
      const jIndexValue = nums[j];
      if (iIndexValue + jIndexValue === target) {
        return [i, j];
      }
    }
  }
};
