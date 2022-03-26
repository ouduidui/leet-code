/**
 * 暴力解法
 * @desc 时间复杂度 O(NlogN)   空间复杂度 (1)
 * @param nums
 */
export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      ans = Math.max(ans, sum)
    }
  }

  return ans
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function maxSubArray2(nums: number[]): number {
  let prevSum = 0
  let ans = nums[0]

  nums.forEach((num) => {
    prevSum = Math.max(num, prevSum + num)
    ans = Math.max(prevSum, ans)
  })

  return ans
}
