/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") {
    return 0;
  }
  let firstPrev = 1;
  let secondPrev = 1;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
    let part = Number(s.slice(i - 1, i + 1));
    console.log(part);

    if (part && part > 10 && part <= 26) {
      curr = firstPrev + secondPrev;
    } else if (part % 10 === 0) {
      curr = secondPrev;
    } else {
      curr = firstPrev;
    }
    secondPrev = firstPrev;
    firstPrev = curr;
  }
  return curr;
};
