/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let dfs = (nums, state, resultList, visitedIndexes) => {
  if (state.length === nums.length) {
    resultList.push([...state]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visitedIndexes.has(i)) {
      continue;
    }
    visitedIndexes.add(i);
    state.push(nums[i]);
    dfs(nums, state, resultList, visitedIndexes);
    state.pop();
    visitedIndexes.delete(i);
  }
};
var permute = function (nums) {
  let resultList = [];
  dfs(nums, [], resultList, new Set());
  return resultList;
};
