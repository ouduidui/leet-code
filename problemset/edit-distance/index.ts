/**
 * 动态规划
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param word1
 * @param word2
 */
export function minDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length

  // 当有一个字符为空串
  if (m * n === 0) return n + m

  const dp: number[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 获取最小距离
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1),
      )
    }
  }

  return dp[m][n]
}
