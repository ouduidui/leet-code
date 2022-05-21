/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function repeatedNTimes(nums: number[]): number {
  const n = nums.length / 2
  const counts = new Map<number, number>()

  for (let i = 0; i < nums.length; i++)
    counts.set(nums[i], counts.has(nums[i]) ? counts.get(nums[i])! + 1 : 1)

  for (const [num, count] of counts.entries())
    if (count === n) return num

  return -1
}

/**
 * 数学
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function repeatedNTimes2(nums: number[]): number {
  const len = nums.length

  // 重复元素 x 相邻之间至少都隔 2 个位置
  for (let gap = 1; gap <= 3; gap++) {
    for (let i = 0; i + gap < len; i++) {
      if (nums[i] === nums[i + gap])
        return nums[i]
    }
  }

  return -1
}
