/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums1
 * @param nums2
 * @param nums3
 * @returns
 */
export function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const map = new Map<number, number>()
  for (const i of nums1)
    map.set(i, 1)

  for (const i of nums2)
    map.set(i, (map.get(i) || 0) | 2)

  for (const i of nums3)
    map.set(i, (map.get(i) || 0) | 4)

  const res = []
  for (const [k, v] of map.entries()) {
    if ((v & (v - 1)) !== 0)
      res.push(k)
  }
  return res
}
