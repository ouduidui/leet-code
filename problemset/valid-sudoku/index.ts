/**
 * 一次遍历
 * @desc 时间复杂度 O(1)   空间复杂度 O(1)
 * @param board {string[][]}
 * @return boolean
 */
export function isValidSudoku(board: string[][]): boolean {
  const [rows, columns, boxes] = [new Set(), new Set(), new Set()]

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c: string = board[i][j]
      if (c !== '.') {
        const rowKey = `${i}-${c}`
        const columnKey = `${j}-${c}`
        const boxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}-${c}`

        if (rows.has(rowKey) || columns.has(columnKey) || boxes.has(boxKey)) {
          return false
        }
        else {
          rows.add(rowKey)
          columns.add(columnKey)
          boxes.add(boxKey)
        }
      }
    }
  }

  return true
}
