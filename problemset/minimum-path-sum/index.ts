/**
 * 动态规划
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param grid
 */
export function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  // 深拷贝 grid
  const dp = [...grid].map(item => [...item])

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 && y !== 0)
        dp[x][y] += dp[x][y - 1]
      else if (x !== 0 && y === 0)
        dp[x][y] += dp[x - 1][y]
      else if (x !== 0 && y !== 0)
        dp[x][y] = Math.min(dp[x][y] + dp[x - 1][y], dp[x][y] + dp[x][y - 1])
    }
  }

  return dp[m - 1][n - 1]
}
