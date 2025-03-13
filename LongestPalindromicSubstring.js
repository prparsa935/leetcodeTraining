/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxVal = s[0];
    let maxLenght = 1;

    for (let i = 0; i < s.length; i++) {
      let oddleftPointer = i - 1;
      let oddrightPointer = i + 1;
      while (
        oddleftPointer >= 0 &&
        oddrightPointer < s.length &&
        s[oddleftPointer] === s[oddrightPointer]
      ) {
        const subString = s.substring(oddleftPointer, oddrightPointer + 1);
        if (maxLenght < subString.length) {
          maxLenght = subString.length;
          maxVal = subString;
        }
        oddleftPointer -= 1;
        oddrightPointer += 1;
      }
      let evenleftPointer = i;
      let evenrightPointer = i + 1;
      while (
        evenleftPointer >= 0 &&
        evenrightPointer < s.length &&
        s[evenleftPointer] === s[evenrightPointer]
      ) {
        const subString = s.substring(evenleftPointer, evenrightPointer + 1);
        if (maxLenght < subString.length) {
          maxLenght = subString.length;
          maxVal = subString;
        }
        evenleftPointer -= 1;
        evenrightPointer += 1;
      }
    }
    return maxVal;

};
console.log(longestPalindrome("cbbd"));
