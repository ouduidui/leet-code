/**
 * 暴力解法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @return {number}
 */
export function search(nums: number[], target: number): number {
  return nums.indexOf(target)
}

/**
 * 二分法
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @return {number}
 */
export function search2(nums: number[], target: number): number {
  const len = nums.length

  if (!len) return -1
  if (len === 1) return nums[0] === target ? 0 : -1

  let left = 0
  let right: number = len - 1
  while (left <= right) {
    const mid: number = (left + right) >> 1
    if (nums[mid] === target) return mid
    if (nums[0] <= nums[mid]) {
      // 左边部分有序
      if (nums[0] <= target && target < nums[mid]) {
        // target在左边的区间内
        right = mid - 1
      }
      else {
        left = mid + 1
      }
    }
    else {
      // 右边部分有序
      if (nums[mid] < target && target <= nums[len - 1]) {
        // target在右边的区间内
        left = mid + 1
      }
      else {
        right = mid - 1
      }
    }
  }

  return -1
}
