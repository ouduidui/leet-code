import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root
  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  return root
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root

  const queue = [root]

  while (queue.length) {
    const node = queue.pop()!
    const temp = node.left
    node.left = node.right
    node.right = temp

    if (node.left) queue.unshift(node.left)
    if (node.right) queue.unshift(node.right)
  }

  return root
}
