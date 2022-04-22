/**
 * 使用语言API
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function toLowerCase(s: string): string {
  return s.toLowerCase()
}

/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function toLowerCase2(s: string): string {
  let res = ''
  for (const ch of s) {
    res += ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90
      ? String.fromCharCode(ch.charCodeAt(0) | 32)
      : ch
  }
  return res
}
