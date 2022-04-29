/**
 * 数学
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param k
 * @returns
 */
export function smallestRangeI(nums: number[], k: number): number {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  return max - min <= 2 * k ? 0 : max - min - 2 * k
}
