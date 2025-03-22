/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = Math.floor(digits[digits.length - 1] / 10);
  digits[digits.length - 1] = digits[digits.length - 1] % 10;
  for (let i = digits.length - 2; i >= 0; i--) {
    const val = carry + digits[i];
    digits[i] = val % 10;
    carry = Math.floor(val / 10);
    if (!carry) {
      return digits;
    }
  }
  return [carry, digits.slice(1, digits.length)];
};
