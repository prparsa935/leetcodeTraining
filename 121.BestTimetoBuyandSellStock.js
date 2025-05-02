/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let bestprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    const val = prices[i];
    if (val < buy) {
      buy = val;
    }
    if (val > buy && val - buy > bestprofit) {
      bestprofit = val - buy;
    }
  }
  return bestprofit;
};
