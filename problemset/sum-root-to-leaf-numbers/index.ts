import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function sumNumbers(root: TreeNode | null): number {
  let res = 0
  root && dfs(root, root.val)
  return res

  function dfs(node: TreeNode, sum: number) {
    if (!node.left && !node.right) {
      res += sum
    }
    else {
      node.left && dfs(node.left, sum * 10 + node.left.val)
      node.right && dfs(node.right, sum * 10 + node.right.val)
    }
  }
}

/**
 * 广度优先搜索
 * @param root
 */
export function sumNumbers2(root: TreeNode | null): number {
  if (!root) return 0

  let sum = 0
  const nodeQueue: TreeNode[] = [root]
  const numQueue: number[] = [root.val]

  while (nodeQueue.length) {
    const node = nodeQueue.shift()!
    const num = numQueue.shift()!

    if (!node.left && !node.right) {
      sum += num
    }
    else {
      if (node.left) {
        nodeQueue.push(node.left)
        numQueue.push(num * 10 + node.left.val)
      }
      if (node.right) {
        nodeQueue.push(node.right)
        numQueue.push(num * 10 + node.right.val)
      }
    }
  }

  return sum
}
