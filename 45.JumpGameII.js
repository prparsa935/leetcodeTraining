/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let remainStep = nums[0] - 1;
  if (nums.length <= 1) {
    return 0;
  }
  let jump = 1;
  let maxStep = remainStep;
  for (let i = 1; i < nums.length - 1; i++) {
    let currentNum = nums[i];
    if (currentNum > maxStep) {
      maxStep = currentNum;
    }
    if (remainStep === 0) {
      remainStep = maxStep;
      jump++;
    }
    maxStep -= 1;
    remainStep -= 1;
  }
  return jump;
};
