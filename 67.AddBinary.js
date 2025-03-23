/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let carry = 0;
  let result = "";

  while (aIndex >= 0 || bIndex >= 0 || carry) {
    let aVal = aIndex >= 0 ? parseInt(a[aIndex]) : 0;
    let bVal = bIndex >= 0 ? parseInt(b[bIndex]) : 0;
    let val = aVal + bVal + carry;
    result = (val % 2) + result;
    carry = Math.floor(val / 2);
    aIndex--;
    bIndex--;
  }
  return result;
};
