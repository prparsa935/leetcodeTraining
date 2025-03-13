/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let sortedNums = sortIndices(nums);
  let resultMap = new Map();
  let index = 0;
  let max = 0;
  console.log(sortedNums);
  while (resultMap.size < k) {
    if (
      !resultMap.has(sortedNums[index] - 1) &&
      !resultMap.has(sortedNums[index] + 1)
    ) {
      if (nums[sortedNums[index]] > max) {
        max = nums[sortedNums[index]];
      }
      resultMap.set(sortedNums[index], nums[sortedNums[index]]);
    }
    index += 1;
  }
  return resultMap;
};
function sortIndices(nums) {
  // ایجاد آرایه‌ای از اندیس‌ها
  let indices = nums.map((_, i) => i);
  // مرتب‌سازی اندیس‌ها بر اساس مقدار متناظر در آرایه‌ی nums
  indices.sort((a, b) => nums[a] - nums[b]);

  return indices;
}
console.log(minCapability([1, 3, 9, 2, 9, 11], 3));
