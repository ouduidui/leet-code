/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function searchRange(nums: number[], target: number): number[] {
  let ans: [number, number] = [-1, -1]
  if (!nums.length) return ans
  if (nums.length === 1 && nums[0] !== target) return ans

  const leftIndex = binarySearch(true)
  const rightIndex = binarySearch(false) - 1

  if (
    leftIndex <= rightIndex
    && rightIndex < nums.length
    && nums[leftIndex] === target
    && nums[rightIndex] === target
  )
    ans = [leftIndex, rightIndex]

  return ans

  function binarySearch(lower: boolean): number {
    let left = 0
    let right: number = nums.length - 1
    let ans = nums.length

    while (left <= right) {
      const mid: number = (left + right) >> 1
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1
        ans = mid
      }
      else {
        left = mid + 1
      }
    }

    return ans
  }
}
