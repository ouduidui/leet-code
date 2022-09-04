/**
 * 模拟
 * @desc 时间复杂度 O(NM)  空间复杂度 O(N+M)
 * @param mat
 * @returns
 */
export function numSpecial(mat: number[][]): number {
  const m = mat.length
  const n = mat[0].length
  const rowsSum = new Array(m).fill(0)
  const colsSum = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j]
      colsSum[j] += mat[i][j]
    }
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1)
        res++
    }
  }
  return res
}

/**
 * 列的标记值
 * @desc 时间复杂度 O(NM)  空间复杂度 O(1)
 * @param mat
 * @returns
 */
export function numSpecial2(mat: number[][]): number {
  const m = mat.length; const n = mat[0].length
  for (let i = 0; i < m; i++) {
    let cnt1 = 0
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1)
        cnt1++
    }
    if (i === 0)
      cnt1--

    if (cnt1 > 0) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1)
          mat[0][j] += cnt1
      }
    }
  }
  let sum = 0
  for (const num of mat[0]) {
    if (num === 1)
      sum++
  }
  return sum
}
