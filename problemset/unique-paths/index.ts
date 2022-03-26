/**
 * 组合数学
 * @desc 时间复杂度 O(m) 空间复杂度 O(1)
 * @param m {number}
 * @param n {number}
 * @return number
 */
export function uniquePaths(m: number, n: number): number {
  let ans = 1
  for (let x = n, y = 1; y < m; x++, y++)
    ans = Math.floor((ans * x) / y)

  return ans
}

/**
 * 动态规划
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param m {number}
 * @param n {number}
 * @return number
 */
export function uniquePaths2(m: number, n: number): number {
  // 初始化
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++)
    dp[i][0] = 1

  for (let j = 0; j < n; j++)
    dp[0][j] = 1

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  }

  return dp[m - 1][n - 1]
}
