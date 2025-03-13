// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// const dfs = (
//   candidates,
//   selectedCandidates,
//   startIndex,
//   target,
//   resultMap,
//   sum
// ) => {
//   console.log(selectedCandidates);
//   if (sum > target) {
//     return;
//   }
//   if (sum === target) {
//     resultMap.set([...selectedCandidates], [...selectedCandidates]);
//     return;
//   }
//   for (let i = startIndex; i < candidates.length; i++) {
//     let selectedCandidate = candidates[i];
//     sum += selectedCandidate;
//     selectedCandidates.push(selectedCandidate);
//     dfs(candidates, selectedCandidates, i, target, resultMap, sum);

//     sum -= selectedCandidate;
//     selectedCandidates.pop();
//   }
// };
// var combinationSum = function (candidates, target) {
//   let resultMap = new Map();
//   let resultList = [];
//   dfs(candidates, [], 0, target, resultMap, 0);
//   resultMap.forEach((value) => {
//     resultList.push(value);
//   });
//   console.log(resultMap);
//   return resultList;
// };
// combinationSum([2, 3, 6, 7], 7);
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const dfs = (
  candidates,
  selectedCandidates,
  startIndex,
  target,
  resultMap,
  sum
) => {
  console.log(selectedCandidates);
  if (sum > target) {
    return;
  }
  if (sum === target) {
    resultMap.set([...selectedCandidates], [...selectedCandidates]);
    return;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    if (candidates[i] === candidates[i - 1] && startIndex !== i) {
      continue;
    }
    let selectedCandidate = candidates[i];
    sum += selectedCandidate;
    selectedCandidates.push(selectedCandidate);
    dfs(candidates, selectedCandidates, i + 1, target, resultMap, sum);

    sum -= selectedCandidate;
    selectedCandidates.pop();
  }
};
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort();
  let resultMap = new Map();
  let resultList = [];
  dfs(candidates, [], 0, target, resultMap, 0);
  resultMap.forEach((value) => {
    resultList.push(value);
  });
  console.log(resultMap);
  return resultList;
};
