/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param ops
 * @returns
 */
export function calPoints(ops: string[]): number {
  const rate: number[] = []
  let result = 0
  for (const o of ops) {
    let len
    switch (o) {
      case '+':
        len = rate.push(rate[rate.length - 1] + rate[rate.length - 2])
        break
      case 'D':
        len = rate.push(rate[rate.length - 1] * 2)
        break
      case 'C':
        result -= rate.pop()!
        break
      default:
        len = rate.push(Number(o))
        break
    }
    len !== undefined && (result += rate[len - 1])
  }

  return result
}
