/**
 * 哈希表
 * @desc 时间复杂度 O(NM)  空间复杂度 O(N)
 * @param matrix
 */
export function luckyNumbers(matrix: number[][]): number[] {
  const mins: number[] = []
  const ans: number[] = []
  for (const row of matrix)
    mins.push(Math.min(...row))

  const len = matrix[0].length
  for (let i = 0; i < len; i++) {
    let maxNum = Number.MIN_VALUE
    for (const row of matrix)
      maxNum = Math.max(maxNum, row[i])

    if (mins.includes(maxNum)) ans.push(maxNum)
  }

  return ans
}
