/**
 * 状态压缩 + 广度优先搜索
 * @desc 时间复杂度 O(MN2^K) 空间复杂度 O(MN2^K)
 * @param grid
 * @returns
 */
export function shortestPathAllKeys(grid: string[]): number {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = grid.length
  const n = grid[0].length
  let sx = 0; let sy = 0
  const keyToIndex = new Map<string, number>()
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '@') {
        sx = i
        sy = j
      }
      else if (grid[i][j] >= 'a' && grid[i][j] <= 'z') {
        if (!keyToIndex.has(grid[i][j])) {
          const idx = keyToIndex.size
          keyToIndex.set(grid[i][j], idx)
        }
      }
    }
  }

  const queue: [number, number, number][] = []
  const dist: number[][][] = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(1 << keyToIndex.size).fill(-1)))
  queue.push([sx, sy, 0])
  dist[sx][sy][0] = 0
  while (queue.length) {
    const arr = queue.shift()!
    const x = arr[0]
    const y = arr[1]
    const mask = arr[2]
    for (let i = 0; i < 4; ++i) {
      const nx = x + dirs[i][0]
      const ny = y + dirs[i][1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        if (grid[nx][ny] === '.' || grid[nx][ny] === '@') {
          if (dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        }
        else if (grid[nx][ny] >= 'a' && grid[nx][ny] <= 'z') {
          const idx = keyToIndex.get(grid[nx][ny])!
          if (dist[nx][ny][mask | (1 << idx)] === -1) {
            dist[nx][ny][mask | (1 << idx)] = dist[x][y][mask] + 1
            if ((mask | (1 << idx)) === (1 << keyToIndex.size) - 1)
              return dist[nx][ny][mask | (1 << idx)]

            queue.push([nx, ny, mask | (1 << idx)])
          }
        }
        else {
          const idx = keyToIndex.get(grid[nx][ny].toLowerCase())!
          if ((mask & (1 << idx)) !== 0 && dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1
            queue.push([nx, ny, mask])
          }
        }
      }
    }
  }
  return -1
}
