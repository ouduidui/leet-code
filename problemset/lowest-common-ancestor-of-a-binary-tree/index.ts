import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let ans = root
  dfs(root, p!.val, q!.val)
  return ans

  function dfs(
    node: TreeNode | null,
    pVal: number,
    qVal: number,
  ): boolean {
    if (node === null) return false

    // 判断左右子树分别有没有p和q节点
    const leftSon = dfs(node.left, pVal, qVal)
    const rightSon = dfs(node.right, pVal, qVal)
    if (
      (leftSon && rightSon)
      || ((node.val === pVal || node.val === qVal) && (leftSon || rightSon))
    )
      ans = node

    return leftSon || rightSon || (node.val === pVal) || (node.val === qVal)
  }
}

/**
 * 存储父节点
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const parents = new Map<number, TreeNode>()
  const visited = new Set<number>()
  // 递归搜集所有父节点
  dfs(root!, parents)

  while (p !== null) {
    visited.add(p.val)
    p = parents.get(p.val) || null
  }

  while (q !== null) {
    if (visited.has(q.val))
      return q

    q = parents.get(q.val) || null
  }

  return null

  function dfs(
    node: TreeNode,
    parents: Map<number, TreeNode>,
  ) {
    if (node.left) {
      parents.set(node.left.val, node)
      dfs(node.left, parents)
    }
    if (node.right) {
      parents.set(node.right.val, node)
      dfs(node.right, parents)
    }
  }
}
