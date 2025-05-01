/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let containerList = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    let list = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        list.push(1);
      } else {
        list.push(containerList[i - 1][j - 1] + containerList[i - 1][j]);
      }
    }
    containerList.push(list);
  }
  return containerList[containerList.length - 1];
};
