/**
 * 计算重叠面积
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param ax1
 * @param ay1
 * @param ax2
 * @param ay2
 * @param bx1
 * @param by1
 * @param bx2
 * @param by2
 * @returns
 */
export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number {
  const area1 = (ax2 - ax1) * (ay2 - ay1)
  const area2 = (bx2 - bx1) * (by2 - by1)
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  const overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1)
  const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0)
  return area1 + area2 - overlapArea
}
