/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let index = 0;
  let newMergedInterval = newInterval;
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  while (index < intervals.length) {
    const val = intervals[index];
    if (newMergedInterval[0] >= val[0]) {
      if (newMergedInterval[0] <= val[1]) {
        newMergedInterval = [val[0], Math.max(val[1], newMergedInterval[1])];
      } else {
        result.push(val);
      }
    } else {
      if (newMergedInterval[1] >= val[0]) {
        newMergedInterval = [
          newMergedInterval[0],
          Math.max(val[1], newMergedInterval[1]),
        ];
      } else {
        result.push(val);
      }
    }
    index++;
  }
  console.log(newMergedInterval);
  result.push(newMergedInterval);
  result.sort((a, b) => a[0] - b[0]);
  return result;
};
