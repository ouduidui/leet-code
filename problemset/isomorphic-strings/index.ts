/**
 * 暴力解法
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param s
 * @param t
 * @returns
 */
export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const len = s.length

  for (let i = 0; i < len; i++)
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false

  return true
}

/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(∣Σ∣)
 * @param s
 * @param t
 * @returns
 */
export function isIsomorphic2(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const s2t: Record<string, string> = {}
  const t2s: Record<string, string> = {}
  const len = s.length
  for (let i = 0; i < len; i++) {
    const x = s[i]
    const y = t[i]
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) return false

    s2t[x] = y
    t2s[y] = x
  }

  return true
}
