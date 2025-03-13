/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let leftindex = 0;
  let rightIndex = 1;
  let max = 1;
  if (s.length === 0) {
    return 0;
  }

  while (rightIndex < s.length) {
    for (let i = leftindex; i < rightIndex; i++) {
      if (s[i] === s[rightIndex]) {
        leftindex = i + 1;
      }
    }
    rightIndex += 1;
    if (rightIndex - leftindex > max) {
      max = rightIndex - leftindex;
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring("abb"));
