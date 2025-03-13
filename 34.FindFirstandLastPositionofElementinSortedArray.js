/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const Bs = (nums, target, start, end) => {
  if (end - start < 0) {
    return -1;
  }
  console.log(start);
  console.log(end);
  console.log(middle);
  const middle = Math.floor(end - start / 2) + start;
  const middleVal = nums[middle];
  if (middleVal === target) {
    return middle;
  }
  if (target < middleVal) {
    return Bs(nums, target, start, middle - 1);
  } else {
    return Bs(nums, target, middle + 1, end);
  }
};
var searchRange = function (nums, target) {
  const firstIndexFound = Bs(nums, target, 0, nums.length - 1);
  if (firstIndexFound === -1) {
    return [-1, -1];
  }
  let firstIndex = firstIndexFound;
  let lastIndex = firstIndexFound;

  while (true) {
    if (nums[firstIndex - 1] === nums[firstIndexFound]) {
      firstIndex--;
    } else {
      break;
    }
  }
  while (true) {
    if (nums[lastIndex + 1] === nums[firstIndexFound]) {
      lastIndex++;
    } else {
      break;
    }
  }
  return [firstIndex, lastIndex];
};
