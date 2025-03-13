/**
 * @param {string} digits
 * @return {string[]}
 */
const dic = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
let dfs = (digits, footStep, path, resultList) => {
  let digitsLen = digits.length;
  if (footStep >= digitsLen) {
    resultList.push(path);
    return;
  }
  let digit = digits[footStep];
  let letters = dic[digit];
  for (let i = 0; i < letters.length; i++) {
    dfs(digits, footStep + 1, path + letters[i], resultList);
  }
};
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let resultList = [];
  dfs(digits, 0, "", resultList);
  return resultList;
};
letterCombinations([2, 3, 4]);
