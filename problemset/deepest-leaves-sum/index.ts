import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  let maxLevel = -1
  let sum = 0
  dfs(root, 0)
  return sum

  function dfs(node: TreeNode | null, level: number) {
    if (!node) return

    if (level > maxLevel) {
      maxLevel = level
      sum = node.val
    }
    else if (level === maxLevel) {
      sum += node.val
    }

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function deepestLeavesSum2(root: TreeNode | null): number {
  let sum = 0
  if (!root) return sum

  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length) {
    sum = 0
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      sum += node.val
      if (node.left)
        queue.push(node.left)

      if (node.right)
        queue.push(node.right)
    }
  }
  return sum
}
