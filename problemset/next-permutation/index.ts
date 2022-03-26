/**
 * 两遍扫描
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return

  // 从未尾查起，找到非升序的那个值
  let i: number = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1])
    i--

  // 如果i大于零，则进行进行下一步操作
  // 如果i小于零，则代表目前序列是一个降序数组，直接进行反转
  if (i >= 0) {
    // 从未尾查起，找到第一个比nums[i]大的值
    let j: number = nums.length - 1
    while (j >= 0 && nums[i] >= nums[j])
      j--

    // 将nums[i]和nums[j]调换位置
    swap(nums, i, j)
  }

  // 将i后面的部分进行降序处理
  reverse(nums, i + 1)

  /**
   * 调换nums数组的i位置和j位置
   * @param nums {number[]}
   * @param i {number}
   * @param j {number}
   */
  function swap(nums: number[], i: number, j: number): void {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  /**
   * nums从start开始，进行降序处理
   * @param nums {number[]}
   * @param start {number}
   */
  function reverse(nums: number[], start: number): void {
    let left: number = start
    let right: number = nums.length - 1
    while (left < right) {
      swap(nums, left, right)
      left++
      right--
    }
  }
}
