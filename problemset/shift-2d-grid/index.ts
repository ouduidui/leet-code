/**
 * 一维展开
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param grid
 * @param k
 * @returns
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length
  const n = grid[0].length
  const ret: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const idx = (i * n + j + k) % (m * n)
      ret[(idx / n) >> 0].splice(idx % n, 1, grid[i][j])
    }
  }

  return ret
}
