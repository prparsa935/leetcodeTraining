/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringX = String(x);
  const middle = (stringX.length - 1) / 2;
  if (stringX.length === 2) {
    if (stringX[0] !== stringX[1]) {
      return false;
    } else {
      return true;
    }
  }
  let leftindex = stringX.length % 2 === 0 ? Math.floor(middle) : middle - 1;
  let rightIndex =
    stringX.length % 2 === 0 ? Math.floor(middle) + 1 : middle + 1;
  while (leftindex >= 0 && rightIndex < stringX.length) {
    console.log(stringX[leftindex]);
    console.log(stringX[rightIndex]);
    if (stringX[leftindex] !== stringX[rightIndex]) {
      return false;
    }
    leftindex -= 1;
    rightIndex += 1;
  }
  return true;
};
console.log(isPalindrome(11));
