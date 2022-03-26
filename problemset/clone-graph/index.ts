import { Node } from '~/utils/graph'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param node
 */
export function cloneGraph(node: Node | null): Node | null {
  const visited = new Map<Node, Node>()
  return _cloneNode(node)

  function _cloneNode(node: Node | null): Node | null {
    if (node === null) return null

    // 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回
    if (visited.has(node))
      return visited.get(node)!

    // 克隆节点，注意到为了深拷贝我们不会克隆它的邻居的列表
    const cloneNode = new Node(node.val)
    // 哈希表存储
    visited.set(node, cloneNode)

    // 遍历该节点的邻居并更新克隆节点的邻居列表
    for (const neighbor of node.neighbors)
      cloneNode.neighbors.push(<Node>_cloneNode(neighbor))

    return cloneNode
  }
}

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param node
 */
export function cloneGraph2(node: Node | null): Node | null {
  if (node === null) return null

  const visited = new Map<Node, Node>()

  const queue: Node[] = [node]
  visited.set(node, new Node(node.val))

  while (queue.length) {
    const node = queue.pop()!
    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val))
        queue.unshift(neighbor)
      }
      visited.get(node)!.neighbors.push(visited.get(neighbor)!)
    }
  }

  return visited.get(node)!
}
