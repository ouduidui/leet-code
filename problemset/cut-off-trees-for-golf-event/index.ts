/**
 * 广度优先搜索
 * @desc 时间复杂度 O(M²N²)  空间复杂度 O(MN)
 * @param forest
 * @returns
 */
export function cutOffTree(forest: number[][]): number {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const row = forest.length
  const col = forest[0].length
  const trees: [number, number][] = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++)
      if (forest[i][j] > 1) trees.push([i, j])
  }

  trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]])

  let cx = 0
  let cy = 0
  let ans = 0
  for (let i = 0; i < trees.length; i++) {
    const step = bfs(cx, cy, trees[i][0], trees[i][1])
    if (step === -1) return -1

    ans += step
    cx = trees[i][0]
    cy = trees[i][1]
  }

  return ans

  function bfs(sx: number, sy: number, tx: number, ty: number): number {
    if (sx === tx && sy === ty) return 0

    let step = 0
    const queue: [number, number][] = [[sx, sy]]
    const visited: boolean[][] = new Array(row).fill([]).map(() => new Array(col).fill(false))
    visited[sx][sy] = true

    while (queue.length) {
      step++
      const size = queue.length
      for (let i = 0; i < size; i++) {
        const [cx, cy] = queue.shift()!

        for (const dir of dirs) {
          const nx = cx + dir[0]
          const ny = cy + dir[1]
          if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
            if (!visited[nx][ny] && forest[nx][ny] > 0) {
              if (nx === tx && ny === ty) return step

              queue.push([nx, ny])
              visited[nx][ny] = true
            }
          }
        }
      }
    }
    return -1
  }
}
