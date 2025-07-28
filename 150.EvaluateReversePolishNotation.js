/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    console.log(stack);
    let curr = tokens[i];
    if (Number(curr)) {
      stack.push(Number(curr));
    } else {
      let num2 = stack.pop();
      let num1 = stack.pop();

      if (curr === "+") {
        stack.push(num1 + num2);
      } else if (curr === "*") {
        stack.push(num1 * num2);
      } else if (curr === "-") {
        stack.push(num1 - num2);
      } else if (curr === "/") {
        stack.push(num1 / num2);
      }
    }
  }
  console.log(stack);
  return Math.floor(stack[0]);
};
