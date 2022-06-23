/**
 * 双指针
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(1)
 * @param s
 * @param t
 * @returns
 */
export function isSubsequence(s: string, t: string): boolean {
  let i = 0
  let j = 0
  const m = s.length
  const n = t.length

  while (i < m && j < n) {
    if (s[i] === t[j]) i++
    j++
  }

  return i === m
}
