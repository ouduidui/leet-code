/**
 * 模拟
 * @desc 时间复杂度 O(N²logN)  空间复杂度 O(N)
 * @param rectangles
 * @returns
 */
export function rectangleArea(rectangles: number[][]): number {
  const MOD = BigInt(10 ** 9 + 7)
  const xArr: number[] = []
  for (const rect of rectangles) {
    xArr.push(rect[0]) // x1
    xArr.push(rect[2]) // x2
  }
  xArr.sort((a, b) => a - b)
  let ans = 0n
  for (let i = 1; i < xArr.length; i++) {
    const xLen = xArr[i] - xArr[i - 1]
    if (xLen === 0) continue
    const yArr: [number, number][] = []
    for (const rect of rectangles) {
      if (rect[0] <= xArr[i - 1] && xArr[i] <= rect[2])
        yArr.push([rect[1], rect[3]])
    }
    yArr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    let total = 0n; let minY = -1n; let maxY = -1n // Y 轴可能不是连续的，所以需要分段处理
    for (const [y1, y2] of yArr) {
      if (y1 > maxY) { // 断层了，重新统计高度
        total += maxY - minY
        minY = BigInt(y1)
        maxY = BigInt(y2)
      }
      else if (y2 > maxY) {
        maxY = BigInt(y2)
      }
    }
    total += maxY - minY
    ans += total * BigInt(xLen) // total * xLen 可能超出 number 的范围，所以需要将数据改为 bigint 存储
    ans %= MOD
  }
  return Number(ans)
}
