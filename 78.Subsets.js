/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const dfs = ( n, curr, result, state, nums) => {
    result.push([...state]);
  
    for (let i = curr; i < n; i++) {
      state.push(nums[i]);
      dfs( n, i + 1, result, state, nums);
      state.pop();
    }
  };
  
  var subsets = function (nums) {
    let result = [];
    let n = nums.length;
  
    dfs( n, 0, result, [], nums);
  
    return result;
  };
  