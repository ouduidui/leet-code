import type { TreeNode } from '~/utils/treeNode'

/**
 * 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param p
 * @returns
 */
export function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  const stack = []
  let prev: TreeNode | null = null
  let curr: TreeNode | null = root
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    if (prev === p) return curr

    prev = curr
    curr = curr.right
  }
  return null
}

/**
 * 利用二叉搜索树的性质
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param p
 * @returns
 */
export function inorderSuccessor2(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  let successor = null
  if (p?.right) {
    successor = p.right
    while (successor.left)
      successor = successor.left

    return successor
  }
  let node = root
  while (node) {
    if (node.val > p!.val) {
      successor = node
      node = node.left
    }
    else {
      node = node.right
    }
  }
  return successor
}
