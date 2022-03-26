/**
 * 模拟
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param grid
 */
export function findBall(grid: number[][]): number[] {
  const len = grid[0].length
  const res = new Array(len).fill(-1)
  for (let i = 0; i < len; i++) {
    let col = i // 获取球的初始列
    // 遍历每行
    for (const row of grid) {
      const dir = row[col]
      col += dir // 移动球
      if (col < 0 || col === len || row[col] !== dir /* V形 */) {
        col = -1
        break
      }
    }
    // 到达底部
    if (col >= 0)
      res[i] = col
  }

  return res
}
