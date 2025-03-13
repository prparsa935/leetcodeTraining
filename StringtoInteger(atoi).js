/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  let sign = "";
  if (s.length === 0) {
    return result;
  }

  for (let i = 0; i < s.length; i++) {
    let value = s[i];

    if (isNaN(Number(value))) {
      if ((value === "-" || value === "+") && result !== 0) {
        sign = value;
      } else if (value === " ") {
        continue;
      } else {
        return Number(sign + String(result));
      }
    } else {
      if (result !== 0) {
        result = Number(String(result) + String(value));
      }
      if (result === 0) {
        result = Number(String(value));
      }
    }
  }
  return Number(sign + String(result));
};
console.log(myAtoi("   -042"));
