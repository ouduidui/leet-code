/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maximumDifference(nums: number[]): number {
  let result = -1

  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] < nums[j])
        result = Math.max(result, nums[j] - nums[i])
    }
  }

  return result
}

/**
 * 前缀最小值
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maximumDifference2(nums: number[]): number {
  let result = -1
  let prevMin = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prevMin)
      result = Math.max(result, nums[i] - prevMin)
    else
      prevMin = nums[i]
  }

  return result
}
