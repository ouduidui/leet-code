/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right: number = nums.length - 1
  let ans: number = nums.length

  while (left <= right) {
    const mid: number = ((right - left) >> 1) + left
    if (nums[mid] === target) {
      return mid
    }
    else if (nums[mid] > target) {
      ans = mid
      right = mid - 1
    }
    else {
      left = mid + 1
    }
  }

  return ans
}
