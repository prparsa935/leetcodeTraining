/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let i = 0;
  while (i < intervals.length) {
    let mergedInterval = intervals[i];
    i++;
    while (i < intervals.length) {
      if (mergedInterval[1] >= intervals[i][0]) {
        mergedInterval[1] = Math.max(intervals[i][1], mergedInterval[1]);
        i++;
      } else {
        break;
      }
      
    }
    result.push(mergedInterval);
  }
  return result;
};
