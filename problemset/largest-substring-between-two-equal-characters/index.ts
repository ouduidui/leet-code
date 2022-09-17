/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function maxLengthBetweenEqualCharacters(s: string): number {
  let res = -1
  const map = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (!map.has(ch)) {
      map.set(ch, i)
    }
    else {
      const left = map.get(ch)!
      res = Math.max(i - left - 1, res)
    }
  }

  return res
}
