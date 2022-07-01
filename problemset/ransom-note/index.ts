/**
 * 哈希表
 * @desc 时间复杂度 O(N + M)  空间复杂度 O(S)
 * @param ransomNote
 * @param magazine
 * @returns
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>()

  for (const ch of magazine)
    map.set(ch, (map.get(ch) || 0) + 1)

  for (const ch of ransomNote) {
    if (!map.has(ch))
      return false
    else if (map.get(ch) === 1)
      map.delete(ch)
    else
      map.set(ch, map.get(ch)! - 1)
  }

  return true
}
