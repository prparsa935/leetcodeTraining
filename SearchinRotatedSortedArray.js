/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let bSearch = (nums, start, end, target) => {
  if (end - start < 0) {
    return -1;
  }
  const middle = Math.floor((end - start) / 2) + start;
  const middleVal = nums[middle];

  if (middleVal === target) {
    return middle;
  }
  const startVal = nums[start];
  const endVal = nums[end];
  if (startVal <= middleVal) {
    console.log(startVal);
    console.log(endVal);

    console.log(middleVal);
    console.log(target);
    if (startVal <= target && middleVal > target) {
      return bSearch(nums, start, middle - 1, target);
    } else {
      return bSearch(nums, middle + 1, end, target);
    }
  } else {
    if (endVal >= target && middle < target) {
      return bSearch(nums, middle + 1, end, target);
    } else {
      return bSearch(nums, start, middle - 1, target);
    }
  }
};
var search = function (nums, target) {
  return bSearch(nums, 0, nums.length - 1, target);
};
