/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function increasingTriplet(nums: number[]): boolean {
  const len = nums.length
  if (len < 3) return false

  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (num > second)
      return true
    else if (num > first)
      second = num
    else
      first = num
  }
  return false
}
