/**
 * 标记数组
 * @desc 时间复杂度 O(MN)   空间复杂度 O(M+N)
 * @param matrix
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  const rows: boolean[] = new Array(m).fill(false)
  const cols: boolean[] = new Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true
        cols[j] = true
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (rows[i]) {
      matrix[i].fill(0)
    }
    else {
      for (let j = 0; j < n; j++) {
        if (cols[j])
          matrix[i][j] = 0
      }
    }
  }
}

/**
 * 标记变量
 * @desc 时间复杂度 O(MN)   空间复杂度 O(1)
 * @param matrix
 */
export function setZeroes2(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  let flagCol0 = false

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0)
      flagCol0 = true

    // 映射到第一行和第一列
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0)
        matrix[i][0] = matrix[0][j] = 0
    }
  }

  // 从最后一行倒序更新
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0)
        matrix[i][j] = 0
    }

    // 更新第一列
    if (flagCol0) matrix[i][0] = 0
  }
}
