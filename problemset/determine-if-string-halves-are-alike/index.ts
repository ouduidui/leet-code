/**
 * 计数
 * @desc 时间复杂度 O(n) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function halvesAreAlike(s: string): boolean {
  const a = s.substring(0, s.length / 2)
  const b = s.substring(s.length / 2)
  const h = 'aeiouAEIOU'
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < a.length; i++) {
    if (h.includes(a[i]))
      sum1++
  }
  for (let i = 0; i < b.length; i++) {
    if (h.includes(b[i]))
      sum2++
  }
  return sum1 === sum2
}
