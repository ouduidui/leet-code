import type { TreeNode } from '~/utils/treeNode'

/**
 * 迭代 - 广度优先查找
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const ans: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const vals: number[] = []
    const queueLen = queue.length
    for (let i = 0; i < queueLen; i++) {
      const tree = queue.shift()!
      vals.push(tree.val)
      tree.left && queue.push(tree.left)
      tree.right && queue.push(tree.right)
    }
    ans.push(vals)
  }

  return ans
}
