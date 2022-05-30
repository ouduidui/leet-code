import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function sumRootToLeaf(root: TreeNode | null): number {
  return dfs(root, 0)

  function dfs(node: TreeNode | null, val: number): number {
    if (!node) return 0

    val = val << 1 | node.val

    if (!node.left && !node.right) return val
    return dfs(node.left, val) + dfs(node.right, val)
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function sumRootToLeaf2(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let val = 0
  let ans = 0
  let prev: TreeNode | null = null

  while (stack.length || root) {
    while (root) {
      val = val << 1 | root.val
      stack.push(root)
      root = root.left
    }
    root = stack[stack.length - 1]

    if (!root.right || root.right === prev) {
      if (!root.left && !root.right) ans += val
      val >>= 1
      stack.pop()
      prev = root
      root = null
    }
    else {
      root = root.right
    }
  }

  return ans
}
