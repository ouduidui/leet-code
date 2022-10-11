/**
 * 计数统计
 * @desc 时间复杂度 O(N)  空间复杂度 O(C)
 * @param s1
 * @param s2
 * @returns
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true
  const len = s1.length
  const diff: number[] = []
  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) {
      if (diff.length >= 2)
        return false
      diff.push(i)
    }
  }
  if (diff.length === 0)
    return true

  if (diff.length !== 2)
    return false

  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]
}
