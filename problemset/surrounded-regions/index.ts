/**
 * 深度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param board
 */
export function solve(board: string[][]): void {
  const m = board.length
  if (m === 0) return
  const n = board[0].length
  if (n === 0) return

  // 从最外圈向内寻找
  let i
  for (i = 0; i < m; i++) {
    dfs(board, i, 0)
    dfs(board, i, n - 1)
  }

  for (i = 1; i < n - 1; i++) {
    dfs(board, 0, i)
    dfs(board, m - 1, i)
  }

  // 将O换成X，将A换成O
  for (i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'A')
        board[i][j] = 'O'
      else if (board[i][j] === 'O')
        board[i][j] = 'X'
    }
  }

  function dfs(board: string[][], x: number, y: number) {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') return
    board[x][y] = 'A'
    dfs(board, x + 1, y)
    dfs(board, x - 1, y)
    dfs(board, x, y + 1)
    dfs(board, x, y - 1)
  }
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param board
 */
export function solve2(board: string[][]): void {
  const m = board.length
  if (m === 0) return
  const n = board[0].length
  if (n === 0) return

  const queue: [number, number][] = []
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      queue.unshift([i, 0])
      board[i][0] = 'A'
    }

    if (board[i][n - 1] === 'O') {
      queue.unshift([i, n - 1])
      board[i][n - 1] = 'A'
    }
  }
  for (let i = 1; i < n - 1; i++) {
    if (board[0][i] === 'O') {
      queue.unshift([0, i])
      board[0][i] = 'A'
    }

    if (board[m - 1][i] === 'O') {
      queue.unshift([m - 1, i])
      board[m - 1][i] = 'A'
    }
  }

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  while (queue.length) {
    const [x, y] = queue.pop()!
    for (const dir of dirs) {
      const mx = x + dir[0]
      const my = y + dir[1]
      if (mx < 0 || mx >= m || my < 0 || my >= n || board[mx][my] !== 'O')
        continue

      queue.unshift([mx, my])
      board[mx][my] = 'A'
    }
  }

  // 将O换成X，将A换成O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'A')
        board[i][j] = 'O'
      else if (board[i][j] === 'O')
        board[i][j] = 'X'
    }
  }
}
