import type { TreeNode } from '~/utils/treeNode'

/**
 * 广度优先搜索 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget(root: TreeNode | null, k: number): boolean {
  if (root === null) return false

  const set = new Set<number>()
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()!

    const diff = k - node.val
    if (set.has(diff)) return true
    set.add(node.val)

    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }

  return false
}

/**
 * 深度优先搜索 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget2(root: TreeNode | null, k: number): boolean {
  if (root === null) return false
  return dfs(root, k)

  function dfs(node: TreeNode, k: number, set = new Set<number>()): boolean {
    if (set.has(k - node.val)) return true

    set.add(node.val)

    if (
      (node.left && dfs(node.left, k, set))
      || (node.right && dfs(node.right, k, set))
    )
      return true

    return false
  }
}

/**
 * 深度优先搜索 + 中序遍历 + 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param k
 * @returns
 */
export function findTarget3(root: TreeNode | null, k: number): boolean {
  if (root === null) return false

  const list: number[] = []
  inorderTraversal(root, list)

  let left = 0
  let right = list.length - 1

  while (left < right) {
    const sum = list[left] + list[right]
    if (sum === k) return true
    if (sum < k) left++
    else right--
  }

  return false

  function inorderTraversal(node: TreeNode | null, list: number[]) {
    if (!node) return
    inorderTraversal(node.left, list)
    list.push(node.val)
    inorderTraversal(node.right, list)
  }
}
