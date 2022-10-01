/**
 * 找出所有的数字并分块
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param number
 * @returns
 */
export function reformatNumber(number: string): string {
  let digits = ''
  const isDigit = (ch: string) => parseFloat(ch).toString() !== 'NaN'
  for (let i = 0; i < number.length; ++i) {
    const ch = number[i]
    if (isDigit(ch))
      digits += ch
  }

  let n = digits.length
  let pt = 0
  let ans = ''
  while (n > 0) {
    if (n > 4) {
      ans += `${digits.slice(pt, pt + 3)}-`
      pt += 3
      n -= 3
    }
    else {
      if (n === 4)
        ans += `${digits.slice(pt, pt + 2)}-${digits.slice(pt + 2, pt + 4)}`

      else
        ans += digits.slice(pt, pt + n)

      break
    }
  }
  return ans
}
