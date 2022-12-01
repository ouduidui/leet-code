/**
 * 枚举所有的点
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param x
 * @param y
 * @param points
 * @returns
 */
export function nearestValidPoint(x: number, y: number, points: number[][]): number {
  const n = points.length
  let best = Number.MAX_VALUE
  let bestId = -1
  for (let i = 0; i < n; ++i) {
    const px = points[i][0]
    const py = points[i][1]
    if (x === px) {
      const dist = Math.abs(y - py)
      if (dist < best) {
        best = dist
        bestId = i
      }
    }
    else if (y === py) {
      const dist = Math.abs(x - px)
      if (dist < best) {
        best = dist
        bestId = i
      }
    }
  }
  return bestId
}
