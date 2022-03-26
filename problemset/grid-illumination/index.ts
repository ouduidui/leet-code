/**
 * 哈希表
 * @desc 时间复杂度 O(L + Q)   空间复杂度 O(L)
 * @param n
 * @param lamps
 * @param queries
 */
export function gridIllumination(
  n: number,
  lamps: number[][],
  queries: number[][],
): number[] {
  const row = new Map<number, number>() // 行 -> x
  const col = new Map<number, number>() // 列 -> y
  const diagonal = new Map<number, number>() // 对角线 -> x - y
  const antiDiagonal = new Map<number, number>() // 反对角线  -> x + y
  const points = new Set<string>() // 灯 -> 'x-y'
  // 生成坐标点的hash字符串
  const hash = (x: number, y: number): string => `${x}-${y}`

  // 遍历灯
  for (const [x, y] of lamps) {
    // 如果这灯已经亮过，就无需重复操作
    if (points.has(hash(x, y))) continue
    points.add(hash(x, y))

    row.set(x, (row.get(x) || 0) + 1)
    col.set(y, (col.get(y) || 0) + 1)
    diagonal.set(x - y, (diagonal.get(x - y) || 0) + 1)
    antiDiagonal.set(x + y, (antiDiagonal.get(x + y) || 0) + 1)
  }

  // 初始化结果数组
  const ret: number[] = new Array(queries.length).fill(0)

  // 遍历queries
  for (const [i, [r, c]] of queries.entries()) {
    // 该区域亮着，则设置为1
    if (
      row.get(r)
      || col.get(c)
      || diagonal.get(r - c)
      || antiDiagonal.get(r + c)
    )
      ret[i] = 1

    // 遍历该查找点的四周
    for (let x = r - 1; x < r + 2; x++) {
      for (let y = c - 1; y < c + 2; y++) {
        // 如果超出区域或者该坐标点没有灯，则跳过
        if (x < 0 || y < 0 || x >= n || y >= n || !points.has(hash(x, y)))
          continue

        // 清掉灯
        points.delete(hash(x, y))
        row.set(x, row.get(x)! - 1)
        col.set(y, col.get(y)! - 1)
        diagonal.set(x - y, diagonal.get(x - y)! - 1)
        antiDiagonal.set(x + y, antiDiagonal.get(x + y)! - 1)
      }
    }
  }

  return ret
}
