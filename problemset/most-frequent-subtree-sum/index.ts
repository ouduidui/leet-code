import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @returns
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  if (!root) return []

  const map = new Map<number, number>()
  let maxCount = 0
  dfs(root)

  const ans: number[] = []
  for (const [num, cnt] of map)
    if (cnt === maxCount) ans.push(num)

  return ans

  function dfs(node: TreeNode): number {
    let sum = node.val

    if (node.left) sum += dfs(node.left)
    if (node.right) sum += dfs(node.right)

    const count = (map.get(sum) || 0) + 1
    map.set(sum, count)
    maxCount = Math.max(maxCount, count)

    return sum
  }
}
