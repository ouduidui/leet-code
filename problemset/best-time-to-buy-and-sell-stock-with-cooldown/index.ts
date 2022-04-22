/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 * @returns
 */
export function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0

  const len = prices.length
  let f0 = -prices[0]
  let f1 = 0
  let f2 = 0

  for (let i = 1; i < len; i++)
    [f0, f1, f2] = [Math.max(f0, f2 - prices[i]), f0 + prices[i], Math.max(f1, f2)]

  return Math.max(f1, f2)
}
