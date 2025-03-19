/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let remainValToJump = nums[0];
  let currentIndex = 0;
  if (remainValToJump === 0) {
    return false;
  }
  while (true) {
    currentIndex += 1;
    remainValToJump -= 1;

    if (currentIndex === nums.length - 1) {
      return true;
    }
    if (nums[currentIndex] > remainValToJump) {
      remainValToJump = nums[currentIndex];
    }
    if (remainValToJump === 0) {
      return false;
    }
  }
};
