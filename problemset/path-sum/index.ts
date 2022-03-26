import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(H) 二叉树的高度
 * @param root
 * @param targetSum
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false
  if (root.left === null && root.right === null) return root.val === targetSum
  return (
    hasPathSum(root.left, targetSum - root.val)
    || hasPathSum(root.right, targetSum - root.val)
  )
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false

  const queue: TreeNode[] = [root]
  const valQueue: number[] = [root.val]
  while (queue.length) {
    const node = queue.pop()!
    const val = valQueue.pop()!
    if (node.left === null && node.right === null) {
      if (targetSum === val) return true
      continue
    }
    if (node.left) {
      queue.unshift(node.left)
      valQueue.unshift(val + node.left.val)
    }

    if (node.right) {
      queue.unshift(node.right)
      valQueue.unshift(val + node.right.val)
    }
  }

  return false
}
