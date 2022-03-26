import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function maxPathSum(root: TreeNode | null): number {
  let maxValue = -Number.MAX_VALUE
  dfs(root)
  return maxValue

  // 递归获取单分支路径最大和
  function dfs(node: TreeNode | null): number {
    if (node === null) return 0

    // 获取左右分支最大路径和
    const leftCount = Math.max(0, dfs(node.left))
    const rightCount = Math.max(0, dfs(node.right))

    // 更新返回值
    // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值
    maxValue = Math.max(node.val + leftCount + rightCount, maxValue)

    // 返回节点的最大贡献值
    return node.val + Math.max(leftCount, rightCount)
  }
}
