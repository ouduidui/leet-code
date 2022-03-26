import type { TreeNode } from '~/utils/treeNode'

/**
 * 自顶向下的递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function isBalanced(root: TreeNode | null): boolean {
  return height(root) >= 0

  function height(root: TreeNode | null): number {
    if (root === null)
      return 0

    const leftHeight = height(root.left)
    const rightHeight = height(root.right)
    if (
      leftHeight === -1
      || rightHeight === -1
      || Math.abs(leftHeight - rightHeight) > 1
    )
      return -1
    else
      return Math.max(leftHeight, rightHeight) + 1
  }
}
