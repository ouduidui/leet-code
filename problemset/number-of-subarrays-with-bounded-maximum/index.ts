/**
 * 一次遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @param left
 * @param right
 * @returns
 */
export function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  let res = 0
  let last2 = -1
  let last1 = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i
    }
    else if (nums[i] > right) {
      last2 = i
      last1 = -1
    }
    if (last1 !== -1)
      res += last1 - last2
  }
  return res
}
