/**
 Do not return anything, modify board in-place instead.
 */

/**
 * 回溯
 * @param board {string[][]}
 * @return {void}
 */
export function solveSudoku(board: string[][]): void {
  backTracking()

  function backTracking(): boolean {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue
        for (let val = 1; val <= 9; val++) {
          const valStr = `${val}`
          if (isValid(i, j, valStr, board)) {
            board[i][j] = valStr

            if (backTracking())
              return true

            board[i][j] = '.'
          }
        }
        return false
      }
    }
    return true
  }

  function isValid(
    row: number,
    col: number,
    val: string,
    board: string[][],
  ): boolean {
    // 判断行有没有重复
    if (board[row].includes(val))
      return false

    // 判断列有没有重复
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === val)
        return false
    }

    // 判断九宫格有没有重复
    const startRow: number = Math.floor(row / 3) * 3
    const startCol: number = Math.floor(col / 3) * 3

    for (let i: number = startRow; i < startRow + 3; i++) {
      for (let j: number = startCol; j < startCol + 3; j++)
        if (board[i][j] === val) return false
    }

    return true
  }
}
