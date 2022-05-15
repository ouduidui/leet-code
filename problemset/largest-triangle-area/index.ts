/**
 * 枚举
 * @desc 时间复杂度 O(N³)  空间复杂度 O(1)
 * @param points
 * @returns
 */
export function largestTriangleArea(points: number[][]): number {
  const triangleArea = ([x1, y1]: number[], [x2, y2]: number[], [x3, y3]: number[]) =>
    0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)

  const len = points.length
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++)
        res = Math.max(res, triangleArea(points[i], points[j], points[k]))
    }
  }
  return res
}

/**
 * 凸包
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param points
 * @returns
 */
export function largestTriangleArea2(points: number[][]): number {
  const triangleArea = ([x1, y1]: number[], [x2, y2]: number[], [x3, y3]: number[]) =>
    0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)

  const convexHull = getConvexHull(points)
  const len = convexHull.length
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1, k = i + 2; j + 1 < len; j++) {
      while (k + 1 < len) {
        const curArea = triangleArea(convexHull[i], convexHull[j], convexHull[k])
        const nextArea = triangleArea(convexHull[i], convexHull[j], convexHull[k + 1])
        if (curArea >= nextArea) break
        k++
      }
      res = Math.max(res, triangleArea(convexHull[i], convexHull[j], convexHull[k]))
    }
  }

  return res

  function getConvexHull(points: number[][]): number[][] {
    const cross = ([x1, y1]: number[], [x2, y2]: number[], [x3, y3]: number[]) =>
      (x2 - x1) * (y3 - y2) - (y2 - y1) * (x3 - x2)

    const n = points.length
    if (n < 4) return points

    /* 按照 x 大小进行排序，如果 x 相同，则按照 y 的大小进行排序 */
    points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    const hull: number[][] = []
    /* 求出凸包的下半部分 */
    for (let i = 0; i < n; i++) {
      while (hull.length > 1 && cross(hull[hull.length - 2], hull[hull.length - 1], points[i]) <= 0)
        hull.pop()

      hull.push(points[i])
    }
    let m = hull.length
    /* 求出凸包的上半部分 */
    for (let i = n - 2; i >= 0; i--) {
      while (hull.length > m && cross(hull[hull.length - 2], hull[hull.length - 1], points[i]) <= 0)
        hull.pop()

      hull.push(points[i])
    }
    /* hull[0] 同时参与凸包的上半部分检测，因此需去掉重复的 hull[0] */
    hull.pop()
    m = hull.length
    const hullArr: number[][] = []
    for (let i = 0; i < m; i++)
      hullArr[i] = hull[i]

    return hullArr
  }
}
