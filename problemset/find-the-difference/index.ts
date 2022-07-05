/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(Σ)
 * @param s
 * @param t
 * @returns
 */
export function findTheDifference(s: string, t: string): string {
  const map = new Map<string, number>()

  for (const ch of s)
    map.set(ch, (map.get(ch) || 0) + 1)

  for (const ch of t) {
    if (!map.has(ch)) return ch

    if (map.get(ch) === 1) map.delete(ch)
    else map.set(ch, map.get(ch)! - 1)
  }

  return ''
}

/**
 * 求和
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @param t
 * @returns
 */
export function findTheDifference2(s: string, t: string): string {
  let as = 0
  let at = 0

  for (const ch of s)
    as += ch.charCodeAt(0)

  for (const ch of t)
    at += ch.charCodeAt(0)

  return String.fromCharCode(at - as)
}

/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @param t
 * @returns
 */
export function findTheDifference3(s: string, t: string): string {
  let ret = 0

  for (const ch of s)
    ret ^= ch.charCodeAt(0)

  for (const ch of t)
    ret ^= ch.charCodeAt(0)

  return String.fromCharCode(ret)
}
