/**
 * 维护后缀最小值
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function isIdealPermutation(nums: number[]): boolean {
  const n = nums.length
  let minSuff = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minSuff)
      return false

    minSuff = Math.min(minSuff, nums[i + 1])
  }
  return true
}

/**
 * 归纳证明
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function isIdealPermutation2(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - i) > 1)
      return false
  }
  return true
}
