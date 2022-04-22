/**
 * 记忆化搜索
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param nums
 * @returns
 */
export function maxCoins(nums: number[]): number {
  const len = nums.length
  return solve(
    0,
    len + 1,
    [1, ...nums, 1],
    new Array(len + 2).fill([]).map(() => new Array(len + 2).fill(-1)),
  )

  function solve(
    left: number,
    right: number,
    val: number[],
    rec: number[][],
  ): number {
    if (left >= right - 1) return 0
    // 记忆化搜索
    if (rec[left][right] !== -1) return rec[left][right]

    // 枚举每一种情况
    for (let i = left + 1; i < right; i++) {
      let sum = val[left] * val[i] * val[right]
      sum += solve(left, i, val, rec) + solve(i, right, val, rec)
      rec[left][right] = Math.max(rec[left][right], sum)
    }

    return rec[left][right]
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param nums
 * @returns
 */
export function maxCoins2(nums: number[]): number {
  const len = nums.length
  const val = [1, ...nums, 1]
  const dp = new Array(len + 2).fill([]).map(() => new Array(len + 2).fill(0))

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 2; j <= len + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + val[i] * val[j] * val[k],
        )
      }
    }
  }
  return dp[0][len + 1]
}
