/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const m = nums.length;
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  for (let i = 0; i < m; i++) {
    const val = nums[i];
    if (val === 0) {
      zeroCount++;
    } else if (val === 1) {
      oneCount++;
    } else if (val === 2) {
      twoCount++;
    }
  }
  let index = 0;
  for (let i = 0; i < zeroCount; i++) {
    nums[index] = 0;
    index++;
  }
  for (let i = 0; i < oneCount; i++) {
    nums[index] = 1;
    index++;
  }
  for (let i = 0; i < twoCount; i++) {
    nums[index] = 2;
    index++;
  }
  return nums;
};
