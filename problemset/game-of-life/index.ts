/**
 * 使用额外的状态
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param board
 */
export function gameOfLife(board: number[][]): void {
  const dirs = [
    [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1],
  ]

  const m = board.length
  const n = board[0].length
  const toLiveFlag = 2
  const toDeadFlag = 3
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0
      for (const dir of dirs) {
        const [x, y] = [i + dir[0], j + dir[1]]
        if (
          x >= 0
          && y >= 0
          && x < m
          && y < n
          && (board[x][y] === 1 || board[x][y] === toDeadFlag)
        )
          count++
      }
      const val = board[i][j]
      if (val === 1 && (count < 2 || count > 3))
        board[i][j] = toDeadFlag
      else if (val === 0 && count === 3)
        board[i][j] = toLiveFlag
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = board[i][j]
      if (val === toDeadFlag) board[i][j] = 0
      if (val === toLiveFlag) board[i][j] = 1
    }
  }
}
