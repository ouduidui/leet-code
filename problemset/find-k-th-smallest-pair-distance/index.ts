/**
 * 排序 + 二分查找
 * @desc 时间复杂度 O(NlogN+logD) 空间复杂度 O(logN)
 * @param nums
 * @param k
 * @returns
 */
export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let left = 0
  let right = nums[len - 1] - nums[0]

  while (left < right) {
    const mid = (left + right) >> 1
    let cnt = 0
    for (let i = 0; i < len; i++) {
      const j = binarySearch(nums, i, nums[i] - mid)
      cnt += i - j
    }

    if (cnt >= k)
      right = mid - 1
    else
      left = mid + 1
  }

  return left

  function binarySearch(nums: number[], end: number, target: number) {
    let left = 0
    let right = end
    while (left < right) {
      const mid = (left + right) >> 1
      if (nums[mid] < target)
        left = mid + 1
      else
        right = mid
    }

    return left
  }
}

/**
 * 排序 + 二分查找 + 双指针
 * @desc 时间复杂度 O(N(logN+logD)) 空间复杂度 O(logN)
 * @param nums
 * @param k
 * @returns
 */
export function smallestDistancePair2(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let left = 0
  let right = nums[len - 1] - nums[0]

  while (left <= right) {
    const mid = (left + right) >> 1
    let cnt = 0
    for (let i = 0, j = 0; j < len; j++) {
      while (nums[j] - nums[i] > mid)
        i++

      cnt += j - i
    }

    if (cnt >= k)
      right = mid - 1
    else
      left = mid + 1
  }
  return left
}
