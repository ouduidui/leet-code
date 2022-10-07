/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxAscendingSum(nums: number[]): number {
  let res = 0
  let l = 0
  while (l < nums.length) {
    let cursum = nums[l++]
    while (l < nums.length && nums[l] > nums[l - 1])
      cursum += nums[l++]

    res = Math.max(res, cursum)
  }
  return res
}
