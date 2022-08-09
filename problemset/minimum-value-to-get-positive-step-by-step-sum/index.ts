/**
 * 贪心
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function minStartValue(nums: number[]): number {
  let minSum = 0
  let sum = 0
  for (const num of nums) {
    sum += num
    minSum = Math.min(minSum, sum)
  }

  const startValue = 1 - minSum
  return startValue < 1 ? 1 : startValue
}
