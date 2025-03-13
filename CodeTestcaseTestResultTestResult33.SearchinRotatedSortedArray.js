/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const BSearch = (middle, list, target) => {
  const value = list[middle];
  if (value === target) {
    return middle;
  }
  if (target > value) {
    BSearch();
  }
  const middle = Math.round((rightIndex - leftIndex) / 2);

  BSearch(middle);
};
var search = function (nums, target) {};
