/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target); // مقدار منفی مهم نیست چون جهت حرکت را انتخاب می‌کنیم
  let sum = 0,
    k = 0;

  while (sum < target || (sum - target) % 2 !== 0) {
    k++;
    console.log(sum);
    sum += k;
  }

  return k;
};
console.log(reachNumber(4));
