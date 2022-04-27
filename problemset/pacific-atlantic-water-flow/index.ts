/**
 * 深度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param heights
 * @returns
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill([]).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill([]).map(() => new Array(n).fill(false))

  for (let i = 0; i < m; i++)
    dfs(i, 0, pacific)

  for (let i = 1; i < n; i++)
    dfs(0, i, pacific)

  for (let i = 0; i < m; i++)
    dfs(i, n - 1, atlantic)

  for (let i = 0; i < n - 1; i++)
    dfs(m - 1, i, atlantic)

  const result: number[][] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j])
        result.push([i, j])
    }
  }

  return result

  function dfs(row: number, col: number, ocean: boolean[][]) {
    if (ocean[row][col]) return

    ocean[row][col] = true
    for (const dir of dirs) {
      const newRow = row + dir[0]
      const newCol = col + dir[1]
      if (
        newRow >= 0
        && newCol >= 0
        && newRow < m
        && newCol < n
        && heights[newRow][newCol] >= heights[row][col]
      )
        dfs(newRow, newCol, ocean)
    }
  }
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param heights
 * @returns
 */
export function pacificAtlantic2(heights: number[][]): number[][] {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill([]).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill([]).map(() => new Array(n).fill(false))

  for (let i = 0; i < m; i++)
    bfs(i, 0, pacific)

  for (let i = 1; i < n; i++)
    bfs(0, i, pacific)

  for (let i = 0; i < m; i++)
    bfs(i, n - 1, atlantic)

  for (let i = 0; i < n - 1; i++)
    bfs(m - 1, i, atlantic)

  const result: number[][] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j])
        result.push([i, j])
    }
  }

  return result

  function bfs(row: number, col: number, ocean: boolean[][]) {
    if (ocean[row][col]) return

    ocean[row][col] = true

    const queue = [[row, col]]
    while (queue.length) {
      const [r, c] = queue.pop()!
      for (const dir of dirs) {
        const newRow = r + dir[0]
        const newCol = c + dir[1]
        if (
          newRow >= 0
        && newCol >= 0
        && newRow < m
        && newCol < n
        && heights[newRow][newCol] >= heights[r][c]
        && !ocean[newRow][newCol]
        ) {
          ocean[newRow][newCol] = true
          queue.unshift([newRow, newCol])
        }
      }
    }
  }
}
