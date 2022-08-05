import { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 * @param val
 * @param depth
 * @returns
 */
export function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (!root)
    return null

  if (depth === 1)
    return new TreeNode(val, root, null)

  if (depth === 2) {
    root.left = new TreeNode(val, root.left, null)
    root.right = new TreeNode(val, null, root.right)
  }
  else {
    root.left = addOneRow(root.left, val, depth - 1)
    root.right = addOneRow(root.right, val, depth - 1)
  }
  return root
}
