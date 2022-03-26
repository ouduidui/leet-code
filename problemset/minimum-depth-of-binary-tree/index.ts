import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(H) 二叉树的高度
 * @param root
 */
export function minDepth(root: TreeNode | null): number {
  if (root === null) return 0

  if (root.left === null && root.right === null) return 1

  let ret = Number.MAX_VALUE
  if (root.left)
    ret = Math.min(minDepth(root.left), ret)

  if (root.right)
    ret = Math.min(minDepth(root.right), ret)

  return ret + 1
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function minDepth2(root: TreeNode | null): number {
  if (root === null) return 0
  const queue: Array<{ node: TreeNode; depth: number }> = [
    { node: root, depth: 1 },
  ]
  while (queue.length) {
    const { node, depth } = queue.pop()!
    if (node.left === null && node.right === null) return depth
    if (node.left) queue.unshift({ node: node.left, depth: depth + 1 })
    if (node.right) queue.unshift({ node: node.right, depth: depth + 1 })
  }

  return 0
}
