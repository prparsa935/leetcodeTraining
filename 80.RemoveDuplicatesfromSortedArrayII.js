/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let count = 1;
  deleteList = [];
  let i = 1;
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 3) {
      nums.splice(i, 1);
      console.log(nums);
      continue;
    }
    i++;
  }
  return nums;
};
