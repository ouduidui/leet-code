/**
 * 暴力解法
 * @时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @param k
 * @returns
 */
export function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

/**
 * 快速排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(logN)
 * @param nums
 * @param k
 * @returns
 */
export function findKthLargest2(nums: number[], k: number): number {
  quickSort(nums, 0, nums.length - 1, k)
  return nums[k - 1]

  function quickSort(nums: number[], left: number, right: number, k: number) {
    if (left < k && left < right) {
      const partitonIndex = partition(nums, left, right)
      quickSort(nums, left, partitonIndex - 1, k)
      quickSort(nums, partitonIndex + 1, right, k)
    }
  }

  function partition(nums: number[], left: number, right: number): number {
    const pivot = left
    let idx = pivot + 1
    for (let i = idx; i <= right; i++) {
      if (nums[i] > nums[pivot]) {
        [nums[i], nums[idx]] = [nums[idx], nums[i]]
        idx++
      }
    }

    [nums[pivot], nums[idx - 1]] = [nums[idx - 1], nums[pivot]]
    return idx - 1
  }
}
