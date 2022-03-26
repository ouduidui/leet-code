import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(H) 树的高度
 * @param root {TreeNode | null}
 * @return {number}
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(H) 树的高度
 * @param root {TreeNode | null}
 * @return {number}
 */
export function maxDepth2(root: TreeNode | null): number {
  if (root === null) return 0

  const queue: TreeNode[] = [root]
  let ans = 0

  while (queue.length) {
    ans += 1
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const tree = queue.shift()!
      if (tree.left) queue.push(tree.left)
      if (tree.right) queue.push(tree.right)
    }
  }

  return ans
}
