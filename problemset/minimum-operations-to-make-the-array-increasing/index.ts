/**
 * 贪心
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function minOperations(nums: number[]): number {
  let pre = nums[0] - 1
  let res = 0
  for (const num of nums) {
    pre = Math.max(pre + 1, num)
    res += pre - num
  }
  return res
}
