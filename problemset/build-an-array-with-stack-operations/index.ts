/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param target
 * @param n
 * @returns
 */
export function buildArray(target: number[], n: number): string[] {
  const res = []
  let prev = 0
  for (const number of target) {
    for (let i = 0; i < number - prev - 1; i++) {
      res.push('Push')
      res.push('Pop')
    }
    res.push('Push')
    prev = number
  }
  return res
}
