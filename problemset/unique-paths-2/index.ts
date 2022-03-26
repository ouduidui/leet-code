/**
 * 动态规划
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param obstacleGrid {number[][]}
 * @return number
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let x = 0; x < m; x++)
    if (obstacleGrid[x][0] !== 1) dp[x][0] = 1

  for (let y = 0; y < n; y++)
    if (obstacleGrid[0][y] !== 1) dp[0][y] = 1

  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++)
      if (obstacleGrid[x][y] !== 1) dp[x][y] = dp[x - 1][y] + dp[x][y - 1]
  }

  return dp[m - 1][n - 1]
}

/**
 * 动态规划 + 滚动数组
 * @desc 时间复杂度 O(MN)  空间复杂度 O(M)
 * @param obstacleGrid {number[][]}
 * @return number
 */
export function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // 滚动数组
  const f: number[] = new Array(n).fill(0)

  f[0] = obstacleGrid[0][0] === 0 ? 1 : 0

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (obstacleGrid[x][y] === 1) {
        f[y] = 0
        continue
      }

      if (y - 1 >= 0 && obstacleGrid[x][y - 1] === 0)
        f[y] += f[y - 1]
    }
  }

  return f[n - 1]
}
