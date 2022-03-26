import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity)

  function helper(
    root: TreeNode | null,
    lower: number, // 下界
    upper: number, // 上界
  ): boolean {
    if (root === null) return true

    if (root.val <= lower || root.val >= upper) return false

    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    )
  }
}

/**
 * 中序遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function isValidBST2(root: TreeNode | null): boolean {
  const stack: TreeNode[] = []
  let inorder = -Infinity

  while (stack.length || root !== null) {
    // 将root指向最左边的节点
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!

    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder)
      return false

    inorder = root.val
    root = root.right
  }

  return true
}
