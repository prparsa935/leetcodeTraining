/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = 10000000;
  let recursive = (start, end) => {
    if (end - start < 0) {
      return;
    }
    let middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] < min) {
      min = nums[middle];
    }
    // rotate samt raste
    if (nums[end] < nums[middle]) {
      recursive(middle + 1, end);
    } else {
      recursive(start, middle - 1);
    }
  };
  recursive(0, nums.length - 1);

  return min;
};
