/**
 * @param {number[]} nums
 * @return {number}
 */
const recursive = (nums, start, end) => {
  const middle = Math.floor(nums.length-1 / 2) + start;
  if (start === end) {
    return [start, end, val];
  }
  const left = recursive(nums, start, middle);
  const right = recursive(nums, middle + 1, end);
  const rightVal = nums[right[2]];

  const leftVal = nums[left[2]];
  let sumVal = rightVal + leftVal;
  for (let i = left[1] + 1; i < right[0]; i++) {
    sumVal += nums[i];
  }
  let sum = [left[0], right[1], sumVal];
  if (sumVal >= rightVal && sumVal >= leftVal) {
    return sum;
  } else if (rightVal >= sumVal && rightVal >= leftVal) {
    return right;
  } else if (leftVal >= sumVal && leftVal >= rightVal) {
    return left;
  }
};
var maxSubArray = function (nums) {
  const result = recursive(nums, 0, nums.length - 1);
  return result[2];
};
