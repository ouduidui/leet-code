export function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  // 用于判断是否使用过
  const visited: boolean[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(false))
  // 位移方向
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(i, j, 0))
        return true
    }
  }

  return false

  // 回溯
  function check(i: number, j: number, k: number): boolean {
    if (board[i][j] !== word.charAt(k)) {
      // 如果该块字符不匹配，直接返回false
      return false
    }
    else if (k === word.length - 1) {
      // 如果凑齐单词，直接返回true
      return true
    }

    visited[i][j] = true
    let result = false
    // 遍历四个走位
    for (const [dx, dy] of directions) {
      const i2 = i + dx
      const j2 = j + dy
      if (i2 >= 0 && i2 < m && j2 >= 0 && j2 < n && !visited[i2][j2]) {
        if (check(i2, j2, k + 1)) {
          result = true
          break
        }
      }
    }
    // 恢复状态
    visited[i][j] = false
    return result
  }
}
