/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function longestConsecutive(nums: number[]): number {
  // 存储所有数值（去重）
  const numSet = new Set(nums)

  let result = 0

  for (const num of numSet) {
    // 如果numSet不存在 num - 1，则num可作为起始数
    if (!numSet.has(num - 1)) {
      let currentNum = num // 当前值
      let currentStreak = 1 // 当前长度

      // 向后寻找
      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      // 更新返回值
      result = Math.max(result, currentStreak)
    }
  }

  return result
}
