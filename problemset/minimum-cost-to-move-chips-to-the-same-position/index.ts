/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @params position
 * @returns
 */
export function minCostToMoveChips(position: number[]): number {
  let even = 0
  let odd = 0
  for (const pos of position) {
    if ((pos & 1) !== 0) odd++
    else even++
  }
  return Math.min(odd, even)
}
