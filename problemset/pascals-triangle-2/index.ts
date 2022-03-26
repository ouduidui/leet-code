/**
 * 递推
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param rowIndex
 */
export function getRow(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0)
  row[0] = 1
  for (let i = 1; i <= rowIndex; ++i) {
    for (let j = i; j > 0; --j)
      row[j] += row[j - 1]
  }
  return row
}

/**
 * 线性递推
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param rowIndex
 */
export function getRow2(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0)
  row[0] = 1
  for (let i = 1; i <= rowIndex; i++)
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i

  return row
}
