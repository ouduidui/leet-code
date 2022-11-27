/**
 * 直接遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function check(nums: number[]): boolean {
  const n = nums.length
  let x = 0
  for (let i = 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      x = i
      break
    }
  }
  if (x === 0) return true

  for (let i = x + 1; i < n; ++i)
    if (nums[i] < nums[i - 1]) return false

  return nums[0] >= nums[n - 1]
}
