removeElementsWithVal = (exList, valToRemove) => {
  for (let i in exList) {
    indexValue = exList[i];
    if (indexValue === valToRemove) {
      exList[i] = "_";
    }
  }
};
const exList = [2, 3, 2, 3];
const valToRemove = 2;
removeElementsWithVal(exList, valToRemove);
console.log(exList);
