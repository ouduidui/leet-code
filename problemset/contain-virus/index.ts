/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN(M+N)) 空间复杂度 O(MN)
 * @param isInfected
 * @returns
 */
export function containVirus(isInfected: number[][]): number {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = isInfected.length
  const n = isInfected[0].length
  let ans = 0

  const getHash = (x: number, y: number) => (x << 16) ^ y

  while (true) {
    const neighbors: Set<number>[] = []
    const firewalls: number[] = []
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] === 1) {
          const queue = [[i, j]]
          const neighbor = new Set<number>()
          let firewall = 0
          const idx = neighbors.length + 1
          isInfected[i][j] = -idx

          while (queue.length > 0) {
            const arr = queue.shift()!
            const [x, y] = arr
            for (const dir of dirs) {
              const nx = x + dir[0]
              const ny = y + dir[1]
              if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                if (isInfected[nx][ny] === 1) {
                  queue.push([nx, ny])
                  isInfected[nx][ny] = -idx
                }
                else if (isInfected[nx][ny] === 0) {
                  firewall++
                  neighbor.add(getHash(nx, ny))
                }
              }
            }
          }
          neighbors.push(neighbor)
          firewalls.push(firewall)
        }
      }
    }

    if (neighbors.length === 0) break

    let idx = 0
    for (let i = 1; i < neighbors.length; i++) {
      if (neighbors[i].size > neighbors[idx].size)
        idx = i
    }
    ans += firewalls[idx]
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] < 0) {
          if (isInfected[i][j] !== -idx - 1)
            isInfected[i][j] = 1
          else
            isInfected[i][j] = 2
        }
      }
    }

    for (let i = 0; i < neighbors.length; i++) {
      if (i !== idx) {
        for (const val of neighbors[i]) {
          const x = val >> 16
          const y = val & ((1 << 16) - 1)
          isInfected[x][y] = 1
        }
      }
    }

    if (neighbors.length === 1) break
  }

  return ans
}
