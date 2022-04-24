/**
 * 动态规划
 * @desc 时间复杂度 O(MN)  空间复杂度 O(N+M)
 * @param n
 * @param primes
 * @returns
 */
export function nthSuperUglyNumber(n: number, primes: number[]): number {
  const dp = new Array(n + 1).fill(0)
  const len = primes.length
  const pointers = new Array(len).fill(0)
  const nums = new Array(len).fill(1)
  for (let i = 1; i <= n; i++) {
    let minNum = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < len; j++)
      minNum = Math.min(minNum, nums[j])

    dp[i] = minNum
    for (let j = 0; j < len; j++) {
      if (nums[j] === minNum) {
        pointers[j]++
        nums[j] = dp[pointers[j]] * primes[j]
      }
    }
  }
  return dp[n]
}
