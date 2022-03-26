import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  return helper(root.left, root.right)

  function helper(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false
    return helper(left.left, right.right) && helper(left.right, right.left)
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function isSymmetric2(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [root, root]

  while (queue.length > 0) {
    const u = queue.shift()!
    const v = queue.shift()!

    if (!u && !v) return true
    if (!u || !v) return false
    if (u.val !== v.val) return false

    queue.push(u.left)
    queue.push(v.right)

    queue.push(u.right)
    queue.push(v.left)
  }

  return true
}
