/**
 * 动态规划
 * @desc 时间复杂度 O(KN^2) 空间复杂度 O(KN)
 * @param nums
 * @param k
 * @returns
 */
export function largestSumOfAverages(nums: number[], k: number): number {
  const n = nums.length
  const prefix: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    prefix[i + 1] = prefix[i] + nums[i]

  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++)
    dp[i] = prefix[i] / i

  for (let j = 2; j <= k; j++) {
    for (let i = n; i >= j; i--) {
      for (let x = j - 1; x < i; x++)
        dp[i] = Math.max(dp[i], dp[x] + (prefix[i] - prefix[x]) / (i - x))
    }
  }
  return dp[n]
}
