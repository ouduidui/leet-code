/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  const x = nums[len >> 1]
  let res = 0
  for (let i = 0; i < len; i++)
    res += Math.abs(nums[i] - x)

  return res
}

/**
 * 快速选择
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function minMoves2_2(nums: number[]): number {
  const len = nums.length
  // 通过快排找到中位数
  const x = quickSelect(nums, 0, len - 1, len >> 1)
  let res = 0
  for (let i = 0; i < len; i++)
    res += Math.abs(nums[i] - x)

  return res

  function quickSelect(nums: number[], left: number, right: number, index: number): number {
    const q = randomPartition(nums, left, right)
    return q === index
      ? nums[q]
      : q < index
        ? quickSelect(nums, q + 1, right, index)
        : quickSelect(nums, left, q - 1, index)
  }

  function randomPartition(nums: number[], left: number, right: number) {
    const i = ((Math.random() * (right - left + 1)) >> 0) + left
    swap(nums, i, right)
    return partition(nums, left, right)
  }

  function partition(nums: number[], left: number, right: number) {
    const x = nums[right]
    let i = left - 1

    for (let j = left; j < right; j++) {
      if (nums[j] <= x) {
        i++
        swap(nums, i, j)
      }
    }
    swap(nums, i + 1, right)
    return i + 1
  }

  function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
