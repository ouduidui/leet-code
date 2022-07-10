/**
 * 动态规划
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param grid
 * @returns
 */
export function cherryPickup(grid: number[][]): number {
  const len = grid.length
  const dp: number[][] = new Array(len).fill([])
    .map(() => new Array(len).fill(-Number.MAX_VALUE))
  dp[0][0] = grid[0][0]

  for (let i = 1; i < len * 2 - 1; i++) {
    for (let x1 = Math.min(i, len - 1); x1 >= Math.max(i - len + 1, 0); x1--) {
      for (let x2 = Math.min(i, len - 1); x2 >= x1; x2--) {
        const y1 = i - x1
        const y2 = i - x2
        if (grid[x1][y1] === -1 || grid[x2][y2] === -1) {
          dp[x1][x2] = -Number.MAX_VALUE
          continue
        }

        let res = dp[x1][x2] // 都往右

        if (x1 > 0)
          res = Math.max(res, dp[x1 - 1][x2]) // 往下，往右
        if (x2 > 0)
          res = Math.max(res, dp[x1][x2 - 1]) // 往右，往下
        if (x1 > 0 && x2 > 0)
          res = Math.max(res, dp[x1 - 1][x2 - 1]) // 都往下

        res += grid[x1][y1]
        // 避免重复摘同一个樱桃
        if (x2 !== x1)
          res += grid[x2][y2]

        dp[x1][x2] = res
      }
    }
  }

  return Math.max(dp[len - 1][len - 1], 0)
}
