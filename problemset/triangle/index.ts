/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N^2)
 * @param triangle
 */
export function minimumTotal(triangle: number[][]): number {
  const len = triangle.length
  const dp = new Array(len).fill([]).map(() => new Array(len).fill(0))
  // 初始化第一个元素
  dp[0][0] = triangle[0][0]

  for (let i = 1; i < len; i++) {
    // 最左边和最右边直接累加
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]

    // 中间的元素选取上面对应两个元素最小值进行累计
    for (let j = 1; j < i; j++)
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
  }

  // 找出最后一层的最小值
  return Math.min(...dp[len - 1])
}

/**
 * 动态规划 + 空间优化
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param triangle
 */
export function minimumTotal2(triangle: number[][]): number {
  const len = triangle.length
  const f = new Array(len).fill(0)
  // 初始化第一个元素
  f[0] = triangle[0][0]

  for (let i = 1; i < len; i++) {
    f[i] = f[i - 1] + triangle[i][i]
    // 中间的元素选取上面对应两个元素最小值进行累计
    for (let j = i - 1; j > 0; j--)
      f[j] = Math.min(f[j - 1], f[j]) + triangle[i][j]

    f[0] += triangle[i][0]
  }

  // 找出最后一层的最小值
  return Math.min(...f)
}
