/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function findPairs(nums: number[], k: number): number {
  const res = new Set<number>()
  const visited = new Set<number>()

  for (const num of nums) {
    if (visited.has(num - k))
      res.add(num - k)
    if (visited.has(num + k))
      res.add(num)

    visited.add(num)
  }

  return res.size
}
