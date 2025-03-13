/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x > 2 ** 31 - 1 || x < (-2) ** 31) {
    return 0;
  }
  const StringX = String(x);
  let newStringList = "";
  let startIndex = StringX.length - 1;
  let endIndex = 0;
  if (StringX[0] === "-") {
    newStringList += "-";
    endIndex += 1;
  }
  zeroAllow = false;
  while (!zeroAllow) {
    if (StringX[startIndex] !== 0) {
      zeroAllow = true;
    } else {
      startIndex -= 1;
    }
  }
  for (let i = startIndex; i >= endIndex; i--) {
    newStringList += StringX[i];
  }
  const numberic = Number(newStringList);
  if (numberic > 2 ** 31 - 1 || x < (-2) ** 31) {
    return 0;
  }
  return numberic;
};
console.log((-2) ** 31);
