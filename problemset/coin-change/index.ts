/**
 * 深度优先搜索 + 记忆化搜索
 * @desc 时间复杂度 O(SN)  空间复杂度 O(S)
 * @param coins
 * @param amount
 * @returns
 */
export function coinChange(coins: number[], amount: number): number {
  if (amount < 1) return 0
  return dfs(new Array(amount).fill(0), coins, amount)

  function dfs(memo: number[], coins: number[], amount: number): number {
    if (amount < 0) return -1

    if (amount === 0) return 0

    if (memo[amount - 1] !== 0) return memo[amount - 1]

    let min = Number.MAX_VALUE
    for (let i = 0; i < coins.length; i++) {
      const res = dfs(memo, coins, amount - coins[i])
      if (res >= 0 && res < min)
        min = res + 1
    }

    memo[amount - 1] = (min === Number.MAX_VALUE ? -1 : min)
    return memo[amount - 1]
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(SN)  空间复杂度 O(S)
 * @param coins
 * @param amount
 * @returns
 */
export function coinChange2(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i)
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}
