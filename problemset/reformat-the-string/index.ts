/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function reformat(s: string): string {
  const isDigit = (ch: string) => !isNaN(Number(ch))

  let sumDigit = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (isDigit(c))
      sumDigit++
  }
  const sumAlpha = s.length - sumDigit
  if (Math.abs(sumDigit - sumAlpha) > 1)
    return ''

  const flag = sumDigit > sumAlpha
  const arr = [...s]
  for (let i = 0, j = 1; i < s.length; i += 2) {
    if (isDigit(arr[i]) !== flag) {
      while (isDigit(arr[j]) !== flag)
        j += 2;

      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  return arr.join('')
}
