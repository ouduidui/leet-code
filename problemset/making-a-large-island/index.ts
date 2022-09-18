/**
 * 标记岛屿 + 合并
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param grid
 * @returns
 */
export function largestIsland(grid: number[][]): number {
  const valid = (n: number, x: number, y: number) => x >= 0 && x < n && y >= 0 && y < n

  const d = [0, -1, 0, 1, 0]
  const n = grid.length
  let res = 0
  const tag: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const area = new Map<number, number>()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && tag[i][j] === 0) {
        const t = i * n + j + 1
        area.set(t, dfs(grid, i, j, tag, t))
        res = Math.max(res, area.get(t)!)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        let z = 1
        const connected = new Set()
        for (let k = 0; k < 4; k++) {
          const x = i + d[k]; const y = j + d[k + 1]
          if (!valid(n, x, y) || tag[x][y] === 0 || connected.has(tag[x][y]))
            continue

          z += area.get(tag[x][y])!
          connected.add(tag[x][y])
        }
        res = Math.max(res, z)
      }
    }
  }
  return res

  function dfs(grid: number[][], x: number, y: number, tag: number[][], t: number) {
    const n = grid.length; let res = 1
    tag[x][y] = t
    for (let i = 0; i < 4; i++) {
      const x1 = x + d[i]; const y1 = y + d[i + 1]
      if (valid(n, x1, y1) && grid[x1][y1] === 1 && tag[x1][y1] === 0)
        res += dfs(grid, x1, y1, tag, t)
    }
    return res
  }
}
