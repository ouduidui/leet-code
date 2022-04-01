/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }

  return false
}
