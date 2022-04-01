/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (map.has(val) && i - map.get(val)! <= k)
      return true
    else
      map.set(val, i)
  }

  return false
}

/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(K)
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const set = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    if (i > k)
      set.delete(nums[i - k - 1])

    if (set.has(nums[i]))
      return true

    set.add(nums[i])
  }
  return false
}
