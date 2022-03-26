/**
 * 暴力解法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate(nums: number[]): number {
  let i = 0
  const len = nums.length

  while (i < len) {
    if (nums[i] === nums[i + 1]) {
      i = i + 2
      continue
    }
    return nums[i]
  }

  return NaN
}

/**
 * 全数组的二分查找
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate2(nums: number[]): number {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const mid = (high + low) >> 1
    // 当 mid 是偶数时，mid + 1 = mid ⊕ 1
    // 当 mid 是奇数时，mid - 1 = mid ⊕ 1
    if (nums[mid] === nums[mid ^ 1])
      low = mid + 1
    else
      high = mid
  }

  return nums[low]
}

/**
 * 偶数下标的二分查找
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate3(nums: number[]): number {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = (high + low) >> 1
    // 确保 mid 为偶数
    // 当 mid 是偶数时，mid & 1 = 0
    // 当 mid 是奇数时，mid & 1 = 1
    mid -= mid & 1
    if (nums[mid] === nums[mid + 1])
      low = mid + 2
    else
      high = mid
  }

  return nums[low]
}
