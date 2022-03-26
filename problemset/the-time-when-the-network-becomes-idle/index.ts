/**
 * 广度优先搜索
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param edges
 * @param patience
 * @returns
 */
export function networkBecomesIdle(
  edges: number[][],
  patience: number[],
): number {
  const len = patience.length

  const visit = new Array(len).fill(false)
  visit[0] = true

  // 整理依赖图，index为节点，value为相连节点集合
  const adj = new Array(len).fill([]).map(() => [] as number[])
  for (const v of edges) {
    adj[v[0]].push(v[1])
    adj[v[1]].push(v[0])
  }

  const queue = [0]
  let dist = 1 // 节点v到节点0的最短距离
  let ans = 0

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const curr = queue.pop()!
      for (const v of adj[curr]) {
        // 如果节点处理过，就直接跳过
        if (visit[v]) continue
        // 入队
        queue.unshift(v)
        // 计算该节点的变为空闲的时间
        const time
          = patience[v] * (((2 * dist - 1) / patience[v]) >> 0) + 2 * dist + 1
        // 更新ans
        ans = Math.max(ans, time)
        visit[v] = true
      }
    }
    dist++
  }

  return ans
}
