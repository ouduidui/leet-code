/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param k
 * @returns
 */
export function getKthMagicNumber(k: number): number {
  const dp = new Array(k + 1).fill(0)
  dp[1] = 1
  let p3 = 1
  let p5 = 1
  let p7 = 1
  for (let i = 2; i <= k; i++) {
    const num3 = dp[p3] * 3
    const num5 = dp[p5] * 5
    const num7 = dp[p7] * 7
    dp[i] = Math.min(Math.min(num3, num5), num7)
    if (dp[i] === num3) p3++
    if (dp[i] === num5) p5++
    if (dp[i] === num7) p7++
  }
  return dp[k]
}
