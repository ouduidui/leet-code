import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findBottomLeftValue(root: TreeNode | null): number {
  let maxHeight = 0
  let ans = 0
  dfs(root, 0)

  return ans

  function dfs(node: TreeNode | null, height: number) {
    if (!node) return

    height++
    dfs(node.left, height)
    dfs(node.right, height)
    if (height > maxHeight) {
      maxHeight = height
      ans = node.val
    }
  }
}

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findBottomLeftValue2(root: TreeNode | null): number {
  if (!root) return -1

  let ans = 0
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node = queue.pop()!
    node.right && queue.unshift(node.right)
    node.left && queue.unshift(node.left)
    ans = node.val
  }

  return ans
}
