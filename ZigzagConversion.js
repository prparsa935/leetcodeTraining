/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let newStringList = [];

  newStringList[0] = s[0];
  let goingdown = true;
  newStringListPointer = 1;
  for (let i = 1; i < s.length; i++) {
    console.log(newStringList);
    if (newStringList[newStringListPointer]) {
      newStringList[newStringListPointer] += s[i];
    } else {
      newStringList[newStringListPointer] = s[i];
    }
    if (newStringListPointer % (numRows - 1) === 0) {
      goingdown = goingdown ? false : true;
    }
    if (goingdown) {
      newStringListPointer += 1;
    } else {
      newStringListPointer -= 1;
    }
  }
  console.log(newStringList);
  let resultString = newStringList.join("");

  return resultString;
};
console.log(convert("fasfsagasg", 3));
