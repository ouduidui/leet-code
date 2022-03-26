import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 */
export class BSTIterator {
  values: number[] = []

  constructor(root: TreeNode | null) {
    dfs(root, this.values)
  }

  next(): number {
    return this.values.shift()!
  }

  hasNext(): boolean {
    return this.values.length > 0
  }
}

function dfs(node: TreeNode | null, result: number[] = []) {
  if (node === null) return
  if (node.left) dfs(node.left, result)
  result.push(node.val)
  if (node.right) dfs(node.right, result)
}
