/**
 * @param {number} n
 * @return {string[]}
 */

let dfs = (stack, openPCount, resultMap, state, n) => {
  console.log(state);
  if (state.length === n * 2) {
    resultMap.set(state, state);
    return;
  }
  let allowedP = [];

  let lastStackVal = stack[stack.length - 1];
  if (openPCount >= n || lastStackVal === "(") {
    allowedP.push(")");
  }
  if (openPCount < n) {
    allowedP.push("(");
  }

  for (let i = 0; i < allowedP.length; i++) {
    let localStack = JSON.parse(JSON.stringify(stack));
    let localOpenPCount = openPCount;
    let localState = state;
    if (allowedP[i] === ")") {
      localStack.pop();
      localState += ")";
    }
    if (allowedP[i] === "(") {
      localStack.push("(");
      localOpenPCount += 1;
      localState += "(";
    }
    console.log(allowedP);
    dfs(localStack, localOpenPCount, resultMap, localState, n);
  }
};
var generateParenthesis = function (n) {
  let resultMap = new Map();
  let resultList = [];

  dfs([], 0, resultMap, "", n);
  resultMap.forEach((val) => {
    resultList.push(val);
  });

  return resultList;
};
generateParenthesis(3);
