/**
 * 记忆化深度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param matrix
 * @returns
 */
export function longestIncreasingPath(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const m = matrix.length
  const n = matrix[0].length
  const memo = new Array(m).fill([]).map(() => new Array(n).fill(0))
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      ans = Math.max(ans, dfs(matrix, i, j, m, n, memo))
  }
  return ans

  function dfs(
    matrix: number[][],
    row: number,
    col: number,
    m: number,
    n: number,
    memo: number[][],
  ): number {
    if (memo[row][col] === 0) {
      memo[row][col]++

      for (const dir of dirs) {
        const newRow = row + dir[0]
        const newCol = col + dir[1]
        if (
          newRow >= 0
        && newRow < m
         && newCol >= 0
         && newCol < n
         && matrix[newRow][newCol] > matrix[row][col]
        ) {
          // 保存到达该位置的最长递增路径长度
          memo[row][col] = Math.max(
            memo[row][col],
            dfs(matrix, newRow, newCol, m, n, memo) + 1,
          )
        }
      }
    }

    return memo[row][col]
  }
}

/**
 * 拓扑排序
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param matrix
 * @returns
 */
export function longestIncreasingPath2(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const m = matrix.length
  const n = matrix[0].length
  // 记录每个单元格周围有几个比自己大的单元格
  const outdegrees = new Array(m).fill([]).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const dir of dirs) {
        const newRow = i + dir[0]
        const newCol = j + dir[1]
        if (
          newRow >= 0
          && newRow < m
          && newCol >= 0
          && newCol < n
          && matrix[newRow][newCol] > matrix[i][j]
        )
          outdegrees[i][j]++
      }
    }
  }

  // 将出度为0的单元格放入队列中
  const queue: [number, number][] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (outdegrees[i][j] === 0)
        queue.unshift([i, j])
    }
  }

  let ans = 0
  while (queue.length) {
    ans++

    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.pop()!

      for (const dir of dirs) {
        const newRow = row + dir[0]
        const newCol = col + dir[1]
        if (
          newRow >= 0
          && newRow < m
          && newCol >= 0
          && newCol < n
          && matrix[newRow][newCol] < matrix[row][col]
        ) {
          outdegrees[newRow][newCol]--
          if (outdegrees[newRow][newCol] === 0)
            queue.unshift([newRow, newCol])
        }
      }
    }
  }

  return ans
}
