/**
 * 动态规划
 * @desc 时间复杂度 O(N min(N, k)) 空间复杂度 O(min(N, k))
 * @param k
 * @param prices
 */
export function maxProfit(k: number, prices: number[]): number {
  const len = prices.length
  if (len === 0) return 0

  // k只能ken/2
  k = Math.min(k, len >> 1)

  // 对于 prices[i] 中的价格而言，进行恰好 i 笔交易，并且当前手上持有一支股票，这种情况下的最大利润
  const buy: number[] = new Array(k + 1).fill(-Number.MAX_VALUE)
  buy[0] = -prices[0]

  // 用 sell[i] 表示恰好进行 i 笔交易，并且当前手上不持有股票，这种情况下的最大利润
  const sell: number[] = new Array(k + 1).fill(0)

  // 遍历所有天数
  for (let i = 1; i < len; i++) {
    // 更新第一次买入的价格
    buy[0] = Math.max(buy[0], sell[0] - prices[i])
    // 遍历购买次数
    for (let j = 1; j <= k; j++) {
      // 更新第j次买入的价格
      buy[j] = Math.max(buy[j], sell[j] - prices[i])
      // 更新第j次卖出的价格
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i])
    }
  }

  return Math.max(...sell)
}
