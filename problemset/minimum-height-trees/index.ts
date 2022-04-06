/**
 * 拓扑排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param edges
 * @returns
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0]

  const degree = new Array<number>(n).fill(0)
  const adj = new Array(n).fill([]).map(() => [] as number[])
  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
    degree[edge[0]]++
    degree[edge[1]]++
  }

  const queue: number[] = []
  // 将度为1的节点压入队列
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1)
      queue.push(i)
  }

  // 剩余节点
  let remainNodes = n
  while (remainNodes > 2) {
    const sz = queue.length
    remainNodes -= sz
    for (let i = 0; i < sz; i++) {
      const cur = queue.shift()!
      for (const v of adj[cur]) {
        degree[v]--
        if (degree[v] === 1)
          queue.push(v)
      }
    }
  }

  return queue
}
