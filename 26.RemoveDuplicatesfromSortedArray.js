/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let resultMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    resultMap.set(value, value);
    // if (value !== "_") {
    //   let nextPointer = i + 1;
    //   let nextPointerValue = nums[nextPointer];
    //   while (value === nextPointerValue) {
    //     nums.;
    //     nextPointer += 1;
    //     nextPointerValue = nums[nextPointer];
    //   }
    // }
  }
  for (let i of resultMap.values) return resultMap.values.arguments;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
