/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.split([" "]).join("");
  let lastIndex = s.length - 1;
  let firstIndex = 0;
  while (lastIndex > firstIndex) {
    if (s[lastIndex] !== s[firstIndex]) {
      return false;
    }
    lastIndex--
    firstIndex++
  }
  return true;
};
