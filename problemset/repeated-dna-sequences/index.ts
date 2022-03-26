/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const set = new Set<string>()
  const result = new Set<string>()

  for (let i = 0; i <= s.length - 10; i++) {
    const str = s.substring(i, i + 10)
    set.has(str) ? result.add(str) : set.add(str)
  }

  return Array.from(result)
}

/**
 * 滑动窗口 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences2(s: string): string[] {
  const len = s.length
  if (len <= 10) return []

  let str = s.substring(0, 10)
  const set = new Set<string>([str])
  const result = new Set<string>()

  for (let i = 10; i < len; i++) {
    str = str.slice(1) + s[i]
    set.has(str) ? result.add(str) : set.add(str)
  }

  return Array.from(result)
}

/**
 * 滑动窗口 + 哈希表 + 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function findRepeatedDnaSequences3(s: string): string[] {
  // A: 00  C: 01  G: 10  T: 11
  const bin = new Map<string, number>([
    ['A', 0],
    ['C', 1],
    ['G', 2],
    ['T', 3],
  ])
  if (s.length <= 10) return []
  let x = 0
  for (let i = 0; i < 10; i++)
    x = (x << 2) | bin.get(s[i])!

  const set = new Set<number>([x])
  const result = new Set<string>()
  for (let i = 10; i < s.length; i++) {
    x = ((x << 2) | bin.get(s[i])!) & ((1 << 20) - 1)
    set.has(x) ? result.add(s.substr(i - 9, 10)) : set.add(x)
  }
  return Array.from(result)
}
