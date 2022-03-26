import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[][]}
 */
export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return []

  const ans: number[][] = [[root.val]]
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const temp: number[] = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const tree = queue.pop()!

      if (tree.left) {
        temp.push(tree.left.val)
        queue.unshift(tree.left)
      }

      if (tree.right) {
        temp.push(tree.right.val)
        queue.unshift(tree.right)
      }
    }

    temp.length && ans.unshift(temp)
  }

  return ans
}
