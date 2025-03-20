/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  let index = s.length - 1;
  let val = null;
  if (s.length <= 1) {
    return s.length;
  }
  while (true) {
    val = s[index];
    if (val !== " ") {
      break;
    }
    index--;
  }

  while (true) {
    val = s[index];
    if (val !== " ") {
      count++;
    } else {
      break;
    }
    index--;
  }
  return count;
};
