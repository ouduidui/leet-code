/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maxProduct(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  let result = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < len; i++) {
    let sum = nums[i]
    for (let j = i; j < len; j++) {
      if (j !== i)
        sum *= nums[j]

      result = Math.max(result, sum)
    }
  }

  return result
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function maxProduct2(nums: number[]): number {
  // 维护当前乘积的最大值
  let max = nums[0]
  // 维护当前乘积的最小值
  let min = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const cur1 = max * nums[i]
    const cur2 = min * nums[i]

    // 更新值
    max = Math.max(cur1, cur2, nums[i])
    min = Math.min(cur1, cur2, nums[i])
    // 更新结果
    result = Math.max(result, max)
  }

  return result
}
