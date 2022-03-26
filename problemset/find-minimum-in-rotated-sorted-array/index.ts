/**
 * 二分法
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param nums
 */
export function findMin(nums: number[]): number {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const mid = (low + high) >> 1
    if (nums[mid] < nums[high])
      high = mid
    else
      low = mid + 1
  }

  return nums[low]
}
