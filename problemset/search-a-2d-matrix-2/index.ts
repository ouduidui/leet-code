/**
 * 二分搜索
 * @desc 时间复杂度 O(MlogN)  空间复杂度 O(1)
 * @param matrix
 * @param target
 * @returns
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix)
    if (search(row, target) !== -1) return true

  return false

  /**
   * 二分查找
   * @param nums
   * @param target
   * @returns
   */
  function search(nums: number[], target: number): number {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
      const mid = (low + high) >> 1
      const num = nums[mid]
      if (num === target)
        return mid
      else if (num > target)
        high = mid - 1
      else
        low = mid + 1
    }
    return -1
  }
}

/**
 * Z字形查找
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param matrix
 * @param target
 * @returns
 */
export function searchMatrix2(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length

  let x = 0
  let y = n - 1

  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true

    if (matrix[x][y] > target) y--
    else x++
  }

  return false
}
