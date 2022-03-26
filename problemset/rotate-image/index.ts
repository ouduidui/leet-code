/**
 * 使用辅助数组
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N^2)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate(matrix: number[][]): void {
  const len = matrix.length
  const newMatrix = new Array(len).fill(0).map(() => new Array(len).fill(0))

  // 先翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++)
      newMatrix[j][len - 1 - i] = matrix[i][j]
  }

  // 替换
  for (let i = 0; i < len; i++)
    matrix[i] = newMatrix[i]
}

/**
 * 原地旋转
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate2(matrix: number[][]): void {
  const len = matrix.length
  for (let i = 0; i < len >> 1; i++) {
    for (let j = 0; j < (len + 1) >> 1; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - j][i]
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j]
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - i - 1]
      matrix[j][len - i - 1] = temp
    }
  }
}

/**
 * 用翻转代替旋转
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate3(matrix: number[][]): void {
  const len = matrix.length
  // 水平翻转
  for (let i = 0; i < len >> 1; i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[len - 1 - i][j]] = [
        matrix[len - 1 - i][j],
        matrix[i][j],
      ]
    }
  }

  // 主对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  }
}
