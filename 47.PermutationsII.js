/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let dfs = (nums, state, resultList, visitedIndexes) => {
  if (state.length === nums.length) {
    resultList.push([...state]);
    return;
  }
  let visitedValues = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (visitedIndexes.has(i)) {
      continue;
    }
    if (visitedValues.has(nums[i])) {
      continue;
    }
    visitedValues.add(nums[i]);
    visitedIndexes.add(i);
    state.push(nums[i]);
    dfs(nums, state, resultList, visitedIndexes);
    state.pop();
    visitedIndexes.delete(i);
  }
};
var permuteUnique = function (nums) {
  let resultList = [];
  dfs(nums, [], resultList, new Set());
  return resultList;
};
