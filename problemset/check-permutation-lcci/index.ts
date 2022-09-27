/**
 * 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s1
 * @param s2
 * @returns
 */
export function CheckPermutation(s1: string, s2: string): boolean {
  const map = new Map<string, number>()
  for (const s of s1)
    map.set(s, (map.get(s) || 0) + 1)

  for (const s of s2) {
    const count = map.get(s)!
    if (!count) return false
    if (count === 1) map.delete(s)
    else map.set(s, count - 1)
  }

  return map.size === 0
}
