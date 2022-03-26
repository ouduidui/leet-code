/**
 * 深度优先搜索
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param grid
 */
export function numEnclaves(grid: number[][]): number {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const m = grid.length
  const n = grid[0].length
  const visited: boolean[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(false))

  // 遍历边界所有单元格，看看能够触及到内圈的陆地单元格
  // 遍历第一列和最后一列
  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0)
    dfs(grid, i, n - 1)
  }

  // 遍历第一行和最后一行
  for (let j = 1; j < n - 1; j++) {
    dfs(grid, 0, j)
    dfs(grid, m - 1, j)
  }

  // 将gird和visited每个单元格进行异或操作
  let enclaves = 0
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++)
      if (grid[i][j] === 1 && !visited[i][j]) enclaves++
  }

  return enclaves

  function dfs(grid: number[][], row: number, col: number) {
    if (
      /* 超出边界 */
      row < 0
      || row >= m
      || col < 0
      || col >= n
      /* 海洋单元格 */
      || grid[row][col] === 0
      /* 走过的单元格 */
      || visited[row][col]
    )
      return

    visited[row][col] = true
    for (const dir of dirs)
      dfs(grid, row + dir[0], col + dir[1])
  }
}
