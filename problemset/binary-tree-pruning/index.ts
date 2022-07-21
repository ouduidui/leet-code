import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if (!root.left && !root.right && root.val === 0) return null

  return root
}
