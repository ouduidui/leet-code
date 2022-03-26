/**
 * 寻找出现在两条边中的节点
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param edges
 */
export function findCenter(edges: number[][]): number {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1]
}
