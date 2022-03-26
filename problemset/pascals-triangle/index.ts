/**
 * 数学
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param numRows
 */
export function generate(numRows: number): number[][] {
  const ret: number[][] = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++)
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j]

    ret.push(row)
  }
  return ret
}
