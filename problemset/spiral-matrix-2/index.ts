/**
 * 按层模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(1)
 * @param n {number}
 * @return {number[][]}
 */
export function generateMatrix(n: number): number[][] {
  const matrix: number[][] = []

  let [top, bottom, left, right] = [0, n - 1, 0, n - 1]

  let i = 1
  while (left <= right && top <= bottom) {
    // 向右走
    for (let col = left; col <= right; col++) {
      !matrix[top] && (matrix[top] = [])
      matrix[top][col] = i++
    }

    // 向下走
    for (let row = top + 1; row < bottom; row++) {
      !matrix[row] && (matrix[row] = [])
      matrix[row][right] = i++
    }

    // 向左走
    for (let col = right; col > left; col--) {
      !matrix[bottom] && (matrix[bottom] = [])
      matrix[bottom][col] = i++
    }

    // 向上走
    for (let row = bottom; row > top; row--) {
      !matrix[row] && (matrix[row] = [])
      matrix[row][left] = i++
    }

    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }

  return matrix
}
