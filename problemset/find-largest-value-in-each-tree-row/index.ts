import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function largestValues(root: TreeNode | null): number[] {
  const ans: number[] = []

  if (root) {
    const queue: TreeNode[] = [root]

    while (queue.length) {
      let len = queue.length
      let maxVal = -Number.MAX_VALUE
      while (len--) {
        const node = queue.pop()!
        maxVal = Math.max(maxVal, node.val)
        node.left && queue.unshift(node.left)
        node.right && queue.unshift(node.right)
      }
      ans.push(maxVal)
    }
  }

  return ans
}
