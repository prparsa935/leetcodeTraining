const a = [1, 2, 3, 4];
const b = [2, 2, 7, 10, 12];
let newArray = [];

mergeSortedArrays = (a, b, newArray) => {
  let aIndex = 0;
  let bIndex = 0;

  for (let i = 0; i < a.length + b.length; i++) {
    console.log(i);
    const aEl = a[aIndex];
    const bEl = b[bIndex];
    if (bIndex == b.length) {
      newArray.push(...a.slice(aIndex, a.length));

      return;
    }
    if (aIndex == a.length) {
      newArray.push(...b.slice(bIndex, b.length));

      return;
    }
    if (aEl > bEl) {
      newArray[i] = bEl;
      bIndex += 1;
    } else if (aEl <= bEl) {
      newArray[i] = aEl;
      aIndex += 1;
    }
  }
};
mergeSortedArrays(a, b, newArray);

console.log(newArray);
