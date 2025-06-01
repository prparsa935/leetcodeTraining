/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 1) {
      return 1;
    }
    let firstPrev = 1;
    let secondprev = 1;
    let curr = 0;
    for (let i = 2; i <= n; i++) {
      curr = firstPrev + secondprev;
      firstPrev = secondprev;
      secondprev = curr;
    }
    return curr;
  };
  