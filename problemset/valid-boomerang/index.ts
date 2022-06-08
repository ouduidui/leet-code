/**
 * 向量叉乘
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param points
 * @returns
 */
export function isBoomerang(points: number[][]): boolean {
  const [
    [x1, y1], [x2, y2], [x3, y3],
  ] = points

  const v1 = [x2 - x1, y2 - y1]
  const v2 = [x3 - x2, y3 - y2]
  return v1[0] * v2[1] - v1[1] * v2[0] !== 0
}
