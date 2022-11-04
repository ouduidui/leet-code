/**
 * 数学
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param target
 * @returns
 */
export function reachNumber(target: number): number {
  target = Math.abs(target)
  let k = 0
  while (target > 0) {
    k++
    target -= k
  }
  return target % 2 === 0 ? k : k + 1 + k % 2
}
