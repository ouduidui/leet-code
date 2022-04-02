/**
 * 滑动窗口 + 哈希表
 * @desc 时间复杂度 O(n log(min(n, k)))  空间复杂度 O(min(n, k))
 * @param nums
 * @param k
 * @param t
 * @returns
 */
export function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  if (k === 0) return false

  const len = nums.length
  const set = new Set<number>()

  for (let i = 0; i < len; i++) {
    if (find(val => (val >= nums[i] - t && val <= nums[i] + t)))
      return true

    if (i >= k)
      set.delete(nums[i - k])

    set.add(nums[i])
  }

  return false

  function find(valid: (v: number) => boolean) {
    for (const val of set.values())
      if (valid(val)) return true
    return false
  }
}

/**
 * 桶 + 哈希表
 * @param nums
 * @param k
 * @param t
 * @returns
 */
export function containsNearbyAlmostDuplicate2(nums: number[], k: number, t: number): boolean {
  if (k === 0) return false

  const len = nums.length
  const map = new Map<number, number>()
  // 生成桶id
  const getId = (n: number, w = t + 1 /* 桶大小 */): number =>
    n < 0
      ? Math.floor((n + 1) / w) - 1
      : Math.floor(n / w)

  for (let i = 0; i < len; i++) {
    const n = nums[i]
    const id = getId(n)

    if (map.has(id)) return true

    if (map.has(id - 1) && Math.abs(n - map.get(id - 1)!) <= t)
      return true

    if (map.has(id + 1) && Math.abs(n - map.get(id + 1)!) <= t)
      return true

    if (i >= k)
      map.delete(getId(nums[i - k]))

    map.set(id, n)
  }

  return false
}
