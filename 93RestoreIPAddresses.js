/**
 * @param {string} s
 * @return {string[]}
 */
const bT = (startIndex, s, result, state) => {
  if (startIndex === s.length && state.length === 4) {
    result.push(state.join("."));
    return;
  }
  if (startIndex === s.length || state.length === 4) {
    return;
  }

  // if (s[startIndex] === "0") {
  //     return;
  // }
  for (let i = 1; i <= 3; i++) {
    const slice = s.slice(startIndex, startIndex + i);
    if (Number(slice) > 255) {
      break;
    }
    if (slice.length > 1 && slice[0] === 0) {
      break;
    }
    state.push(slice);
    bT(startIndex + i, s, result, state);
    state.pop();
  }
};
var restoreIpAddresses = function (s) {
  let result = [];
  bT(0, s, result, []);
  return result;
};
