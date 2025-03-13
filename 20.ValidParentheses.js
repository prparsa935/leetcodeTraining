/**
 * @param {string} s
 * @return {boolean}
 */
const dic = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let value = s[i];
    if (value === "(" || value === "[" || value === "{") {
      stack.push(value);
    } else {
      let openpar = stack.pop();
      if (!openpar) {
        return false;
      }

  
      if (!(dic[openpar] === value)) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
console.log(isValid("{]"));
