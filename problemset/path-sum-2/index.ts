import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ret: number[][] = []
  root && dfs(root, targetSum - root.val, [root.val])
  return ret

  function dfs(node: TreeNode, sum: number, temp: number[]) {
    if (node.left === null && node.right === null) {
      if (sum === 0) ret.push(temp)
      return
    }
    node.left && dfs(node.left, sum - node.left.val, [...temp, node.left.val])
    node.right
      && dfs(node.right, sum - node.right.val, [...temp, node.right.val])
  }
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param root
 * @param targetSum
 */
export function pathSum2(root: TreeNode | null, targetSum: number): number[][] {
  const ret: number[][] = []
  if (!root) return ret

  const queue: Array<{ node: TreeNode; sum: number; temp: number[] }> = [
    { node: root, sum: targetSum - root.val, temp: [root.val] },
  ]
  while (queue.length) {
    const { node, sum, temp } = queue.pop()!
    if (node.left === null && node.right === null) {
      if (sum === 0) ret.push(temp)
      continue
    }
    node.left
      && queue.unshift({
        node: node.left,
        sum: sum - node.left.val,
        temp: [...temp, node.left.val],
      })

    node.right
      && queue.unshift({
        node: node.right,
        sum: sum - node.right.val,
        temp: [...temp, node.right.val],
      })
  }

  return ret
}
