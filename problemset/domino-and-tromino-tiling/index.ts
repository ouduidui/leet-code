/**
 * 动态规划
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param n
 * @returns
 */
export function numTilings(n: number): number {
  const mod = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0))
  dp[0][3] = 1
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3]
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % mod
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % mod
  }
  return dp[n][3]
}
