/**
 * 数学
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param grid
 * @returns
 */
export function projectionArea(grid: number[][]): number {
  const len = grid.length
  let xyArea = 0
  let yzArea = 0
  let xzArea = 0
  for (let i = 0; i < len; i++) {
    let yzHeight = 0
    let xzHeight = 0
    for (let j = 0; j < len; j++) {
      xyArea += grid[i][j] > 0 ? 1 : 0
      yzHeight = Math.max(yzHeight, grid[i][j])
      xzHeight = Math.max(xzHeight, grid[j][i])
    }
    yzArea += yzHeight
    xzArea += xzHeight
  }
  return xyArea + yzArea + xzArea
}
