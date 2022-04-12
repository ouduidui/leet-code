/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(S)
 * @param s
 * @param t
 * @returns
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const map = new Map<string, number>()
  const len = s.length
  for (let i = 0; i < len; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  for (let i = 0; i < len; i++) {
    const ch = t[i]
    if (!map.has(ch)) return false

    const count = map.get(ch)!
    if (count === 1) map.delete(ch)
    else map.set(ch, count - 1)
  }

  return true
}
