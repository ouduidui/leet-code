import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @param key
 * @returns
 */
export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null

  if (root.val === key) {
    if (!root.left && !root.right) return null
    if (!root.right) return root.left
    if (!root.left) return root.right

    let successor = root.right
    while (successor.left)
      successor = successor.left

    root.right = deleteNode(root.right, successor.val)
    successor.right = root.right
    successor.left = root.left
    return successor
  }

  if (root.val > key)
    root.left = deleteNode(root.left, key)

  if (root.val < key)
    root.right = deleteNode(root.right, key)

  return root
}

/**
 * 迭代
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param root
 * @param key
 * @returns
 */
export function deleteNode2(root: TreeNode | null, key: number): TreeNode | null {
  let cur = root
  let curParent = null
  while (cur && cur.val !== key) {
    curParent = cur
    if (cur.val > key)
      cur = cur.left

    else
      cur = cur.right
  }
  if (!cur)
    return root

  if (!cur.left && !cur.right) {
    cur = null
  }
  else if (!cur.right) {
    cur = cur.left
  }
  else if (!cur.left) {
    cur = cur.right
  }
  else {
    let successor = cur.right; let successorParent = cur
    while (successor.left) {
      successorParent = successor
      successor = successor.left
    }
    if (successorParent.val === cur.val)
      successorParent.right = successor.right

    else
      successorParent.left = successor.right

    successor.right = cur.right
    successor.left = cur.left
    cur = successor
  }
  if (!curParent) {
    return cur
  }
  else {
    if (curParent.left && curParent.left.val === key)
      curParent.left = cur

    else
      curParent.right = cur

    return root
  }
}
