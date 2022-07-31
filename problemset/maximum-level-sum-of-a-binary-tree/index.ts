import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 * @returns
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) return NaN

  const queue: TreeNode[] = [root]
  let curLevel = 0
  let maxSum = -Number.MAX_VALUE
  let maxSumLevel = 0

  while (queue.length) {
    curLevel++
    const len = queue.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!
      sum += node.val
      node.left && queue.unshift(node.left)
      node.right && queue.unshift(node.right)
    }

    if (sum > maxSum) {
      maxSum = sum
      maxSumLevel = curLevel
    }
  }

  return maxSumLevel
}
