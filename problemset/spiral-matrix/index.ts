/**
 * 模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(mn)
 * @param matrix {number[][]}
 * @return {number[]}
 */
export function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return []

  const rows = matrix.length
  const cols = matrix[0].length
  const total = rows * cols

  // 已经走过的元素
  const visited: boolean[][] = new Array(rows)
    .fill([])
    .map(() => new Array(cols).fill(false))
  const ans: number[] = []

  // 方向走位
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let directionIndex = 0
  let row = 0
  let col = 0

  for (let i = 0; i < total; i++) {
    ans[i] = matrix[row][col]
    visited[row][col] = true

    // 获取下一个走位
    const nextRow = row + directions[directionIndex][0]
    const nextCol = col + directions[directionIndex][1]

    // 判断是否走到头了
    if (
      !(
        nextRow >= 0
        && nextRow < rows
        && nextCol >= 0
        && nextCol < cols
        && !visited[nextRow][nextCol]
      )
    ) {
      // 当到头了，就需要调换方向
      directionIndex = (directionIndex + 1) % 4 /* 确保小于4 */
    }

    // 更新下一个走位
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }

  return ans
}

/**
 * 按层模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {number[]}
 */
export function spiralOrder2(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return []

  const rows = matrix.length
  const cols = matrix[0].length
  const ans: number[] = []

  // 边界
  let left = 0
  let right = cols - 1
  let top = 0
  let bottom = rows - 1

  while (left <= right && top <= bottom) {
    // 向右走
    for (let col = left; col <= right; col++)
      ans.push(matrix[top][col])

    // 向下走
    for (let row = top + 1; row <= bottom; row++)
      ans.push(matrix[row][right])

    if (left < right && top < bottom) {
      // 向左走
      for (let col = right - 1; col > left; col--)
        ans.push(matrix[bottom][col])

      // 向上走
      for (let row = bottom; row > top; row--)
        ans.push(matrix[row][left])
    }

    // 更新边界
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }

  return ans
}
