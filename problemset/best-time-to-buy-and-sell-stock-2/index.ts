/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  const len = prices.length
  const dp = new Array(len).fill([]).map(() => new Array(2).fill(0))
  // dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润
  dp[0][0] = 0
  // dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0] /* 保持不买股票 */,
      dp[i - 1][1] + prices[i], /* 把手上的股票卖了 */
    )
    dp[i][1] = Math.max(
      dp[i - 1][1] /* 保持不卖股票 */,
      dp[i - 1][0] - prices[i], /* 入股 */
    )
  }
  return dp[len - 1][0]
}

/**
 * 动态规划 + 优化空间
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit2(prices: number[]): number {
  const len = prices.length
  // 表示第 i 天交易完后手里没有股票的最大利润
  let dp1 = 0
  // 表示第 i 天交易完后手里持有一支股票的最大利润
  let dp2 = -prices[0]

  for (let i = 1; i < len; i++) {
    [dp1, dp2] = [
      Math.max(dp1 /* 保持不买股票 */, dp2 + prices[i] /* 把手上的股票卖了 */),
      Math.max(dp2 /* 保持不卖股票 */, dp1 - prices[i] /* 入股 */),
    ]
  }
  return dp1
}

/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit3(prices: number[]): number {
  let ans = 0
  const len = prices.length
  for (let i = 1; i < len; i++)
    ans += Math.max(0, prices[i] - prices[i - 1])

  return ans
}
