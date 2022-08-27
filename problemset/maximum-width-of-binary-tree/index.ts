import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  let res = 1
  const queue: [TreeNode, number][] = [[root, 1]]

  while (queue.length) {
    const size = queue.length
    let left = 0
    let right = 0
    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift()!
      if (node.left)
        queue.push([node.left, index * 2])

      if (node.right)
        queue.push([node.right, index * 2 + 1])

      if (i === 0)
        left = index
      else if (i === size - 1)
        right = index
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function widthOfBinaryTree2(root: TreeNode | null): number {
  const map = new Map<number, number>()
  return dfs(root, 1, 1)

  function dfs(node: TreeNode | null, depth: number, index: number): number {
    if (!node) return 0

    !map.has(depth) && map.set(depth, index)

    return Math.max(
      index - map.get(depth)! + 1,
      dfs(node.left, depth + 1, index * 2),
      dfs(node.right, depth + 1, index * 2 + 1),
    )
  }
}
