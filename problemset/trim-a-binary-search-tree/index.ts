import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param low
 * @param high
 * @returns
 */
export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) return null

  if (root.val < low) {
    return trimBST(root.right, low, high)
  }
  else if (root.val > high) {
    return trimBST(root.left, low, high)
  }
  else {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @param low
 * @param high
 * @returns
 */
export function trimBST2(root: TreeNode | null, low: number, high: number): TreeNode | null {
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) root = root.right
    else root = root.left
  }
  if (!root) return null

  for (let node = root; node.left;) {
    if (node.left.val < low)
      node.left = node.left.right

    else
      node = node.left
  }
  for (let node = root; node.right;) {
    if (node.right.val > high)
      node.right = node.right.left

    else
      node = node.right
  }
  return root
}
