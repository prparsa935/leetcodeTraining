/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxDepth = 0;
  let curentDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      curentDepth += 1;
      if (curentDepth > maxDepth) {
        maxDepth = curentDepth;
      }
    }
    if (s[i] === ")") {
      curentDepth -= 1;
    }
  }
  return maxDepth;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
