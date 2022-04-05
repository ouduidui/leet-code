import type { TreeNode } from '~/utils/treeNode'

/**
 * 暴力递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function countNodes(root: TreeNode | null): number {
  return root === null ? 0 : countNodes(root.left) + countNodes(root.right) + 1
}

/**
 * 二分查找 + 位运算
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(1)
 * @param root
 * @returns
 */
export function countNodes2(root: TreeNode | null): number {
  if (root === null) return 0

  // 计算完全二叉树的深度
  let level = 0
  let node = root
  while (node.left !== null) {
    level++
    node = node.left
  }

  // 二叉树第 n 层有 2^n-1 个节点
  // level = 8
  // low = 1000 0000
  // high = 1111 1111
  let low = 1 << level
  let high = (1 << (level + 1)) - 1
  // 二分法找到level深度的最后一个节点
  while (low < high) {
    const mid = (high + low + 1) >> 1
    if (exists(root, level, mid))
      low = mid
    else
      high = mid - 1
  }

  return low

  /**
   * 判断二叉树的第level层的第k个节点是否存在
   * @param root
   * @param level
   * @param k
   * @returns
   */
  function exists(root: TreeNode, level: number, k: number) {
    let bits = 1 << (level - 1)
    let node: TreeNode | null = root
    while (node !== null && bits > 0) {
      if (!(bits & k))
        node = node.left
      else
        node = node.right

      bits >>= 1
    }

    return node !== null
  }
}
