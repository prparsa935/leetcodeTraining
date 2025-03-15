/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
recursivePow = (x, n) => {
  if (n <= 1) {
    return x;
  }
  if (n % 2 === 0) {
    let newN = n / 2;
    const powResult = recursivePow(x, newN);
    return powResult * powResult;
  } else {
    let newN = (n - 1) / 2;
    const powResult = recursivePow(x, newN);
    return powResult * powResult * x;
  }
};
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return recursivePow(x, n);
  } else {
    return 1 / recursivePow(x, n);
  }
};
myPow();
