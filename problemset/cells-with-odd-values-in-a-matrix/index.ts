/**
 * 模拟
 * @desc 时间复杂度 O(q + m + n)  空间复杂度 O(m + n)
 * @param m
 * @param n
 * @param indices
 * @returns
 */
export function oddCells(m: number, n: number, indices: number[][]): number {
  const rows = new Array(m).fill(0)
  const cols = new Array(n).fill(0)

  for (const [r, c] of indices) {
    rows[r]++
    cols[c]++
  }

  let oddx = 0
  let oddy = 0

  for (const row of rows)
    if ((row & 1) !== 0) oddx++

  for (const col of cols)
    if ((col & 1) !== 0) oddy++

  return oddx * (n - oddy) + (m - oddx) * oddy
}
