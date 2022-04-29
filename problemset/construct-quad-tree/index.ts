import { Node } from '~/utils/quadTree'

/**
 * 递归
 * @desc 时间复杂度 O(N²logN)  空间复杂度 O(logN)
 * @param grid
 * @returns
 */
export function construct(grid: number[][]): Node | null {
  return dfs(grid, 0, 0, grid.length, grid.length)

  function dfs(
    gird: number[][],
    row1: number,
    col1: number,
    row2: number,
    col2: number,
  ): Node | null {
    let same = true

    // 这一部分是否均为 1 或均为 0
    for (let i = row1; i < row2; i++) {
      for (let j = col1; j < col2; j++) {
        if (grid[i][j] !== grid[row1][col1]) {
          same = false
          break
        }
      }
      if (!same) break
    }

    if (same)
      return new Node(grid[row1][col1] === 1, true)

    const ret = new Node(
      true,
      false,
      dfs(gird, row1, col1, (row1 + row2) >> 1, (col1 + col2) >> 1),
      dfs(gird, row1, (col1 + col2) >> 1, (row1 + row2) >> 1, col2),
      dfs(gird, (row1 + row2) >> 1, col1, row2, (col1 + col2) >> 1),
      dfs(gird, (row1 + row2) >> 1, (col1 + col2) >> 1, row2, col2),
    )

    return ret
  }
}

/**
 * 递归 + 二维前缀和优化
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param grid
 * @returns
 */
export function construct2(grid: number[][]): Node | null {
  const len = grid.length
  const pre = new Array(len + 1).fill([]).map(() => new Array(len + 1).fill(0))
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      pre[i][j]
      = pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1] + grid[i - 1][j - 1]
    }
  }

  return dfs(grid, pre, 0, 0, grid.length, grid.length)

  function dfs(
    gird: number[][],
    pre: number[][],
    row1: number,
    col1: number,
    row2: number,
    col2: number,
  ): Node | null {
    const total = getSum(pre, row1, col1, row2, col2)
    if (total === 0)
      return new Node(false, true)
    else if (total === (row2 - row1) * (col2 - col1))
      return new Node(true, true)

    const ret = new Node(
      true,
      false,
      dfs(gird, pre, row1, col1, (row1 + row2) >> 1, (col1 + col2) >> 1),
      dfs(gird, pre, row1, (col1 + col2) >> 1, (row1 + row2) >> 1, col2),
      dfs(gird, pre, (row1 + row2) >> 1, col1, row2, (col1 + col2) >> 1),
      dfs(gird, pre, (row1 + row2) >> 1, (col1 + col2) >> 1, row2, col2),
    )

    return ret
  }

  function getSum(pre: number[][], row1: number, col1: number, row2: number, col2: number) {
    return pre[row2][col2] - pre[row2][col1] - pre[row1][col2] + pre[row1][col1]
  }
}
