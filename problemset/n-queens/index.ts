/**
 * 基于集合的回溯
 * @desc 时间复杂度 O(N!)   空间复杂度 O(N)
 * @param n {number}
 * @return {string[][]}
 */
export function solveNQueens(n: number): string[][] {
  const solutions: string[][] = []
  const queens = new Array<number>(n).fill(-1)
  const columns = new Set<number>() // 列
  const diagonals1 = new Set<number>() // 从左上到右下方向
  const diagonals2 = new Set<number>() // 从右上到左下方向
  backtrack(0)
  return solutions

  function backtrack(row: number) {
    if (row === n) {
      const board = generateBoard(queens)
      solutions.push(board)
      return
    }

    for (let i = 0; i < n; i++) {
      // 如果同列上已经有皇后，就跳过
      if (columns.has(i)) continue

      // 如果同对角线上已经有皇后，就跳过
      const diagonal1 = row - i
      if (diagonals1.has(diagonal1)) continue
      const diagonal2 = row + i
      if (diagonals2.has(diagonal2)) continue

      queens[row] = i
      columns.add(i)
      diagonals1.add(diagonal1)
      diagonals2.add(diagonal2)
      backtrack(row + 1)
      queens[row] = -1
      columns.delete(i)
      diagonals1.delete(diagonal1)
      diagonals2.delete(diagonal2)
    }
  }

  function generateBoard(queens: number[]): string[] {
    const board: string[] = []

    for (let i = 0; i < n; i++) {
      const row = new Array<string>(n).fill('.')
      row[queens[i]] = 'Q'
      board.push(row.join(''))
    }

    return board
  }
}
