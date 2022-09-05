import type { TreeNode } from '~/utils/treeNode'

/**
 * 使用序列化进行唯一表示
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const seen = new Map<string, TreeNode | null>()
  const repeat = new Set<TreeNode | null>()
  const dfs = (node: TreeNode | null) => {
    if (!node) return ''

    let sb = ''
    sb += node.val
    sb += '('
    sb += dfs(node.left)
    sb += ')('
    sb += dfs(node.right)
    sb += ')'
    if (seen.has(sb))
      repeat.add(seen.get(sb)!)
    else
      seen.set(sb, node)

    return sb
  }
  dfs(root)
  return [...repeat]
}

/**
 * 使用三元组进行唯一表示
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function findDuplicateSubtrees2(root: TreeNode | null): Array<TreeNode | null> {
  const seen = new Map<string, [TreeNode | null, number]>()
  const repeat = new Set<TreeNode | null>()
  let idx = 0
  const dfs = (node: TreeNode | null) => {
    if (!node)
      return 0

    const tri: [number, number, number] = [node.val, dfs(node.left), dfs(node.right)]
    const hash = tri.toString()
    if (seen.has(hash)) {
      const pair = seen.get(hash)!
      repeat.add(pair[0])
      return pair[1]
    }
    else {
      seen.set(hash, [node, ++idx])
      return idx
    }
  }
  dfs(root)
  return [...repeat]
}
