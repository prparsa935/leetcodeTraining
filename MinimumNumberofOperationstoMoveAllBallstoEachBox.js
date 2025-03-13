/**
 * @param {string} boxes
 * @return {number[]}
 */
// brute force
// var minOperations = function (boxes) {
//   let resultList = new Array(boxes.length).fill(0);

//   for (let i = 0; i < boxes.length; i++) {
//     let box = boxes[i];
//     if (Number(box)) {
//       for (let j = 0; j < boxes.length; j++) {
//         resultList[j] += Math.abs(j - i);
//       }
//     }
//   }
//   return resultList;
// };
// console.log(minOperations("00001"));
var minOperations = function (boxes) {
  let resultList = Array(boxes.length).fill(0);
  let leftPointer = 0;
  let rightPointer = boxes.length - 1;
  let leftC = 0;
  let rightC = 0;
  let rightD = 0;
  let leftD = 0;
  for (let i = 0; i < boxes.length; i++) {
    resultList[leftPointer] += leftD;
    if (Number(boxes[leftPointer]) === 1) {
      leftC += 1;
    }
    resultList[rightPointer] += rightD;
    if (Number(boxes[rightPointer]) === 1) {
      rightC += 1;
    }
    rightD += rightC;
    leftD += leftC;
    leftPointer += 1;
    rightPointer -= 1;
  }
  return resultList;
};
console.log(minOperations("11001"));
