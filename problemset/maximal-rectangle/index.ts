/**
 * 暴力解法
 * @desc 时间复杂度 O(M^2 * N)  空间复杂度 O(MN)
 * @param matrix
 */
export function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0) return 0

  const m = matrix.length
  const n = matrix[0].length

  /**
   * 记录左边连续 "1" 的数量
   *
   * ['1', '0', '1', '0', '0'],          [1, 0, 1, 0, 0],
   * ['1', '0', '1', '1', '1'],    =>    [1, 0, 1, 2, 3],
   * ['1', '1', '1', '1', '1'],    =>    [1, 2, 3, 4, 5],
   * ['1', '0', '0', '1', '0']           [1, 0, 0, 1, 0]
   */
  const left: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1')
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1
    }
  }

  let ret = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0')
        continue

      // 初始化宽度和面积
      let width = left[i][j]
      let area = width
      // 从下向上遍历 left 数组，获取最大面积
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, left[k][j])
        area = Math.max(area, (i - k + 1) /* height */ * width)
      }

      ret = Math.max(ret, area)
    }
  }

  return ret
}

/**
 * 单调栈
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param matrix
 */
export function maximalRectangle2(matrix: string[][]): number {
  if (matrix.length === 0) return 0

  const m = matrix.length
  const n = matrix[0].length
  const left: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1')
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1
    }
  }

  let ret = 0
  // 横向扫描
  for (let j = 0; j < n; j++) {
    /**
     *
     * ['1', '0', '1', '0', '0'],
     * ['1', '0', '1', '1', '1'],
     * ['1', '1', '1', '1', '1'],
     * ['1', '0', '0', '1', '0']
     *
     * 『 '-'代表对应item为0，高度不重要 』
     * 『 对应数值代表对应item向左扩展的最大宽度情况下的最大高度 』
     * j = 0 => heights = [4, 4, 4, 4]
     * j = 1 => heights = [-, -, 1, -]
     * j = 2 => heights = [3, 3, 1, -]
     * j = 3 => heights = [-, 3, 1, 3]
     * j = 4 => heights = [-, 2, 1, -]
     */
    const heights = new Array(m).fill(0)
    const stack = []
    // 从上到下扫描
    for (let i = 0; i < m; i++) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j])
        stack.pop()

      heights[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
      stack.push(i)
    }
    stack.length = 0
    // 从下到上扫描
    for (let i = m - 1; i >= 0; i--) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j])
        stack.pop()

      const down = stack.length === 0 ? m : stack[stack.length - 1]
      heights[i] = down - heights[i] - 1
      stack.push(i)
    }

    for (let i = 0; i < m; i++) {
      const height = heights[i]
      const area = height * left[i][j]
      ret = Math.max(ret, area)
    }
  }

  return ret
}
