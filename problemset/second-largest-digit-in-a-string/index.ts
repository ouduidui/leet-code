/**
 * 直接遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function secondHighest(s: string): number {
  let first = -1
  let second = -1
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c >= '0' && c <= '9') {
      const num = c.charCodeAt(0) - '0'.charCodeAt(0)
      if (num > first) {
        second = first
        first = num
      }
      else if (num < first && num > second) {
        second = num
      }
    }
  }
  return second
}
