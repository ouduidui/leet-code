import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度遍历优先
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function longestUnivaluePath(root: TreeNode | null): number {
  let res = 0
  const dfs = (root: TreeNode | null) => {
    if (!root)
      return 0

    const left = dfs(root.left); const right = dfs(root.right)
    let left1 = 0; let right1 = 0
    if (root.left && root.left.val === root.val)
      left1 = left + 1

    if (root.right && root.right.val === root.val)
      right1 = right + 1

    res = Math.max(res, left1 + right1)
    return Math.max(left1, right1)
  }
  dfs(root)
  return res
}
