/**
 * 降序排序 + 一次遍历
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const n = nums.length
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  for (let i = 1; i <= n; ++i) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i))
      return i
  }
  return -1
}
