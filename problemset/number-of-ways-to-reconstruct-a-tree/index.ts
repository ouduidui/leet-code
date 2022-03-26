/**
 * 直接模拟
 * @desc 时间复杂度 O(m + n^2)  空间复杂度 O(m)
 * @param pairs
 */
export function checkWays(pairs: number[][]): number {
  const adj = new Map<number, Set<number>>()
  for (const p of pairs) {
    if (!adj.has(p[0])) adj.set(p[0], new Set<number>())
    if (!adj.has(p[1])) adj.set(p[1], new Set<number>())
    adj.get(p[0])!.add(p[1])
    adj.get(p[1])!.add(p[0])
  }

  // 检测是否有根节点
  let root = -1
  const entries = new Set<[number, Set<number>]>()
  for (const entry of adj.entries())
    entries.add(entry)

  for (const [node, neg] of entries) {
    // 满足 degree[root] = n - 1
    if (neg.size === adj.size - 1)
      root = node
  }

  if (root === -1) return 0

  let res = 1

  for (const [node, neg] of entries) {
    // 如果当前节点为根节点
    if (root === node) continue

    const currDegree = neg.size
    let parentNode = -1
    let parentDegree = Number.MAX_VALUE
    // 根据degree的大小找到当前节点的父节点
    for (const neighbour of neg) {
      if (
        adj.has(neighbour)
        && adj.get(neighbour)!.size < parentDegree
        && adj.get(neighbour)!.size >= currDegree
      ) {
        parentNode = neighbour
        parentDegree = adj.get(neighbour)!.size
      }
    }

    if (parentNode === -1) return 0

    // 检测父节点的集合是否包含所有的孩子节点
    for (const neighbour of neg) {
      if (neighbour === parentNode) continue
      if (!adj.get(parentNode)!.has(neighbour)) return 0
    }

    if (parentDegree === currDegree) res = 2
  }

  return res
}
