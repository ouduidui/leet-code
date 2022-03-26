/**
 * 两次二分查找
 * @desc 时间复杂度 O(logMN)  空间复杂度 O(1)
 * @param matrix
 * @param target
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  let rows = matrix.length - 1
  let top = -1
  while (top < rows) {
    const mid = Math.floor((rows - top + 1) / 2) + top

    if (matrix[mid][0] === target) return true

    matrix[mid][0] > target ? (rows = mid - 1) : (top = mid)
  }

  if (top < 0) return false

  let len = matrix[top].length - 1
  let left = 0
  while (left <= len) {
    const mid = (left + len) >> 1
    if (matrix[top][mid] === target) return true

    matrix[top][mid] > target ? (len = mid - 1) : (left = mid + 1)
  }

  return false
}

/**
 * 一次二分查找
 * @desc 时间复杂度 O(logMN)  空间复杂度 O(1)
 * @param matrix
 * @param target
 */
export function searchMatrix2(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0
  let right = m * n - 1

  while (left <= right) {
    const mid = (left + right) >> 1
    const x = matrix[Math.floor(mid / n)][mid % n]
    if (x === target) return true

    if (x > target)
      right = mid - 1
    else
      left = mid + 1
  }

  return false
}
