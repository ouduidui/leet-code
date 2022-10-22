/**
 * 动态规划 + 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O（N
 * @param startTime
 * @param endTime
 * @param profit
 * @returns
 */
export function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const n = startTime.length
  const jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]])
  jobs.sort((a, b) => a[1] - b[1])
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    const k = binarySearch(i - 1, jobs[i - 1][0])
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2])
  }
  return dp[n]

  function binarySearch(right: number, target: number) {
    let left = 0
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if (jobs[mid][1] > target)
        right = mid

      else
        left = mid + 1
    }
    return left
  }
}
