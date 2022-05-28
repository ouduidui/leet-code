/**
 * 计数
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function removeOuterParentheses(s: string): string {
  let res = ''
  let cnt = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === ')') cnt--
    if (cnt !== 0) res += ch
    if (ch === '(') cnt++
  }

  return res
}
