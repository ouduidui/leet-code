import { TreeNode } from '~/utils/treeNode'

/**
 * 回溯
 * @desc 时间复杂度 O(4^N / √N)   空间复杂度 O(4^N / √N)
 * @param n {number}
 * @return {Array<TreeNode | null>}
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  return dfs(1, n)

  function dfs(start: number, end: number): Array<TreeNode | null> {
    const allTrees: Array<TreeNode | null> = []

    if (start > end) {
      allTrees.push(null)
      return allTrees
    }

    // 枚举可行根节点
    for (let i = start; i <= end; i++) {
      // 获得所有可行的左子树集合
      const leftTrees = dfs(start, i - 1)
      // 获得所有可行的右子树集合
      const rightTrees = dfs(i + 1, end)

      // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const cur = new TreeNode(i)
          cur.left = left
          cur.right = right
          allTrees.push(cur)
        }
      }
    }

    return allTrees
  }
}
