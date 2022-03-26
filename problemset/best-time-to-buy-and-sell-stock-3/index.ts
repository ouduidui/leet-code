/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  const len = prices.length
  let buy1 = -prices[0] // 第一次入股
  let sell1 = 0 // 卖掉第一支股票
  let buy2 = -prices[0] // 第二次入股
  let sell2 = 0 // 卖掉第二支股票

  for (let i = 0; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i])
    sell1 = Math.max(sell1, buy1 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])
    sell2 = Math.max(sell2, buy2 + prices[i])
  }

  return sell2
}
