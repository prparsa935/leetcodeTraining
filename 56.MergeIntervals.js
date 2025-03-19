/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let i = 0;
    let result = [];
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    while (i < intervals.length) {
        let prossesInterval = intervals[i];

        i++;
        if (i === intervals.length) {
            result.push(prossesInterval);
        }
        while (i < intervals.length) {
            let currentInterval = intervals[i];
            if (currentInterval[0] <= prossesInterval[1]) {
                prossesInterval = [
                    prossesInterval[0],
                    Math.max(currentInterval[1], prossesInterval[1]),

                ];
                if (i === intervals.length - 1) {
                    result.push(prossesInterval);
                }
                i++;
            } else {
                result.push(prossesInterval);
                break;
            }
        }
    }
    return result;
};
