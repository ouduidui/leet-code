/**
 * 动态规划
 * @desc 时间复杂度 O(N)  孔家分支点
 * @param dungeon
 */
export function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length
  const n = dungeon[0].length
  const dp: number[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER))

  // 初始化结局分数为1
  dp[m][n - 1] = dp[m - 1][n] = 1

  // 从后往前推算
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 获取下一步的最低分数
      const min = Math.min(dp[i + 1][j], dp[i][j + 1])
      // 根据下一步的分数，换算到当前的分数，如果小于1的话，就重置为1
      dp[i][j] = Math.max(min - dungeon[i][j], 1)
    }
  }

  return dp[0][0]
}
