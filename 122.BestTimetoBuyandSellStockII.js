/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = Array(prices.length).fill(0);
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < i; j++) {
      if (prices[i] > prices[j] && dp[j] + prices[i] - prices[j] > dp[i]) {
        dp[i] = dp[j] + prices[i] - prices[j];
      }
    }
    if (maxProfit < dp[i]) {
      maxProfit = dp[i];
    }
  }
  return maxProfit;
};
