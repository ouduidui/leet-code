/**
 * 数学
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @returns
 */
export function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  if (isEqual(p1, p2)) return false
  if (help(p1, p2, p3, p4)) return true
  if (isEqual(p1, p3)) return false
  if (help(p1, p3, p2, p4)) return true
  if (isEqual(p1, p4)) return false
  if (help(p1, p4, p2, p3)) return true
  return false

  function isEqual(p1: number[], p2: number[]): boolean {
    return p1[0] === p2[0] && p1[1] === p2[1]
  }
  function help(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    const v1 = [p1[0] - p2[0], p1[1] - p2[1]]
    const v2 = [p3[0] - p4[0], p3[1] - p4[1]]
    return checkMidPoint(p1, p2, p3, p4) && checkLength(v1, v2) && calCos(v1, v2)
  }

  function checkLength(v1: number[], v2: number[]) {
    return (v1[0] * v1[0] + v1[1] * v1[1]) === (v2[0] * v2[0] + v2[1] * v2[1])
  }

  function checkMidPoint(p1: number[], p2: number[], p3: number[], p4: number[]) {
    return (p1[0] + p2[0]) === (p3[0] + p4[0]) && (p1[1] + p2[1]) === (p3[1] + p4[1])
  }

  function calCos(v1: number[], v2: number[]) {
    return (v1[0] * v2[0] + v1[1] * v2[1]) === 0
  }
}
