/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const bs = (nums, target, start, end) => {
  if (start > end) {
    return false;
  }
  const middle = Math.floor((end - start) / 2) + start;
  const middleVal = nums[middle];
  const endVal = nums[end];
  const startVal = nums[start];
  if (middleVal === target) {
    return true;
  }

  if (middleVal < startVal) {
    if (target > middleVal && target <= endVal) {
      return bs(nums, target, middle + 1, end);
    } else {
      return bs(nums, target, start, middle - 1);
    }
  } else if (middleVal > startVal) {
    if (target < middleVal && target >= startVal) {
      return bs(nums, target, start, middle - 1);
    } else {
      return bs(nums, target, middle + 1, end);
    }
  } else {
    return (
      bs(nums, target, middle + 1, end) || bs(nums, target, start, middle - 1)
    );
  }
};
var search = function (nums, target) {
  return bs(nums, target, 0, nums.length - 1);
};
