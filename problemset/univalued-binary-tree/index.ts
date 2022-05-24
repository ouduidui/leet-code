import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function isUnivalTree(root: TreeNode | null): boolean {
  if (root === null) return true

  const queue: TreeNode[] = [root]
  const val = root.val

  while (queue.length) {
    const node = queue.pop()!

    if (node.val !== val) return false

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return true
}

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function isUnivalTree2(root: TreeNode | null): boolean {
  if (root === null) return true
  if (root.left && (root.left.val !== root.val || !isUnivalTree2(root.left))) return false
  if (root.right && (root.right.val !== root.val || !isUnivalTree2(root.right))) return false

  return true
}
