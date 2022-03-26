import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root
 */
export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = []

  if (!root) return result

  const queue: TreeNode[] = [root]
  let row = 0

  while (queue.length) {
    const len = queue.length
    let node: TreeNode
    for (let i = 0; i < len; i++) {
      node = queue.pop()!
      node.left && queue.unshift(node.left)
      node.right && queue.unshift(node.right)
    }
    result[row++] = node!.val
  }

  return result
}
