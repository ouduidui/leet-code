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
    if (nums[mid] < nums[high]) {
      high = mid
    }
    else if (nums[mid] > nums[high]) {
      low = mid + 1
    }
    else {
      // 如果中间值等于nums[high]，则向左移动high
      high--
    }
  }

  return nums[low]
}
