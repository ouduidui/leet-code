/**
 * 模拟
 * @desc 时间复杂度 O(MN) 空间复杂度 O(1)
 * @param img
 * @returns
 */
export function imageSmoother(img: number[][]): number[][] {
  const m = img.length
  const n = img[0].length
  const result: number[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(0))

  const dist = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = 0
      let sum = 0
      for (const d of dist) {
        const x = i + d[0]
        const y = j + d[1]
        if (x >= 0 && x < m && y >= 0 && y < n) {
          num++
          sum += img[x][y]
        }
      }
      result[i][j] = (sum / num) >> 0
    }
  }

  return result
}
