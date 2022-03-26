/**
 * 多源广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param isWater {number[][]}
 * @return {number[][]}
 */
export function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length
  const n = isWater[0].length

  if (m === 0 || n === 0) return []

  // 初始化返回数组，将未处理的区域设置为-1
  const ans: number[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(-1))

  // 初始化队列
  const queue: number[][] = []

  // 先处理水域部分，将其设置为0，并且入队
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        ans[i][j] = 0
        queue.unshift([i, j])
      }
    }
  }

  // 四个方向
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  // 遍历队列，向四个方向扩展处理
  while (queue.length) {
    // 此处的辅助队列是为了避免处理超时
    const _queue = [...queue]
    queue.length = 0
    while (_queue.length) {
      const position = _queue.pop()!
      for (const dir of dirs) {
        const x = position[0] + dir[0]
        const y = position[1] + dir[1]
        if (x >= 0 && x < m && y >= 0 && y < n && ans[x][y] === -1) {
          ans[x][y] = ans[position[0]][position[1]] + 1
          // 处理完入队，还需要进行向四周扩展处理
          queue.unshift([x, y])
        }
      }
    }
  }

  return ans
}
