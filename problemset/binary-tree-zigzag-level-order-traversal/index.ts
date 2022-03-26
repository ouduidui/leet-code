import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[][]}
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []

  const ans: number[][] = []
  const queue: TreeNode[] = [root]
  let isOrderLeft = true // 判断方向

  while (queue.length) {
    const len = queue.length
    const values: number[] = []
    for (let i = 0; i < len; i++) {
      const tree = queue.shift()!
      // 控制插入顺序
      isOrderLeft ? values.push(tree.val) : values.unshift(tree.val)
      if (tree.left) queue.push(tree.left)
      if (tree.right) queue.push(tree.right)
    }

    isOrderLeft = !isOrderLeft
    ans.push(values)
  }

  return ans
}
