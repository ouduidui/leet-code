/**
 * 哈希表
 * @desc 时间复杂度 O(logn) 空间复杂度 O(logn)
 * @param lowLimit
 * @param highLimit
 * @returns
 */
export function countBalls(lowLimit: number, highLimit: number): number {
  const count = new Map<number, number>()
  let res = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    let box = 0
    let x = i
    while (x !== 0) {
      box += x % 10
      x = Math.floor(x / 10)
    }
    const c = (count.get(box) || 0) + 1
    count.set(box, c)
    res = Math.max(res, c)
  }
  return res
}
