/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let lefPointer = 0;
  let rightPointer = height.length - 1;
  let max = 0;
  while (lefPointer < rightPointer) {
    let width = rightPointer - lefPointer;
    let leftHeight = height[lefPointer];
    let rightHeight = height[rightPointer];
    if (leftHeight > rightHeight) {
      if (rightHeight * width > max) {
        max = rightHeight * width;
      }
      rightPointer -= 1;
    } else {
      if (lefPointer * width > max) {
        max = leftHeight * width;
      }
      lefPointer += 1;
    }
  }
  return max;
};
