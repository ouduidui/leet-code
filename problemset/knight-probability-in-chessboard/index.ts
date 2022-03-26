/**
 * 动态规划
 * @desc 时间复杂度 O(kN^2)  空间复杂度 O(kN^2)
 * @param n
 * @param k
 * @param row
 * @param column
 */
export function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number,
): number {
  // 八种走位
  const dirs = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ]
  const dp: number[][][] = new Array(k + 1)
    .fill([])
    .map(() => new Array(n).fill([]).map(() => new Array(n).fill(0)))

  // 步数
  for (let step = 0; step <= k; step++) {
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (step === 0) {
          dp[step][x][y] = 1
        }
        else {
          for (const dir of dirs) {
            // 获取下一步的坐标
            const newX = x + dir[0]
            const newY = y + dir[1]
            // 通过逆推的方式，如果[newX, newY]在棋盘上，则[x, y]就有八分之一的概率不会出界
            if (newX >= 0 && newX < n && newY >= 0 && newY < n)
              dp[step][x][y] += dp[step - 1][newX][newY] / 8
          }
        }
      }
    }
  }

  return dp[k][row][column]
}
