/**
 * 动态规划
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n)
 * @param cuboids
 * @returns
 */
export function maxHeight(cuboids: number[][]): number {
  const n = cuboids.length
  for (const v of cuboids)
    v.sort((a, b) => a - b)

  cuboids.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]))
  let ans = 0
  const dp = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2]
    for (let j = 0; j < i; j++) {
      if (cuboids[i][0] >= cuboids[j][0]
                && cuboids[i][1] >= cuboids[j][1]
                && cuboids[i][2] >= cuboids[j][2])
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2])
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
}
