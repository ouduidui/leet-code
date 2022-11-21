/**
 * 动态规划
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N²)
 * @param n
 * @returns
 */
export function soupServings(n: number): number {
  n = Math.ceil(n / 25)
  if (n >= 179)
    return 1.0

  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 0.5
  for (let i = 1; i <= n; i++)
    dp[0][i] = 1.0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++)
      dp[i][j] = (dp[Math.max(0, i - 4)][j] + dp[Math.max(0, i - 3)][Math.max(0, j - 1)] + dp[Math.max(0, i - 2)][Math.max(0, j - 2)] + dp[Math.max(0, i - 1)][Math.max(0, j - 3)]) / 4.0
  }
  return dp[n][n]
}
