/**
 * 直接模拟
 * @desc 时间复杂度  O(MN)  空间复杂度 O(1)
 * @param mat
 * @returns
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const ans: number[] = []
  const m = mat.length
  const n = mat[0].length
  let pos = 0

  for (let i = 0; i < m + n - 1; i++) {
    // 当 i 为奇数时，则第 i 条对角线的走向是从上往下遍历
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1
      let y = i < n ? i : n - 1
      while (x < m && y >= 0) {
        ans[pos] = mat[x][y]
        pos++
        x++
        y--
      }
    }
    // 当 i 为偶数时，则第 i 条对角线的走向是从下往上遍历
    else {
      let x = i < m ? i : m - 1
      let y = i < m ? 0 : i - m + 1
      while (x >= 0 && y < n) {
        ans[pos] = mat[x][y]
        pos++
        x--
        y++
      }
    }
  }

  return ans
}
