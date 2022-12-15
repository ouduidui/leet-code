/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @param k
 * @returns
 */
export function getLucky(s: string, k: number): number {
  let sb = ''
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    sb += `${ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1}`
  }
  let digits = sb.toString()
  for (let i = 1; i <= k && digits.length > 1; ++i) {
    let sum = 0
    for (let j = 0; j < digits.length; ++j) {
      const ch = digits[j]
      sum += ch.charCodeAt(0) - '0'.charCodeAt(0)
    }
    digits = `${sum}`
  }

  return Number(digits)
}
