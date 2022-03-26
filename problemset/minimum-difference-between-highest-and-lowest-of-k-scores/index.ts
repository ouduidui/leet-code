/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @param k
 */
export function minimumDifference(nums: number[], k: number): number {
  const len = nums.length
  nums.sort((a, b) => a - b)
  let ret = Number.MAX_VALUE
  for (let i = 0; i < len - k + 1; i++)
    ret = Math.min(ret, nums[i + k - 1] - nums[i])

  return ret
}
